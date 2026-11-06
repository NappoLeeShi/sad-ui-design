import { FilePlus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IndividualReportForm } from "@/components/reports/IndividualReportForm";
import { buttonClasses } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import reportOptionsJson from "@/data/mock/report_options.json";
import { getReporterSnapshot } from "@/lib/mock/mockAuthService";
import {
  getReportCategory,
  REPORT_CATEGORIES,
  REPORT_CATEGORY_META,
} from "@/lib/report-catalog";
import type { ReportOptions } from "@/lib/types/report";

const reportOptions = reportOptionsJson as ReportOptions;

// The form shell is category-specific from the first pixel; render it fully
// rather than streaming an empty App Shell.
export const instant = false;

export function generateStaticParams() {
  return REPORT_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/reports/[category]/new">): Promise<Metadata> {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  return {
    title: categoryKey
      ? `Tạo ${REPORT_CATEGORY_META[categoryKey].shortLabel.toLowerCase()}`
      : "Không tìm thấy",
  };
}

export default async function NewReportPage({
  params,
}: PageProps<"/reports/[category]/new">) {
  const { category } = await params;
  const categoryKey = getReportCategory(category);

  if (!categoryKey) notFound();

  const meta = REPORT_CATEGORY_META[categoryKey];

  if (categoryKey === "individual") {
    return (
      <>
        <PageHeader title={meta.label} backHref={meta.basePath} />
        <IndividualReportForm
          reporter={getReporterSnapshot()}
          options={reportOptions.individual}
          evidenceOptions={reportOptions.evidence}
          historyHref={meta.historyPath}
        />
      </>
    );
  }

  return (
    <>
      <PageHeader title={meta.shortLabel} backHref={meta.basePath} />

      <main className="flex-1 px-5 py-6">
        <EmptyState
          icon={FilePlus}
          title="Biểu mẫu đang được hoàn thiện"
          description={`Biểu mẫu ${meta.label.toLowerCase()} sẽ được bổ sung ở bước tiếp theo của bản mẫu.`}
          action={
            <Link
              href={meta.basePath}
              className={buttonClasses({ variant: "secondary" })}
            >
              Quay lại
            </Link>
          }
        />
      </main>
    </>
  );
}
