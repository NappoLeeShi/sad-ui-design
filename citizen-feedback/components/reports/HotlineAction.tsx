"use client";

import { ChevronDown, Phone } from "lucide-react";
import { useId, useState } from "react";

import { Notice } from "@/components/ui/Notice";
import { cn } from "@/lib/utils/cn";

export interface HotlineActionProps {
  className?: string;
}

/**
 * Mock-only hotline entry point. It never dials a number: clicking it only
 * reveals an explanatory notice so the prototype can demonstrate the action
 * without inventing a real government hotline.
 */
export function HotlineAction({ className }: HotlineActionProps) {
  const [open, setOpen] = useState(false);
  const noticeId = useId();

  return (
    <div className={cn("space-y-2", className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={noticeId}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center gap-3 rounded-card border border-outline/25 bg-surface px-4 py-3.5 text-left transition-colors hover:border-primary/40 hover:bg-primary/3 focus-visible:outline-primary"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-container text-primary">
          <Phone aria-hidden strokeWidth={1.5} className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-body font-medium text-on-surface">
            Đường dây nóng
          </span>
          <span className="mt-0.5 block text-caption leading-5 text-on-surface/55">
            Số liên hệ chưa được xác thực trong bản mô phỏng này.
          </span>
        </span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.5}
          className={cn(
            "size-4 shrink-0 text-on-surface/45 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div id={noticeId}>
          <Notice tone="info">
            Đường dây nóng chưa được kết nối trong bản mô phỏng. Vui lòng gửi
            báo cáo trực tiếp trong ứng dụng để được ghi nhận.
          </Notice>
        </div>
      )}
    </div>
  );
}
