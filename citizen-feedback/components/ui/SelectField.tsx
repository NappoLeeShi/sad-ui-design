import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

import type { SelectOption } from "@/lib/types/report";
import { cn } from "@/lib/utils/cn";

import { fieldDescribedBy, Field, type FieldProps } from "./Field";

export interface SelectFieldProps
  extends Omit<ComponentProps<"select">, "id" | "children">,
    Pick<FieldProps, "id" | "label" | "required" | "optional" | "hint" | "error"> {
  options: SelectOption[];
  placeholder?: string;
  containerClassName?: string;
}

export function SelectField({
  id,
  label,
  required,
  optional,
  hint,
  error,
  options,
  placeholder = "Chọn một mục",
  containerClassName,
  className,
  ...props
}: SelectFieldProps) {
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
      <div className="relative">
        <select
          id={id}
          className={cn(
            "h-12 w-full appearance-none rounded-control border bg-surface pl-3.5 pr-10 text-body text-on-surface transition-colors",
            "focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-surface-variant disabled:text-on-surface/45",
            error
              ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
              : "border-outline/40 hover:border-outline/60 focus:border-primary focus:ring-2 focus:ring-primary/15",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={fieldDescribedBy(id, { hint, error })}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          strokeWidth={1.5}
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-on-surface/50"
        />
      </div>
    </Field>
  );
}
