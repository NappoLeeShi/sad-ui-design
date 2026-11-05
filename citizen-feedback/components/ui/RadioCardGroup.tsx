"use client";

import type { SelectOption } from "@/lib/types/report";
import { cn } from "@/lib/utils/cn";

export interface RadioCardGroupProps {
  name: string;
  legend: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  hint?: string;
  error?: string;
  columns?: 1 | 2 | 3;
  className?: string;
}

const COLUMN_CLASSES = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
} as const;

export function RadioCardGroup({
  name,
  legend,
  options,
  value,
  onChange,
  required = false,
  hint,
  error,
  columns = 1,
  className,
}: RadioCardGroupProps) {
  const hintId = hint ? `${name}-hint` : undefined;
  const errorId = error ? `${name}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ");

  return (
    <fieldset className={cn("space-y-2", className)}>
      <legend className="text-label font-medium text-on-surface">
        {legend}
        {required && (
          <>
            <span aria-hidden className="ml-0.5 text-primary">
              *
            </span>
            <span className="sr-only"> (bắt buộc)</span>
          </>
        )}
      </legend>

      <div className={cn("grid gap-2", COLUMN_CLASSES[columns])}>
        {options.map((option) => {
          const optionId = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={optionId}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-control border bg-surface p-3.5 transition-colors",
                "has-[:checked]:border-primary has-[:checked]:bg-primary/4",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary",
                error ? "border-error/60" : "border-outline/40 hover:border-outline/60",
              )}
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                aria-describedby={describedBy || undefined}
                className="peer sr-only"
              />
              <span
                aria-hidden
                className="mt-1 size-4 shrink-0 rounded-full border-2 border-outline/60 transition-colors peer-checked:border-[5px] peer-checked:border-primary"
              />
              <span className="min-w-0">
                <span className="block text-body font-medium leading-5 text-on-surface">
                  {option.label}
                </span>
                {option.description && (
                  <span className="mt-1 block text-caption text-on-surface/60">
                    {option.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </div>

      {hint && (
        <p id={hintId} className="text-caption text-on-surface/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-caption font-medium text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}
