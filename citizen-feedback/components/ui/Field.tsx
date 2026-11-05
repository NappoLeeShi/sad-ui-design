import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function fieldDescribedBy(
  id: string,
  { hint, error }: { hint?: string; error?: string },
): string | undefined {
  const ids = [
    hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ].filter(Boolean);

  return ids.length > 0 ? ids.join(" ") : undefined;
}

export function Field({
  id,
  label,
  required = false,
  optional = false,
  hint,
  error,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="text-label font-medium text-on-surface"
        >
          {label}
          {required && (
            <>
              <span aria-hidden className="ml-0.5 text-primary">
                *
              </span>
              <span className="sr-only"> (bắt buộc)</span>
            </>
          )}
        </label>
        {optional && !required && (
          <span className="shrink-0 text-caption text-on-surface/55">
            Không bắt buộc
          </span>
        )}
      </div>

      {children}

      {hint && (
        <p id={`${id}-hint`} className="text-caption text-on-surface/60">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-caption font-medium text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}
