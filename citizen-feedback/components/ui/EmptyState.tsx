import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center px-2 py-10 text-center",
        className,
      )}
    >
      <span className="grid size-14 place-items-center rounded-full bg-primary-container text-primary">
        <Icon aria-hidden strokeWidth={1.5} className="size-6" />
      </span>
      <h2 className="mt-4 text-section font-semibold text-on-surface">
        {title}
      </h2>
      <p className="mt-1.5 max-w-[32ch] text-body text-on-surface/65">
        {description}
      </p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
