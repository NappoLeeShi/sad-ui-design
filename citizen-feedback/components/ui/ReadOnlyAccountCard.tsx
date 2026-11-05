import { ShieldCheck } from "lucide-react";

import type { ReportReporter } from "@/lib/types/report";

export interface ReadOnlyAccountCardProps {
  reporter: ReportReporter;
}

export function ReadOnlyAccountCard({ reporter }: ReadOnlyAccountCardProps) {
  const rows = [
    { label: "Họ tên", value: reporter.fullName },
    { label: "Số định danh", value: reporter.citizenId },
    { label: "Nơi thường trú", value: reporter.permanentAddress },
  ];

  return (
    <div className="overflow-hidden rounded-card border border-outline/25 bg-surface-variant/50">
      <div className="flex items-center gap-2 border-b border-outline/15 px-4 py-2.5 text-on-surface/60">
        <ShieldCheck aria-hidden strokeWidth={1.5} className="size-4" />
        <p className="text-caption">Thông tin từ tài khoản định danh</p>
      </div>
      <dl className="space-y-2.5 px-4 py-3.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[6.5rem_1fr] gap-3 text-body"
          >
            <dt className="text-label leading-6 text-on-surface/60">
              {row.label}
            </dt>
            <dd className="min-w-0 break-words font-medium text-on-surface">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
