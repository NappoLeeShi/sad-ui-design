import { ClipboardList, FilePlus, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { buttonClasses } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  getReportCategory,
  REPORT_CATEGORIES,
  REPORT_CATEGORY_META,
} from "@/lib/report-catalog";

// Nearly the whole page is derived from `category`, so there is no meaningful
// URL-independent shell to stream. These demo routes render fully instead.
export const instant = false;

export function generateStaticParams() {
  return REPORT_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/reports/[category]">): Promise<Metadata> {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  return {
    title: categoryKey
      ? REPORT_CATEGORY_META[categoryKey].label
      : "Không tìm thấy",
  };
}

export default async function ReportLandingPage({
  params,
}: PageProps<"/reports/[category]">) {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  if (!categoryKey) notFound();

  const meta = REPORT_CATEGORY_META[categoryKey];

  return (
    <>
      <PageHeader title={meta.shortLabel} backHref="/feedback" />

      <main className="flex-1 px-5 py-6">
        <h2 className="text-display font-semibold text-on-surface">
          {meta.label}
        </h2>
        <p className="mt-2 text-body text-on-surface/65">{meta.description}</p>

        <div className="mt-6 space-y-2.5">
          <Link
            href={meta.newPath}
            className={buttonClasses({ size: "lg", fullWidth: true })}
          >
            <FilePlus aria-hidden strokeWidth={1.5} className="size-5" />
            Tạo yêu cầu mới
          </Link>
          <Link
            href={meta.historyPath}
            className={buttonClasses({
              variant: "secondary",
              size: "lg",
              fullWidth: true,
            })}
          >
            <ClipboardList aria-hidden strokeWidth={1.5} className="size-5" />
            Lịch sử yêu cầu
          </Link>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-card border border-outline/20 p-4">
          <Phone
            aria-hidden
            strokeWidth={1.5}
            className="mt-0.5 size-5 shrink-0 text-on-surface/50"
          />
          <div>
            <p className="text-body font-medium text-on-surface">
              Đường dây nóng hỗ trợ
            </p>
            <p className="mt-0.5 text-caption leading-5 text-on-surface/55">
              Số liên hệ chưa được xác thực trong bản mô phỏng này.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
