import { ClipboardList } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonClasses } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
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
        <EmptyState
          icon={ClipboardList}
          title="Danh sách đang được hoàn thiện"
          description={`Các báo cáo ${meta.shortLabel.toLowerCase()} đã gửi và trạng thái xử lý sẽ được hiển thị tại đây.`}
          action={
            <Link
              href={meta.newPath}
              className={buttonClasses({ variant: "secondary" })}
            >
              Tạo yêu cầu mới
            </Link>
          }
        />
      </main>
    </>
  );
}
