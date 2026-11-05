import { LoaderCircle } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

interface StyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary/90 active:bg-primary/80",
  secondary:
    "border border-outline/40 bg-surface text-primary hover:bg-primary/6 active:bg-primary/12",
  ghost: "text-primary hover:bg-primary/6 active:bg-primary/12",
  danger: "bg-error text-on-error hover:bg-error/90 active:bg-error/80",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-label",
  md: "h-11 px-4 text-body",
  lg: "h-12 px-5 text-body",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: StyleOptions = {}): string {
  return cn(
    "inline-flex select-none items-center justify-center gap-2 rounded-control font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-surface-variant disabled:text-on-surface/38",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className,
  );
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyleOptions {
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, fullWidth, className })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && (
        <LoaderCircle
          className="size-4 animate-spin motion-reduce:animate-none"
          strokeWidth={1.5}
          aria-hidden
        />
      )}
      {children}
    </button>
  );
}
