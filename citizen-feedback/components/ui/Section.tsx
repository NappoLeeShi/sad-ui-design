import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface SectionProps {
  index?: number;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  index,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2.5">
          {index !== undefined && (
            <span
              aria-hidden
              className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-container text-caption font-semibold tabular-nums text-primary"
            >
              {index}
            </span>
          )}
          <h2 className="text-section font-semibold text-on-surface">
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-label leading-5 text-on-surface/60">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
