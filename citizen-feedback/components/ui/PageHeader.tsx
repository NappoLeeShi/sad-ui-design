"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface PageHeaderProps {
  title: string;
  backHref?: string;
  backLabel?: string;
  /**
   * Entry screens such as Login have no in-app parent, so they render the
   * title without a back control.
   */
  showBack?: boolean;
  /**
   * Prefer browser history when there is one. Set to `false` when the parent
   * must stay stable even if the page was opened through a direct URL.
   */
  historyBack?: boolean;
  action?: ReactNode;
}

export function PageHeader({
  title,
  backHref = "/",
  backLabel = "Quay lại",
  showBack = true,
  historyBack = true,
  action,
}: PageHeaderProps) {
  const router = useRouter();

  function handleBack() {
    const historyIndex =
      (window.history.state as { idx?: number } | null)?.idx ?? 0;

    if (historyBack && historyIndex > 0) {
      router.back();
    } else {
      router.push(backHref);
    }
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-1 border-b border-outline/20 bg-surface px-2">
      {showBack && (
        <button
          type="button"
          onClick={handleBack}
          aria-label={backLabel}
          className="grid size-10 shrink-0 place-items-center rounded-full text-on-surface transition-colors hover:bg-on-surface/6 focus-visible:outline-primary"
        >
          <ArrowLeft aria-hidden strokeWidth={1.5} className="size-5" />
        </button>
      )}
      <h1
        className={cn(
          "min-w-0 flex-1 truncate text-section font-semibold text-on-surface",
          !showBack && "pl-3",
        )}
      >
        {title}
      </h1>
      {action}
    </header>
  );
}
