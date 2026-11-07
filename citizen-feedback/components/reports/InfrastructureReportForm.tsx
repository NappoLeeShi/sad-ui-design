"use client";

import { LocateFixed, Map as MapIcon, MapPin, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { fieldDescribedBy, Field } from "@/components/ui/Field";
import { ImageUploader } from "@/components/ui/ImageUploader";
import { RadioCardGroup } from "@/components/ui/RadioCardGroup";
import { ReadOnlyAccountCard } from "@/components/ui/ReadOnlyAccountCard";
import { Section } from "@/components/ui/Section";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";
import { TextInput } from "@/components/ui/TextInput";
import { createReport } from "@/lib/mock/mockReportService";
import type {
  CreateReportResult,
  ReportEvidence,
  ReportOptions,
  ReportReporter,
  SelectOption,
} from "@/lib/types/report";
import { formatCoordinates } from "@/lib/utils/format";

import {
  LocationPickerDialog,
  type PickedLocation,
} from "./LocationPickerDialog";
import { ReportSuccessState } from "./ReportSuccessState";

type FieldKey =
  | "infrastructureType"
  | "infrastructureTypeOther"
  | "issueType"
  | "issueTypeOther"
  | "severity"
  | "location"
  | "address"
  | "summary"
  | "description"
  | "confirmed";

interface FormState {
  infrastructureType: string;
  infrastructureTypeOther: string;
  issueType: string;
  issueTypeOther: string;
  severity: string;
  address: string;
  summary: string;
  description: string;
  confirmed: boolean;
}

const INITIAL_FORM: FormState = {
  infrastructureType: "",
  infrastructureTypeOther: "",
  issueType: "",
  issueTypeOther: "",
  severity: "",
  address: "",
  summary: "",
  description: "",
  confirmed: false,
};

const ADDRESS_HINT =
  "Địa chỉ được điền tự động khi chọn trên bản đồ. Bạn có thể chỉnh sửa lại nếu cần.";

export interface InfrastructureReportFormProps {
  reporter: ReportReporter;
  options: ReportOptions["infrastructure"];
  evidenceOptions: ReportOptions["evidence"];
  historyHref: string;
}

function infrastructureTitle(
  type: string,
  typeOther: string,
  summary: string,
  options: SelectOption[],
): string {
  const label =
    type === "other"
      ? typeOther.trim() || "Hạ tầng khác"
      : (options.find((option) => option.value === type)?.label ??
        "Cơ sở hạ tầng");

  return `${label}: ${summary.trim()}`;
}

export function InfrastructureReportForm({
  reporter,
  options,
  evidenceOptions,
  historyHref,
}: InfrastructureReportFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [pickedLocation, setPickedLocation] = useState<PickedLocation | null>(
    null,
  );
  const [evidence, setEvidence] = useState<ReportEvidence[]>([]);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [result, setResult] = useState<CreateReportResult | null>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [autoLocate, setAutoLocate] = useState(false);
  const mapCloseFocusRef = useRef<"trigger" | "address">("trigger");
  const wasMapOpenRef = useRef(false);

  useEffect(() => {
    if (wasMapOpenRef.current && !mapOpen) {
      const target =
        mapCloseFocusRef.current === "address"
          ? document.getElementById("infrastructure-address")
          : document.getElementById("open-map-button");

      // Let the native dialog finish closing before returning focus.
      const timer = window.setTimeout(() => target?.focus(), 0);
      wasMapOpenRef.current = mapOpen;

      return () => window.clearTimeout(timer);
    }

    wasMapOpenRef.current = mapOpen;
  }, [mapOpen]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function clearError(key: FieldKey) {
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function focusFirstError(nextErrors: Partial<Record<FieldKey, string>>) {
    const order: FieldKey[] = [
      "infrastructureType",
      "infrastructureTypeOther",
      "issueType",
      "issueTypeOther",
      "severity",
      "location",
      "address",
      "summary",
      "description",
      "confirmed",
    ];
    const first = order.find((key) => nextErrors[key]);
    if (!first) return;

    if (first === "severity") {
      document.querySelector<HTMLElement>('input[name="severity"]')?.focus();
      return;
    }

    document
      .getElementById(
        {
          infrastructureType: "infrastructure-type",
          infrastructureTypeOther: "infrastructure-type-other",
          issueType: "issue-type",
          issueTypeOther: "issue-type-other",
          location: "open-map-button",
          address: "infrastructure-address",
          summary: "infrastructure-summary",
          description: "infrastructure-description",
          confirmed: "confirmation",
        }[first],
      )
      ?.focus();
  }

  function openMap(locate = false) {
    mapCloseFocusRef.current = "trigger";
    setAutoLocate(locate);
    setMapOpen(true);
  }

  function closeMap() {
    mapCloseFocusRef.current = "trigger";
    setMapOpen(false);
    setAutoLocate(false);
  }

  function handleLocationConfirm(next: PickedLocation) {
    const nextAddress = next.address || form.address;

    setPickedLocation(next);
    update("address", nextAddress);
    clearError("location");

    if (nextAddress.trim()) {
      clearError("address");
    } else {
      setErrors((current) => ({
        ...current,
        address: "Vui lòng nhập địa chỉ cho vị trí đã chọn.",
      }));
    }

    mapCloseFocusRef.current = "address";
    setMapOpen(false);
    setAutoLocate(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldKey, string>> = {};

    if (!form.infrastructureType) {
      nextErrors.infrastructureType = "Vui lòng chọn loại hạ tầng cần phản ánh.";
    }

    if (
      form.infrastructureType === "other" &&
      !form.infrastructureTypeOther.trim()
    ) {
      nextErrors.infrastructureTypeOther =
        "Vui lòng nhập loại hạ tầng cần phản ánh.";
    }

    if (!form.issueType) {
      nextErrors.issueType = "Vui lòng chọn loại sự cố hoặc vấn đề.";
    }

    if (form.issueType === "other" && !form.issueTypeOther.trim()) {
      nextErrors.issueTypeOther = "Vui lòng mô tả ngắn gọn sự cố hoặc vấn đề.";
    }

    if (!form.severity) {
      nextErrors.severity = "Vui lòng chọn mức độ ảnh hưởng.";
    }

    if (!pickedLocation) {
      nextErrors.location =
        "Vui lòng chọn vị trí trên bản đồ hoặc dùng vị trí hiện tại.";
    }

    if (!form.address.trim()) {
      nextErrors.address = pickedLocation
        ? "Vui lòng nhập hoặc điều chỉnh địa chỉ cho vị trí đã chọn."
        : "Vui lòng nhập địa chỉ chi tiết.";
    }

    if (!form.summary.trim()) {
      nextErrors.summary = "Vui lòng mô tả ngắn gọn vấn đề.";
    }

    if (!form.description.trim()) {
      nextErrors.description = "Vui lòng mô tả chi tiết vấn đề cần phản ánh.";
    }

    if (!form.confirmed) {
      nextErrors.confirmed =
        "Vui lòng xác nhận thông tin trước khi gửi báo cáo.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      focusFirstError(nextErrors);
      return;
    }

    if (!pickedLocation) return;

    const created = createReport({
      category: "infrastructure",
      title: infrastructureTitle(
        form.infrastructureType,
        form.infrastructureTypeOther,
        form.summary,
        options.types,
      ),
      description: form.description.trim(),
      location: {
        address: form.address.trim(),
        lat: pickedLocation.lat,
        lng: pickedLocation.lng,
        source: pickedLocation.source,
      },
      evidence,
      details: {
        infrastructureType: form.infrastructureType,
        infrastructureTypeOther:
          form.infrastructureType === "other"
            ? form.infrastructureTypeOther.trim()
            : undefined,
        issueType: form.issueType,
        issueTypeOther:
          form.issueType === "other"
            ? form.issueTypeOther.trim()
            : undefined,
        severity: form.severity,
        summary: form.summary.trim(),
      },
    });

    setErrors({});
    setResult(created);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setPickedLocation(null);
    setEvidence([]);
    setErrors({});
    setResult(null);
    setMapOpen(false);
    setAutoLocate(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (result) {
    return (
      <ReportSuccessState
        result={result}
        historyHref={historyHref}
        onReset={handleReset}
      />
    );
  }

  const locationSourceLabel =
    pickedLocation?.source === "geolocation"
      ? "Từ vị trí hiện tại"
      : "Chọn trên bản đồ";

  return (
    <main className="flex-1 px-5 pt-5">
      <p className="mb-5 text-caption leading-5 text-on-surface/60">
        Các trường có dấu{" "}
        <span aria-hidden className="font-semibold text-primary">
          *
        </span>{" "}
        là bắt buộc. Chọn vị trí trên bản đồ để cơ quan chức năng kiểm tra đúng
        nơi xảy ra sự cố.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <Section
          index={1}
          title="Thông tin người báo cáo"
          description="Thông tin được lấy từ tài khoản định danh và không thể chỉnh sửa."
        >
          <ReadOnlyAccountCard reporter={reporter} />
        </Section>

        <Section
          index={2}
          title="Thông tin hạ tầng"
          description="Cho biết loại công trình và tình trạng bạn quan sát được."
        >
          <SelectField
            id="infrastructure-type"
            label="Loại hạ tầng"
            required
            options={options.types}
            placeholder="Chọn loại hạ tầng"
            value={form.infrastructureType}
            onChange={(event) => {
              update("infrastructureType", event.target.value);
              clearError("infrastructureType");
              clearError("infrastructureTypeOther");
            }}
            error={errors.infrastructureType}
          />

          {form.infrastructureType === "other" && (
            <Field
              id="infrastructure-type-other"
              label="Loại hạ tầng khác"
              required
              error={errors.infrastructureTypeOther}
            >
              <TextInput
                id="infrastructure-type-other"
                value={form.infrastructureTypeOther}
                onChange={(event) => {
                  update("infrastructureTypeOther", event.target.value);
                  clearError("infrastructureTypeOther");
                }}
                invalid={Boolean(errors.infrastructureTypeOther)}
                aria-describedby={fieldDescribedBy("infrastructure-type-other", {
                  error: errors.infrastructureTypeOther,
                })}
                placeholder="Ví dụ: cầu đi bộ, bảng hiệu công cộng"
              />
            </Field>
          )}

          <SelectField
            id="issue-type"
            label="Loại sự cố hoặc vấn đề"
            required
            options={options.issues}
            placeholder="Chọn tình trạng hiện tại"
            value={form.issueType}
            onChange={(event) => {
              update("issueType", event.target.value);
              clearError("issueType");
              clearError("issueTypeOther");
            }}
            error={errors.issueType}
          />

          {form.issueType === "other" && (
            <Field
              id="issue-type-other"
              label="Sự cố khác"
              required
              error={errors.issueTypeOther}
            >
              <TextInput
                id="issue-type-other"
                value={form.issueTypeOther}
                onChange={(event) => {
                  update("issueTypeOther", event.target.value);
                  clearError("issueTypeOther");
                }}
                invalid={Boolean(errors.issueTypeOther)}
                aria-describedby={fieldDescribedBy("issue-type-other", {
                  error: errors.issueTypeOther,
                })}
                placeholder="Mô tả ngắn gọn tình trạng"
              />
            </Field>
          )}

          <RadioCardGroup
            name="severity"
            legend="Mức độ ảnh hưởng"
            required
            options={options.severities}
            value={form.severity}
            onChange={(value) => {
              update("severity", value);
              clearError("severity");
            }}
            error={errors.severity}
          />

          <Field
            id="infrastructure-summary"
            label="Mô tả ngắn về vấn đề"
            required
            error={errors.summary}
            hint="Một câu ngắn nêu rõ điều đang bị hư hỏng hoặc không hoạt động."
          >
            <TextInput
              id="infrastructure-summary"
              value={form.summary}
              onChange={(event) => {
                update("summary", event.target.value);
                clearError("summary");
              }}
              invalid={Boolean(errors.summary)}
              aria-describedby={fieldDescribedBy("infrastructure-summary", {
                hint: "Một câu ngắn nêu rõ điều đang bị hư hỏng hoặc không hoạt động.",
                error: errors.summary,
              })}
              placeholder="Ví dụ: Ổ gà lớn giữa làn xe máy"
              maxLength={120}
            />
          </Field>
          <p className="-mt-2 text-right text-caption tabular-nums text-on-surface/55">
            {form.summary.length}/120
          </p>
        </Section>

        <Section
          index={3}
          title="Vị trí phản ánh"
          description="Chọn chính xác vị trí trên bản đồ. Bạn vẫn có thể sửa địa chỉ sau khi chọn."
        >
          {pickedLocation ? (
            <div className="rounded-card border border-outline/25 bg-surface-variant/50 px-4 py-3.5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-2.5">
                  <MapPin
                    aria-hidden
                    strokeWidth={1.5}
                    className="mt-0.5 size-5 shrink-0 text-primary"
                  />
                  <div className="min-w-0 space-y-0.5">
                    <p className="text-label font-medium text-on-surface">
                      Đã chọn vị trí
                    </p>
                    <p className="text-caption tabular-nums text-on-surface/60">
                      {formatCoordinates(
                        pickedLocation.lat,
                        pickedLocation.lng,
                      )}
                    </p>
                    <p className="text-caption text-on-surface/60">
                      {locationSourceLabel}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="-mr-2 -mt-1 shrink-0"
                  onClick={() => {
                    setPickedLocation(null);
                    clearError("location");
                  }}
                >
                  <X aria-hidden strokeWidth={1.5} className="size-4" />
                  Bỏ chọn
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 rounded-card border border-dashed border-outline/45 bg-surface px-4 py-4">
              <MapPin
                aria-hidden
                strokeWidth={1.5}
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              <div className="space-y-0.5">
                <p className="text-label font-medium text-on-surface">
                  Chưa chọn vị trí trên bản đồ
                </p>
                <p className="text-caption leading-5 text-on-surface/60">
                  Vị trí trên bản đồ là bắt buộc để đơn vị chức năng kiểm tra
                  hiện trường.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Button
              id="open-map-button"
              type="button"
              variant="secondary"
              fullWidth
              aria-invalid={Boolean(errors.location) || undefined}
              aria-describedby={
                errors.location ? "infrastructure-location-error" : undefined
              }
              onClick={() => openMap(false)}
            >
              <MapIcon aria-hidden strokeWidth={1.5} className="size-4" />
              {pickedLocation ? "Chọn lại trên bản đồ" : "Chọn trên bản đồ"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              fullWidth
              onClick={() => openMap(true)}
            >
              <LocateFixed aria-hidden strokeWidth={1.5} className="size-4" />
              Dùng vị trí hiện tại
            </Button>
          </div>

          {errors.location && (
            <p
              id="infrastructure-location-error"
              role="alert"
              className="text-caption font-medium text-error"
            >
              {errors.location}
            </p>
          )}

          <Field
            id="infrastructure-address"
            label="Địa chỉ chi tiết"
            required
            error={errors.address}
            hint={ADDRESS_HINT}
          >
            <TextInput
              id="infrastructure-address"
              value={form.address}
              onChange={(event) => {
                update("address", event.target.value);
                clearError("address");
              }}
              invalid={Boolean(errors.address)}
              aria-describedby={fieldDescribedBy("infrastructure-address", {
                hint: ADDRESS_HINT,
                error: errors.address,
              })}
              placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
            />
          </Field>
        </Section>

        <Section
          index={4}
          title="Nội dung phản ánh"
          description="Mô tả càng cụ thể càng giúp đơn vị chức năng xử lý nhanh."
        >
          <TextareaField
            id="infrastructure-description"
            label="Mô tả chi tiết"
            required
            error={errors.description}
            hint="Cho biết hư hỏng hoặc sự cố, thời điểm phát hiện, ảnh hưởng đến người dân và nguy cơ mất an toàn (nếu có)."
            placeholder="Ví dụ: Khoảng 7 giờ sáng ngày 5/11, tôi thấy nắp hố ga tại góc giao lộ bị bung khỏi khung, tạo hố sâu giữa làn xe máy. Khu vực này đông người qua lại vào giờ cao điểm nên rất nguy hiểm..."
            value={form.description}
            onChange={(event) => {
              update("description", event.target.value);
              clearError("description");
            }}
            rows={7}
            maxLength={2000}
          />
          <p className="-mt-2 text-right text-caption tabular-nums text-on-surface/55">
            {form.description.length}/2000
          </p>
        </Section>

        <Section
          index={5}
          title="Bằng chứng"
          description={`Không bắt buộc. Đính kèm tối đa ${evidenceOptions.maxImages} ảnh; bạn có thể xem trước, thay thế hoặc xóa từng ảnh.`}
        >
          <ImageUploader
            value={evidence}
            onChange={setEvidence}
            maxImages={evidenceOptions.maxImages}
            maxSizeMb={evidenceOptions.maxSizeMb}
            acceptedTypes={evidenceOptions.acceptedTypes}
          />
        </Section>

        <Section index={6} title="Xác nhận">
          <CheckboxField
            id="confirmation"
            boxed
            checked={form.confirmed}
            onChange={(event) => {
              update("confirmed", event.target.checked);
              clearError("confirmed");
            }}
            label="Tôi xác nhận thông tin đã cung cấp là chính xác theo hiểu biết của tôi và chịu trách nhiệm về nội dung báo cáo."
            error={errors.confirmed}
          />
        </Section>

        <div className="sticky bottom-0 z-10 -mx-5 border-t border-outline/20 bg-surface/95 px-5 py-3 backdrop-blur">
          <Button type="submit" size="lg" fullWidth>
            Gửi báo cáo
          </Button>
        </div>
      </form>

      <LocationPickerDialog
        open={mapOpen}
        onClose={closeMap}
        onConfirm={handleLocationConfirm}
        initialLocation={pickedLocation}
        autoLocate={autoLocate}
      />
    </main>
  );
}
