"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { CheckboxField } from "@/components/ui/CheckboxField";
import {
  fieldDescribedBy,
  Field,
} from "@/components/ui/Field";
import { ImageUploader } from "@/components/ui/ImageUploader";
import { Notice } from "@/components/ui/Notice";
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
  ReportSubjectType,
  SelectOption,
} from "@/lib/types/report";

import { ReportSuccessState } from "./ReportSuccessState";

type FieldKey =
  | "organizationName"
  | "subjectType"
  | "behaviorType"
  | "behaviorOther"
  | "incidentDate"
  | "location"
  | "description"
  | "confirmed";

interface FormState {
  isOrganizationRep: boolean;
  organizationName: string;
  representativeRole: string;
  subjectType: ReportSubjectType | "";
  subjectName: string;
  subjectIdentifier: string;
  subjectDescription: string;
  subjectAddress: string;
  behaviorType: string;
  behaviorOther: string;
  incidentDate: string;
  incidentTime: string;
  timeUnknown: boolean;
  locationAddress: string;
  locationUnknown: boolean;
  description: string;
  confirmed: boolean;
}

const LOCATION_HINT =
  "Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố. Bản mô phỏng chưa hỗ trợ chọn trên bản đồ.";

const SUBJECT_IDENTIFIER_HINT =
  "Không bắt buộc. Chỉ nhập nếu bạn biết.";

const ORGANIZATION_IDENTIFIER_HINT =
  "Ví dụ: mã số thuế, số giấy phép kinh doanh.";

const INITIAL_FORM: FormState = {
  isOrganizationRep: false,
  organizationName: "",
  representativeRole: "",
  subjectType: "",
  subjectName: "",
  subjectIdentifier: "",
  subjectDescription: "",
  subjectAddress: "",
  behaviorType: "",
  behaviorOther: "",
  incidentDate: "",
  incidentTime: "",
  timeUnknown: false,
  locationAddress: "",
  locationUnknown: false,
  description: "",
  confirmed: false,
};

export interface IndividualReportFormProps {
  reporter: ReportReporter;
  options: ReportOptions["individual"];
  evidenceOptions: ReportOptions["evidence"];
  historyHref: string;
}

function behaviorTitle(
  behaviorType: string,
  behaviorOther: string,
  options: SelectOption[],
): string {
  if (behaviorType === "other") {
    return behaviorOther.trim() || "Hành vi khác";
  }

  return (
    options.find((option) => option.value === behaviorType)?.label ??
    "Báo cáo cá nhân, tổ chức"
  );
}

export function IndividualReportForm({
  reporter,
  options,
  evidenceOptions,
  historyHref,
}: IndividualReportFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [evidence, setEvidence] = useState<ReportEvidence[]>([]);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [result, setResult] = useState<CreateReportResult | null>(null);

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
      "organizationName",
      "subjectType",
      "behaviorType",
      "behaviorOther",
      "incidentDate",
      "location",
      "description",
      "confirmed",
    ];
    const first = order.find((key) => nextErrors[key]);
    if (!first) return;

    const target =
      first === "subjectType"
        ? document.querySelector<HTMLElement>('input[name="subjectType"]')
        : document.getElementById(
            {
              organizationName: "organization-name",
              behaviorType: "behavior-type",
              behaviorOther: "behavior-other",
              incidentDate: "incident-date",
              location: "location-address",
              description: "report-description",
              confirmed: "confirmation",
            }[first],
          );

    target?.focus();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Partial<Record<FieldKey, string>> = {};

    if (form.isOrganizationRep && !form.organizationName.trim()) {
      nextErrors.organizationName = "Vui lòng nhập tên tổ chức.";
    }

    if (!form.subjectType) {
      nextErrors.subjectType = "Vui lòng chọn loại đối tượng bị báo cáo.";
    }

    if (!form.behaviorType) {
      nextErrors.behaviorType = "Vui lòng chọn hành vi hoặc sự việc cần báo cáo.";
    }

    if (form.behaviorType === "other" && !form.behaviorOther.trim()) {
      nextErrors.behaviorOther = "Vui lòng mô tả ngắn gọn hành vi cần báo cáo.";
    }

    if (!form.timeUnknown && !form.incidentDate) {
      nextErrors.incidentDate =
        "Vui lòng chọn ngày xảy ra hoặc đánh dấu “Không rõ thời gian”.";
    }

    if (!form.locationUnknown && !form.locationAddress.trim()) {
      nextErrors.location =
        "Vui lòng nhập địa điểm hoặc đánh dấu “Không rõ địa điểm”.";
    }

    if (!form.description.trim()) {
      nextErrors.description = "Vui lòng mô tả nội dung vụ việc.";
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

    const subjectType = form.subjectType as ReportSubjectType;
    const timePart = form.incidentTime || "00:00";
    const occurredAt =
      form.timeUnknown || !form.incidentDate
        ? undefined
        : new Date(
            `${form.incidentDate}T${
              timePart.length === 5 ? `${timePart}:00` : timePart
            }+07:00`,
          ).toISOString();

    const created = createReport({
      category: "individual",
      title: behaviorTitle(form.behaviorType, form.behaviorOther, options.behaviors),
      description: form.description.trim(),
      location: form.locationUnknown
        ? { address: "", unknown: true }
        : { address: form.locationAddress.trim(), source: "manual" },
      evidence,
      details: {
        organizationName: form.isOrganizationRep
          ? form.organizationName.trim()
          : undefined,
        representativeRole: form.isOrganizationRep
          ? form.representativeRole.trim() || undefined
          : undefined,
        subjectType,
        subjectName:
          subjectType !== "unknown"
            ? form.subjectName.trim() || undefined
            : undefined,
        subjectIdentifier:
          subjectType !== "unknown"
            ? form.subjectIdentifier.trim() || undefined
            : undefined,
        subjectAddress:
          subjectType === "organization"
            ? form.subjectAddress.trim() || undefined
            : undefined,
        subjectDescription:
          subjectType === "individual"
            ? form.subjectDescription.trim() || undefined
            : undefined,
        behaviorType: form.behaviorType,
        behaviorOther:
          form.behaviorType === "other"
            ? form.behaviorOther.trim()
            : undefined,
        occurredAt,
        timeUnknown: form.timeUnknown,
        locationUnknown: form.locationUnknown,
      },
    });

    setErrors({});
    setResult(created);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setEvidence([]);
    setErrors({});
    setResult(null);
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

  return (
    <main className="flex-1 px-5 pt-5">
      <p className="mb-5 text-caption leading-5 text-on-surface/60">
        Các trường có dấu{" "}
        <span aria-hidden className="font-semibold text-primary">
          *
        </span>{" "}
        là bắt buộc. Thông tin chưa biết có thể bỏ trống hoặc chọn “Không rõ”.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        <Section
          index={1}
          title="Thông tin người báo cáo"
          description="Thông tin được lấy từ tài khoản định danh và không thể chỉnh sửa."
        >
          <ReadOnlyAccountCard reporter={reporter} />

          <CheckboxField
            id="is-organization-rep"
            boxed
            checked={form.isOrganizationRep}
            onChange={(event) => {
              update("isOrganizationRep", event.target.checked);
              clearError("organizationName");
            }}
            label="Tôi là người đại diện cho tổ chức"
            description="Chọn mục này nếu bạn gửi báo cáo thay mặt cho một tổ chức."
          />

          {form.isOrganizationRep && (
            <div className="space-y-4 rounded-card border border-outline/25 bg-surface-variant/40 p-3.5">
              <Field
                id="organization-name"
                label="Tên tổ chức"
                required
                error={errors.organizationName}
              >
                <TextInput
                  id="organization-name"
                  value={form.organizationName}
                  onChange={(event) => {
                    update("organizationName", event.target.value);
                    clearError("organizationName");
                  }}
                  invalid={Boolean(errors.organizationName)}
                  aria-describedby={fieldDescribedBy("organization-name", {
                    error: errors.organizationName,
                  })}
                  placeholder="Nhập tên tổ chức"
                  autoComplete="organization"
                />
              </Field>

              <Field
                id="representative-role"
                label="Vai trò/chức vụ của người đại diện"
                optional
              >
                <TextInput
                  id="representative-role"
                  value={form.representativeRole}
                  onChange={(event) =>
                    update("representativeRole", event.target.value)
                  }
                  placeholder="Ví dụ: Giám đốc, Trưởng phòng"
                  autoComplete="organization-title"
                />
              </Field>
            </div>
          )}
        </Section>

        <Section
          index={2}
          title="Thông tin đối tượng bị báo cáo"
          description="Chọn loại đối tượng để biểu mẫu hiển thị đúng thông tin cần nhập."
        >
          <RadioCardGroup
            name="subjectType"
            legend="Loại đối tượng bị báo cáo"
            required
            options={options.subjectTypes}
            value={form.subjectType}
            onChange={(value) => {
              update("subjectType", value as ReportSubjectType);
              clearError("subjectType");
            }}
            error={errors.subjectType}
          />

          {form.subjectType === "individual" && (
            <div className="space-y-4">
              <Field id="subject-name" label="Họ tên cá nhân" optional>
                <TextInput
                  id="subject-name"
                  value={form.subjectName}
                  onChange={(event) =>
                    update("subjectName", event.target.value)
                  }
                  placeholder="Nhập họ tên nếu biết"
                />
              </Field>

              <Field
                id="subject-identifier"
                label="Số định danh cá nhân"
                optional
                hint={SUBJECT_IDENTIFIER_HINT}
              >
                <TextInput
                  id="subject-identifier"
                  value={form.subjectIdentifier}
                  onChange={(event) =>
                    update("subjectIdentifier", event.target.value)
                  }
                  placeholder="Nhập số định danh nếu biết"
                  inputMode="numeric"
                  aria-describedby={fieldDescribedBy("subject-identifier", {
                    hint: SUBJECT_IDENTIFIER_HINT,
                  })}
                />
              </Field>

              <TextareaField
                id="subject-description"
                label="Thông tin nhận dạng khác"
                optional
                placeholder="Đặc điểm nhận dạng, trang phục, phương tiện hoặc thông tin khác giúp xác định đối tượng."
                value={form.subjectDescription}
                onChange={(event) =>
                  update("subjectDescription", event.target.value)
                }
                rows={3}
                className="min-h-24"
              />
            </div>
          )}

          {form.subjectType === "organization" && (
            <div className="space-y-4">
              <Field id="subject-name" label="Tên tổ chức" optional>
                <TextInput
                  id="subject-name"
                  value={form.subjectName}
                  onChange={(event) =>
                    update("subjectName", event.target.value)
                  }
                  placeholder="Nhập tên tổ chức nếu biết"
                  autoComplete="organization"
                />
              </Field>

              <Field id="subject-address" label="Địa chỉ tổ chức" optional>
                <TextInput
                  id="subject-address"
                  value={form.subjectAddress}
                  onChange={(event) =>
                    update("subjectAddress", event.target.value)
                  }
                  placeholder="Nhập địa chỉ nếu biết"
                />
              </Field>

              <Field
                id="subject-identifier"
                label="Mã số doanh nghiệp hoặc thông tin định danh khác"
                optional
                hint={ORGANIZATION_IDENTIFIER_HINT}
              >
                <TextInput
                  id="subject-identifier"
                  value={form.subjectIdentifier}
                  onChange={(event) =>
                    update("subjectIdentifier", event.target.value)
                  }
                  placeholder="Nhập thông tin định danh nếu biết"
                  aria-describedby={fieldDescribedBy("subject-identifier", {
                    hint: ORGANIZATION_IDENTIFIER_HINT,
                  })}
                />
              </Field>
            </div>
          )}

          {form.subjectType === "unknown" && (
            <Notice tone="info" title="Không cần biết tên đối tượng">
              Hãy mô tả dấu hiệu nhận biết, bối cảnh hoặc các chi tiết bạn quan
              sát được trong phần nội dung báo cáo.
            </Notice>
          )}
        </Section>

        <Section
          index={3}
          title="Thông tin vụ việc"
          description="Cho biết hành vi, thời điểm và nơi xảy ra. Bỏ qua nếu bạn chưa rõ."
        >
          <SelectField
            id="behavior-type"
            label="Hành vi cần báo cáo"
            required
            options={options.behaviors}
            placeholder="Chọn hành vi hoặc sự việc"
            value={form.behaviorType}
            onChange={(event) => {
              update("behaviorType", event.target.value);
              clearError("behaviorType");
              clearError("behaviorOther");
            }}
            error={errors.behaviorType}
          />

          {form.behaviorType === "other" && (
            <Field
              id="behavior-other"
              label="Hành vi khác"
              required
              error={errors.behaviorOther}
            >
              <TextInput
                id="behavior-other"
                value={form.behaviorOther}
                onChange={(event) => {
                  update("behaviorOther", event.target.value);
                  clearError("behaviorOther");
                }}
                invalid={Boolean(errors.behaviorOther)}
                aria-describedby={fieldDescribedBy("behavior-other", {
                  error: errors.behaviorOther,
                })}
                placeholder="Mô tả ngắn gọn hành vi cần báo cáo"
              />
            </Field>
          )}

          <CheckboxField
            id="time-unknown"
            checked={form.timeUnknown}
            onChange={(event) => {
              update("timeUnknown", event.target.checked);
              clearError("incidentDate");
            }}
            label="Không rõ thời gian"
            description="Chọn mục này nếu bạn không nhớ chính xác ngày hoặc giờ xảy ra."
          />

          <div className="grid grid-cols-2 gap-3">
            <Field
              id="incident-date"
              label="Ngày xảy ra"
              required={!form.timeUnknown}
              error={errors.incidentDate}
            >
              <TextInput
                id="incident-date"
                type="date"
                value={form.incidentDate}
                onChange={(event) => {
                  update("incidentDate", event.target.value);
                  clearError("incidentDate");
                }}
                disabled={form.timeUnknown}
                invalid={Boolean(errors.incidentDate)}
                aria-describedby={fieldDescribedBy("incident-date", {
                  error: errors.incidentDate,
                })}
                className="px-2.5"
              />
            </Field>

            <Field id="incident-time" label="Giờ xảy ra" optional>
              <TextInput
                id="incident-time"
                type="time"
                value={form.incidentTime}
                onChange={(event) =>
                  update("incidentTime", event.target.value)
                }
                disabled={form.timeUnknown}
                className="px-2.5"
              />
            </Field>
          </div>

          <CheckboxField
            id="location-unknown"
            checked={form.locationUnknown}
            onChange={(event) => {
              update("locationUnknown", event.target.checked);
              clearError("location");
            }}
            label="Không rõ địa điểm"
            description="Chọn mục này nếu bạn không biết địa chỉ cụ thể."
          />

          <Field
            id="location-address"
            label="Địa chỉ chi tiết"
            required={!form.locationUnknown}
            error={errors.location}
            hint={LOCATION_HINT}
          >
            <TextInput
              id="location-address"
              value={form.locationAddress}
              onChange={(event) => {
                update("locationAddress", event.target.value);
                clearError("location");
              }}
              disabled={form.locationUnknown}
              invalid={Boolean(errors.location)}
              aria-describedby={fieldDescribedBy("location-address", {
                hint: LOCATION_HINT,
                error: errors.location,
              })}
              placeholder="Nhập địa chỉ cụ thể"
            />
          </Field>
        </Section>

        <Section
          index={4}
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

        <Section
          index={5}
          title="Nội dung báo cáo"
          description="Mô tả càng cụ thể càng giúp cơ quan chức năng xử lý nhanh."
        >
          <TextareaField
            id="report-description"
            label="Nội dung báo cáo"
            required
            error={errors.description}
            hint="Cho biết điều gì đã xảy ra, ai hoặc vật gì liên quan, bối cảnh và các chi tiết khác giúp làm rõ vụ việc."
            placeholder="Ví dụ: Vào khoảng 20 giờ ngày 27/10, tại sảnh chung cư..., một người đàn ông... đã có hành vi... Tôi và những người xung quanh đã chứng kiến..."
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
    </main>
  );
}
