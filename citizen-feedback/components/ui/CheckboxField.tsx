import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface CheckboxFieldProps
  extends Omit<ComponentProps<"input">, "type" | "id"> {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  error?: string;
  boxed?: boolean;
}

export function CheckboxField({
  id,
  label,
  description,
  error,
  boxed = false,
  className,
  ...props
}: CheckboxFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ");

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer items-start gap-3",
          boxed &&
            "rounded-control border border-outline/30 p-3.5 transition-colors has-[:checked]:border-primary/45 has-[:checked]:bg-primary/4",
          error && boxed && "border-error/60",
          className,
        )}
      >
        <input
          id={id}
          type="checkbox"
          className="mt-0.5 size-5 shrink-0 cursor-pointer accent-primary disabled:cursor-not-allowed"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
          {...props}
        />
        <span className="min-w-0">
          <span className="block text-body leading-5 text-on-surface">
            {label}
          </span>
          {description && (
            <span
              id={descriptionId}
              className="mt-1 block text-caption text-on-surface/60"
            >
              {description}
            </span>
          )}
        </span>
      </label>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="text-caption font-medium text-error"
        >
          {error}
        </p>
      )}
    </div>
  );
}
