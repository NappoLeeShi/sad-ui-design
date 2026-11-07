"use client";

import { ChevronRight, ClipboardList } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { buttonClasses } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { useMockReports } from "@/lib/mock/useMockReports";
import { REPORT_CATEGORY_META } from "@/lib/report-catalog";
import type { ReportCategory } from "@/lib/types/report";
import { formatDateTime } from "@/lib/utils/format";

export interface ReportHistoryListProps {
  category: ReportCategory;
  newHref: string;
}

export function ReportHistoryList({
  category,
  newHref,
}: ReportHistoryListProps) {
  const { reports, loading } = useMockReports(category);
  const meta = REPORT_CATEGORY_META[category];
  const searchParams = useSearchParams();

  // Non-destructive developer preview: `?empty=1` shows this category's empty
  // state without touching seeds, stored reports, or the other category.
  const previewEmpty = searchParams.get("empty") === "1";

  if (loading) {
    return <LoadingState label="Đang tải lịch sử" />;
  }

  if (previewEmpty || !reports || reports.length === 0) {
    return (
      <EmptyState
        icon={ClipboardList}
        title="Chưa có báo cáo nào"
        description={`Các báo cáo ${meta.shortLabel.toLowerCase()} bạn gửi sẽ xuất hiện tại đây cùng trạng thái xử lý.`}
        action={
          <Link href={newHref} className={buttonClasses()}>
            Tạo yêu cầu mới
          </Link>
        }
      />
    );
  }

  return (
    <div className="space-y-3">
      {reports.map((report) => (
        <Link
          key={report.id}
          href={`/reports/${category}/history/${report.id}`}
          className="group block rounded-card border border-outline/25 bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-primary/3 focus-visible:outline-primary"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption font-medium tabular-nums text-on-surface/55">
              {report.code}
            </span>
            <StatusBadge status={report.status} />
          </div>

          <p className="mt-1.5 text-caption font-medium text-primary">
            {REPORT_CATEGORY_META[report.category].label}
          </p>
          <h3 className="mt-1 text-body font-semibold leading-5 text-on-surface">
            {report.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-label leading-5 text-on-surface/60">
            {report.description}
          </p>

          <div className="mt-2.5 flex items-center justify-between gap-3">
            <span className="text-caption text-on-surface/55">
              Gửi lúc {formatDateTime(report.submittedAt)}
            </span>
            <ChevronRight
              aria-hidden
              strokeWidth={1.5}
              className="size-4 shrink-0 text-on-surface/35 transition-colors group-hover:text-primary"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
