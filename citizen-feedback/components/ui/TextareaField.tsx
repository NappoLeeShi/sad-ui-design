import type { ComponentProps } from "react";

import { cn } from "@/lib/utils/cn";

import { fieldDescribedBy, Field, type FieldProps } from "./Field";

export interface TextareaFieldProps
  extends Omit<ComponentProps<"textarea">, "id">,
    Pick<FieldProps, "id" | "label" | "required" | "optional" | "hint" | "error"> {
  containerClassName?: string;
}

export function TextareaField({
  id,
  label,
  required,
  optional,
  hint,
  error,
  containerClassName,
  className,
  ...props
}: TextareaFieldProps) {
  return (
    <Field
      id={id}
      label={label}
      required={required}
      optional={optional}
      hint={hint}
      error={error}
      className={containerClassName}
    >
      <textarea
        id={id}
        className={cn(
          "min-h-32 w-full resize-y rounded-control border bg-surface px-3.5 py-3 text-body text-on-surface transition-colors",
          "focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-surface-variant disabled:text-on-surface/45",
          error
            ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
            : "border-outline/40 hover:border-outline/60 focus:border-primary focus:ring-2 focus:ring-primary/15",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescribedBy(id, { hint, error })}
        {...props}
      />
    </Field>
  );
}
