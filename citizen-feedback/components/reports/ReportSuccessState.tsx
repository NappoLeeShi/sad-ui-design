"use client";

import { CircleCheck, FilePlus, History } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button, buttonClasses } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Notice";
import type { CreateReportResult } from "@/lib/types/report";
import { formatDateTime } from "@/lib/utils/format";

export interface ReportSuccessStateProps {
  result: CreateReportResult;
  historyHref: string;
  onReset: () => void;
}

export function ReportSuccessState({
  result,
  historyHref,
  onReset,
}: ReportSuccessStateProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    headingRef.current?.focus();
  }, []);

  return (
    <main className="flex-1 px-5 py-8">
      <div className="flex flex-col items-center text-center">
        <span className="grid size-16 place-items-center rounded-full bg-primary-container text-primary">
          <CircleCheck aria-hidden strokeWidth={1.5} className="size-8" />
        </span>
        <h2
          ref={headingRef}
          tabIndex={-1}
          className="mt-5 text-title font-semibold text-on-surface focus:outline-none"
        >
          Đã gửi báo cáo
        </h2>
        <p className="mt-2 max-w-[19rem] text-body leading-6 text-on-surface/65">
          Báo cáo của bạn đã được ghi nhận. Bạn có thể theo dõi trạng thái xử lý
          trong mục lịch sử.
        </p>
      </div>

      <dl className="mt-6 space-y-2.5 rounded-card border border-outline/25 bg-surface-variant/50 px-4 py-3.5">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-label text-on-surface/60">Mã báo cáo</dt>
          <dd className="text-body font-semibold tabular-nums text-on-surface">
            {result.record.code}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-label text-on-surface/60">Thời gian gửi</dt>
          <dd className="text-body text-on-surface">
            {formatDateTime(result.record.submittedAt)}
          </dd>
        </div>
      </dl>

      {!result.persisted && (
        <Notice tone="warning" className="mt-4" title="Chưa lưu được trên thiết bị">
          Trình duyệt không cho phép lưu dữ liệu, nên báo cáo có thể không xuất
          hiện trong lịch sử sau khi tải lại trang.
        </Notice>
      )}

      <div className="mt-6 space-y-2.5">
        <Link
          href={historyHref}
          className={buttonClasses({ size: "lg", fullWidth: true })}
        >
          <History aria-hidden strokeWidth={1.5} className="size-5" />
          Xem lịch sử báo cáo
        </Link>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          fullWidth
          onClick={onReset}
        >
          <FilePlus aria-hidden strokeWidth={1.5} className="size-5" />
          Gửi báo cáo khác
        </Button>
      </div>
    </main>
  );
}
