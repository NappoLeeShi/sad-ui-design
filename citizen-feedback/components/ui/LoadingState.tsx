import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export interface LoadingStateProps {
  label?: string;
  className?: string;
}

export function LoadingState({
  label = "Đang tải",
  className,
}: LoadingStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-16 text-on-surface/60",
        className,
      )}
    >
      <LoaderCircle
        aria-hidden
        strokeWidth={1.5}
        className="size-6 animate-spin motion-reduce:animate-none"
      />
      <span className="text-label">{label}</span>
    </div>
  );
}
