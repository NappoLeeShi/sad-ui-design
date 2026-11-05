import { REPORT_STATUS_META, type StatusTone } from "@/lib/report-status";
import type { ReportStatus } from "@/lib/types/report";
import { cn } from "@/lib/utils/cn";

const TONE_CLASSES: Record<StatusTone, string> = {
  neutral: "border-outline/25 bg-surface-variant text-on-surface/70",
  accent:
    "border-secondary/20 bg-secondary-container text-on-secondary-container",
  attention:
    "border-primary/20 bg-primary-container text-on-primary-container",
  complete: "border-primary bg-primary text-on-primary",
};

export interface StatusBadgeProps {
  status: ReportStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const meta = REPORT_STATUS_META[status];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-caption font-medium",
        TONE_CLASSES[meta.tone],
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current opacity-70" />
      {meta.label}
    </span>
  );
}
