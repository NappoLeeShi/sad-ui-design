import { FilePlus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ReportHistoryList } from "@/components/reports/ReportHistoryList";
import { buttonClasses } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  getReportCategory,
  REPORT_CATEGORIES,
  REPORT_CATEGORY_META,
} from "@/lib/report-catalog";

// History content depends on the category param, so the route renders fully
// instead of streaming a URL-independent shell.
export const instant = false;

export function generateStaticParams() {
  return REPORT_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/reports/[category]/history">): Promise<Metadata> {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  return {
    title: categoryKey
      ? `Lịch sử ${REPORT_CATEGORY_META[categoryKey].shortLabel.toLowerCase()}`
      : "Không tìm thấy",
  };
}

export default async function ReportHistoryPage({
  params,
}: PageProps<"/reports/[category]/history">) {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  if (!categoryKey) notFound();

  const meta = REPORT_CATEGORY_META[categoryKey];

  return (
    <>
      <PageHeader title="Lịch sử yêu cầu" backHref={meta.basePath} />

      <main className="flex-1 px-5 py-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-section font-semibold text-on-surface">
              {meta.label}
            </h2>
            <p className="mt-1 text-label leading-5 text-on-surface/60">
              Theo dõi các báo cáo đã gửi và trạng thái xử lý.
            </p>
          </div>
          <Link
            href={meta.newPath}
            className={buttonClasses({ size: "sm", className: "shrink-0" })}
          >
            <FilePlus aria-hidden strokeWidth={1.5} className="size-4" />
            Tạo mới
          </Link>
        </div>

        <ReportHistoryList category={categoryKey} newHref={meta.newPath} />
      </main>
    </>
  );
}
