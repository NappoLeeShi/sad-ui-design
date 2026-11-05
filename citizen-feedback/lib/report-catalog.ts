import type { ReportCategory } from "@/lib/types/report";

export interface ReportCategoryMeta {
  label: string;
  shortLabel: string;
  description: string;
  basePath: string;
  newPath: string;
  historyPath: string;
  codePrefix: string;
}

export const REPORT_CATEGORIES: readonly ReportCategory[] = [
  "individual",
  "infrastructure",
];

export const REPORT_CATEGORY_META: Record<
  ReportCategory,
  ReportCategoryMeta
> = {
  individual: {
    label: "Báo cáo cá nhân, tổ chức",
    shortLabel: "Cá nhân, tổ chức",
    description:
      "Phản ánh hành vi của cá nhân hoặc tổ chức và theo dõi kết quả xử lý.",
    basePath: "/reports/individual",
    newPath: "/reports/individual/new",
    historyPath: "/reports/individual/history",
    codePrefix: "BC",
  },
  infrastructure: {
    label: "Phản ánh về cơ sở hạ tầng",
    shortLabel: "Cơ sở hạ tầng",
    description:
      "Phản ánh hư hỏng, sự cố hoặc vấn đề tại công trình hạ tầng công cộng.",
    basePath: "/reports/infrastructure",
    newPath: "/reports/infrastructure/new",
    historyPath: "/reports/infrastructure/history",
    codePrefix: "HT",
  },
};

export function isReportCategory(value: string): value is ReportCategory {
  return REPORT_CATEGORIES.includes(value as ReportCategory);
}

export function getReportCategory(value: string): ReportCategory | null {
  return isReportCategory(value) ? value : null;
}

export function reportHistoryDetailPath(
  category: ReportCategory,
  reportId: string,
): string {
  return `${REPORT_CATEGORY_META[category].historyPath}/${reportId}`;
}
