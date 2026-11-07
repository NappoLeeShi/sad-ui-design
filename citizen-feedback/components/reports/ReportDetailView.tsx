"use client";

import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { buttonClasses } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";
import { ReadOnlyAccountCard } from "@/components/ui/ReadOnlyAccountCard";
import { Section } from "@/components/ui/Section";
import { StatusBadge } from "@/components/ui/StatusBadge";
import reportOptionsJson from "@/data/mock/report_options.json";
import { useMockReports } from "@/lib/mock/useMockReports";
import { REPORT_CATEGORY_META } from "@/lib/report-catalog";
import { REPORT_STATUS_META } from "@/lib/report-status";
import type {
  IndividualReportDetails,
  InfrastructureReportDetails,
  ReportCategory,
  ReportOptions,
  ReportRecord,
  ReportStatusEvent,
  SelectOption,
} from "@/lib/types/report";
import { cn } from "@/lib/utils/cn";
import { formatCoordinates, formatDateTime } from "@/lib/utils/format";

const reportOptions = reportOptionsJson as ReportOptions;

function optionLabel(
  options: SelectOption[],
  value?: string,
): string | undefined {
  if (!value) return undefined;

  return options.find((option) => option.value === value)?.label ?? value;
}

function DetailRow({ label, value }: { label: string; value?: ReactNode }) {
  if (value === undefined || value === null || value === "") return null;

  return (
    <div className="grid grid-cols-[8.5rem_1fr] gap-3 text-body">
      <dt className="text-label leading-6 text-on-surface/60">{label}</dt>
      <dd className="min-w-0 break-words font-medium leading-6 text-on-surface">
        {value}
      </dd>
    </div>
  );
}

function DetailList({ children }: { children: ReactNode }) {
  return (
    <dl className="space-y-2.5 rounded-card border border-outline/25 bg-surface-variant/40 px-4 py-3.5">
      {children}
    </dl>
  );
}

function IndividualDetailsSection({
  details,
}: {
  details: IndividualReportDetails;
}) {
  const options = reportOptions.individual;
  const subjectType = optionLabel(options.subjectTypes, details.subjectType);
  const behavior =
    details.behaviorType === "other" && details.behaviorOther
      ? details.behaviorOther
      : optionLabel(options.behaviors, details.behaviorType);
  const occurredAt = details.timeUnknown
    ? "Không xác định"
    : details.occurredAt
      ? formatDateTime(details.occurredAt)
      : undefined;

  return (
    <Section title="Thông tin đối tượng">
      <DetailList>
        <DetailRow label="Đối tượng" value={subjectType} />
        <DetailRow label="Tên tổ chức" value={details.organizationName} />
        <DetailRow label="Vai trò" value={details.representativeRole} />
        <DetailRow label="Họ tên" value={details.subjectName} />
        <DetailRow label="Mã định danh" value={details.subjectIdentifier} />
        <DetailRow label="Địa chỉ" value={details.subjectAddress} />
        <DetailRow label="Mô tả" value={details.subjectDescription} />
        <DetailRow label="Hành vi" value={behavior} />
        <DetailRow label="Thời gian xảy ra" value={occurredAt} />
      </DetailList>
    </Section>
  );
}

function InfrastructureDetailsSection({
  details,
}: {
  details: InfrastructureReportDetails;
}) {
  const options = reportOptions.infrastructure;
  const infrastructureType =
    details.infrastructureType === "other" && details.infrastructureTypeOther
      ? details.infrastructureTypeOther
      : optionLabel(options.types, details.infrastructureType);
  const issueType =
    details.issueType === "other" && details.issueTypeOther
      ? details.issueTypeOther
      : optionLabel(options.issues, details.issueType);

  return (
    <Section title="Thông tin hạ tầng">
      <DetailList>
        <DetailRow label="Loại hạ tầng" value={infrastructureType} />
        <DetailRow label="Sự cố" value={issueType} />
        <DetailRow
          label="Mức độ ảnh hưởng"
          value={optionLabel(options.severities, details.severity)}
        />
        <DetailRow label="Tóm tắt" value={details.summary} />
      </DetailList>
    </Section>
  );
}

function LocationSection({ report }: { report: ReportRecord }) {
  const location = report.location;
  const locationUnknown =
    (report.category === "individual" && report.details.locationUnknown) ||
    Boolean(location?.unknown);
  const lat = location?.lat;
  const lng = location?.lng;
  const hasCoordinates = lat !== undefined && lng !== undefined;

  if (!locationUnknown && !location?.address && !hasCoordinates) return null;

  return (
    <Section title="Vị trí phản ánh">
      <DetailList>
        {locationUnknown ? (
          <DetailRow label="Vị trí" value="Không xác định" />
        ) : (
          <>
            <DetailRow label="Địa chỉ" value={location?.address} />
            {hasCoordinates && (
              <DetailRow
                label="Tọa độ"
                value={formatCoordinates(lat, lng)}
              />
            )}
          </>
        )}
      </DetailList>
    </Section>
  );
}

function EvidenceSection({ report }: { report: ReportRecord }) {
  if (report.evidence.length === 0) return null;

  return (
    <Section title="Hình ảnh đính kèm">
      <ul className="grid grid-cols-3 gap-2">
        {report.evidence.map((image, index) => (
          <li
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-control border border-outline/25 bg-surface-variant"
          >
            <Image
              src={image.dataUrl}
              alt={`Ảnh đính kèm ${index + 1}: ${image.name}`}
              fill
              unoptimized
              sizes="(max-width: 430px) 30vw, 128px"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
      <p className="text-caption text-on-surface/55">
        {report.evidence.length} ảnh đính kèm
      </p>
    </Section>
  );
}

function TimelineSection({ timeline }: { timeline: ReportStatusEvent[] }) {
  if (timeline.length === 0) return null;

  const events = [...timeline].sort(
    (a, b) => new Date(a.at).getTime() - new Date(b.at).getTime(),
  );

  return (
    <Section title="Quá trình xử lý">
      <ol>
        {events.map((event, index) => {
          const current = index === events.length - 1;

          return (
            <li
              key={`${event.status}-${event.at}-${index}`}
              className="relative flex gap-3 pb-4 last:pb-0"
            >
              <span
                aria-hidden
                className="relative flex w-2.5 shrink-0 justify-center"
              >
                <span
                  className={cn(
                    "mt-1.5 size-2.5 rounded-full",
                    current
                      ? "bg-primary"
                      : "border border-outline/60 bg-surface",
                  )}
                />
                {!current && (
                  <span className="absolute bottom-[-1rem] top-5 w-px bg-outline/30" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="text-body font-medium text-on-surface">
                    {REPORT_STATUS_META[event.status].label}
                  </p>
                  <p className="text-caption tabular-nums text-on-surface/55">
                    {formatDateTime(event.at)}
                  </p>
                </div>
                {event.note && (
                  <p className="mt-1 text-label leading-5 text-on-surface/60">
                    {event.note}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export interface ReportDetailViewProps {
  category: ReportCategory;
  reportId: string;
}

export function ReportDetailView({
  category,
  reportId,
}: ReportDetailViewProps) {
  const { reports, loading } = useMockReports(category);
  const meta = REPORT_CATEGORY_META[category];

  if (loading) {
    return <LoadingState label="Đang mở báo cáo" />;
  }

  const needle = reportId.toLowerCase();
  const report = reports?.find(
    (item) =>
      item.id.toLowerCase() === needle || item.code.toLowerCase() === needle,
  );

  if (!report) {
    return (
      <EmptyState
        icon={FileText}
        title="Không tìm thấy báo cáo"
        description={`Báo cáo ${reportId} không tồn tại trong lịch sử ${meta.shortLabel.toLowerCase()}.`}
        action={
          <Link href={meta.historyPath} className={buttonClasses()}>
            Về lịch sử yêu cầu
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-7">
      <section>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-caption font-medium tabular-nums text-on-surface/55">
              {report.code}
            </p>
            <p className="mt-1 text-caption font-medium text-primary">
              {meta.label}
            </p>
          </div>
          <StatusBadge status={report.status} />
        </div>

        <h2 className="mt-3 text-title font-semibold leading-6 text-on-surface">
          {report.title}
        </h2>
        <p className="mt-2 whitespace-pre-line text-body leading-6 text-on-surface/70">
          {report.description}
        </p>

        <div className="mt-4 space-y-1 rounded-card border border-outline/25 bg-surface-variant/40 px-4 py-3">
          <p className="text-caption text-on-surface/55">
            Gửi lúc {formatDateTime(report.submittedAt)}
          </p>
          <p className="text-caption leading-5 text-on-surface/60">
            {REPORT_STATUS_META[report.status].description}
          </p>
        </div>
      </section>

      <Section title="Người gửi">
        <ReadOnlyAccountCard reporter={report.reporter} />
      </Section>

      {report.category === "individual" ? (
        <IndividualDetailsSection details={report.details} />
      ) : (
        <InfrastructureDetailsSection details={report.details} />
      )}

      <LocationSection report={report} />
      <EvidenceSection report={report} />
      <TimelineSection timeline={report.timeline} />
    </div>
  );
}
