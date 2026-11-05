import {
  Building,
  ClipboardCheck,
  Construction,
  Landmark,
  Lock,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/ui/PageHeader";
import { REPORT_CATEGORY_META } from "@/lib/report-catalog";

export const metadata: Metadata = {
  title: "Chọn nội dung phản ánh",
};

interface FeedbackEntry {
  label: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

const entries: FeedbackEntry[] = [
  {
    label: REPORT_CATEGORY_META.infrastructure.label,
    description: REPORT_CATEGORY_META.infrastructure.description,
    icon: Construction,
    href: REPORT_CATEGORY_META.infrastructure.basePath,
  },
  {
    label: REPORT_CATEGORY_META.individual.label,
    description: REPORT_CATEGORY_META.individual.description,
    icon: Building,
    href: REPORT_CATEGORY_META.individual.basePath,
  },
  {
    label: "Kiến nghị, phản ánh về kiểm tra, giám sát của Đảng",
    description:
      "Phản ánh hành vi vi phạm trong công tác kiểm tra, giám sát của Đảng.",
    icon: Landmark,
  },
  {
    label: "Phản ánh kiến nghị về dịch vụ công",
    description: "Phản ánh vướng mắc khi thực hiện thủ tục, dịch vụ công.",
    icon: ClipboardCheck,
  },
];

export default function FeedbackSelectionPage() {
  return (
    <>
      <PageHeader
        title="Góp ý, phản ánh"
        backHref="/home"
        historyBack={false}
      />

      <main className="flex-1 px-5 py-6">
        <h2 className="text-display font-semibold text-on-surface">
          Chọn nội dung cần phản ánh
        </h2>
        <p className="mt-2 text-body text-on-surface/65">
          Hai danh mục đầu tiên đang hoạt động trong bản mô phỏng.
        </p>

        <div className="mt-6 space-y-2.5">
          {entries.map((entry) => {
            const Icon = entry.icon;

            if (entry.href) {
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  className="flex items-start gap-3 rounded-card border border-outline/30 bg-surface p-4 transition-colors hover:border-primary/40 hover:bg-primary/4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-container text-primary">
                    <Icon aria-hidden strokeWidth={1.5} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-words text-body font-semibold text-on-surface">
                      {entry.label}
                    </span>
                    <span className="mt-0.5 block break-words text-label leading-5 text-on-surface/60">
                      {entry.description}
                    </span>
                  </span>
                </Link>
              );
            }

            return (
              <div
                key={entry.label}
                aria-disabled="true"
                className="flex items-start gap-3 rounded-card border border-outline/20 bg-surface-variant/40 p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-surface-variant text-on-surface/35">
                  <Icon aria-hidden strokeWidth={1.5} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block break-words text-body font-semibold text-on-surface/45">
                    {entry.label}
                  </span>
                  <span className="mt-0.5 block break-words text-label leading-5 text-on-surface/40">
                    {entry.description}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full border border-outline/25 px-2 py-0.5 text-caption text-on-surface/55">
                    <Lock aria-hidden strokeWidth={1.5} className="size-3" />
                    Chưa khả dụng
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
