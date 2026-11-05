import type { ReportStatus } from "@/lib/types/report";

export type StatusTone = "neutral" | "accent" | "attention" | "complete";

export interface ReportStatusMeta {
  label: string;
  description: string;
  tone: StatusTone;
}

export const REPORT_STATUS_META: Record<ReportStatus, ReportStatusMeta> = {
  submitted: {
    label: "Đã gửi",
    description: "Báo cáo đã được gửi và đang chờ tiếp nhận.",
    tone: "neutral",
  },
  received: {
    label: "Đang tiếp nhận",
    description: "Báo cáo đã được ghi nhận để kiểm tra thông tin.",
    tone: "accent",
  },
  processing: {
    label: "Đang xử lý",
    description: "Báo cáo đang được đơn vị chức năng phối hợp xử lý.",
    tone: "attention",
  },
  completed: {
    label: "Đã hoàn thành",
    description: "Báo cáo đã có kết quả xử lý trong bản mô phỏng.",
    tone: "complete",
  },
};

export const REPORT_STATUS_ORDER: readonly ReportStatus[] = [
  "submitted",
  "received",
  "processing",
  "completed",
];
