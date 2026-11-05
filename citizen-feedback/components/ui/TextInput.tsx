import type { ComponentProps } from "react";

import { cn } from "@/lib/utils/cn";

export interface TextInputProps extends ComponentProps<"input"> {
  invalid?: boolean;
}

export function TextInput({
  className,
  invalid = false,
  type = "text",
  ...props
}: TextInputProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-control border bg-surface px-3.5 text-body text-on-surface transition-colors",
        "focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-surface-variant disabled:text-on-surface/45",
        invalid
          ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
          : "border-outline/40 hover:border-outline/60 focus:border-primary focus:ring-2 focus:ring-primary/15",
        className,
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}
