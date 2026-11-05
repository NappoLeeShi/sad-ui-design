import {
  CircleCheck,
  CircleExclamationPoint,
  Info,
  TriangleExclamationPoint,
} from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export type NoticeTone = "info" | "success" | "warning" | "error";

const TONE_CLASSES: Record<NoticeTone, string> = {
  info: "border-outline/25 bg-surface-variant/70",
  success: "border-primary/20 bg-primary-container/70",
  warning: "border-error/25 bg-error-container/60",
  error: "border-error/40 bg-error-container",
};

const TONE_ICON_CLASSES: Record<NoticeTone, string> = {
  info: "text-on-surface/60",
  success: "text-primary",
  warning: "text-error",
  error: "text-error",
};

const TONE_ICONS = {
  info: Info,
  success: CircleCheck,
  warning: TriangleExclamationPoint,
  error: CircleExclamationPoint,
} as const;

export interface NoticeProps {
  tone?: NoticeTone;
  title?: string;
  children?: ReactNode;
  className?: string;
}

export function Notice({
  tone = "info",
  title,
  children,
  className,
}: NoticeProps) {
  const Icon = TONE_ICONS[tone];

  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-3 rounded-card border p-3.5",
        TONE_CLASSES[tone],
        className,
      )}
    >
      <Icon
        aria-hidden
        strokeWidth={1.5}
        className={cn("mt-0.5 size-5 shrink-0", TONE_ICON_CLASSES[tone])}
      />
      <div className="min-w-0 space-y-1">
        {title && (
          <p className="text-body font-semibold leading-5 text-on-surface">
            {title}
          </p>
        )}
        {children && (
          <div className="text-label leading-5 text-on-surface/75">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
