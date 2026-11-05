import {
  Car,
  FileText,
  HeartHandshake,
  HeartPulse,
  IdCard,
  LayoutGrid,
  MessageSquareText,
  Pencil,
  QrCode,
  Search,
  Shield,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { getMockUser } from "@/lib/mock/mockAuthService";

export const metadata: Metadata = {
  title: "Trang chủ",
};

interface Utility {
  label: string;
  icon: LucideIcon;
}

/**
 * The reporting entry leads this row, as in the reference. The remaining
 * tiles are static because only reporting is implemented.
 */
const favouriteUtilities: Utility[] = [
  { label: "Thẻ căn cước, CCCD", icon: IdCard },
  { label: "Giấy phép lái xe", icon: Car },
  { label: "Thẻ BHYT", icon: HeartPulse },
  { label: "Thủ tục hành chính", icon: FileText },
];

const otherUtilities: Utility[] = [
  { label: "Thủ tục hành chính", icon: FileText },
  { label: "An sinh xã hội", icon: HeartHandshake },
  { label: "Hồ sơ sức khỏe", icon: Stethoscope },
  { label: "An ninh trật tự/dịch vụ công", icon: Shield },
  { label: "Dịch vụ khác", icon: LayoutGrid },
];

const qrShortcuts = [
  { label: "Thẻ CCCD" },
  { label: "Định danh điện tử" },
] as const;

export default function HomePage() {
  const user = getMockUser();

  return (
    <>
      <header className="relative min-h-[180px] shrink-0 bg-primary px-2.5 pb-2.5 pt-9 text-on-primary">
        <Search
          aria-hidden
          strokeWidth={1.5}
          className="absolute right-3 top-2 size-[30px] text-on-primary/80"
        />

        <div className="flex items-center gap-4 px-1.5">
          <span
            aria-hidden
            className="grid size-16 shrink-0 place-items-center rounded-full bg-on-primary/15 text-title font-semibold ring-1 ring-on-primary/25"
          >
            {user.initials}
          </span>

          <div className="min-w-0">
            <p className="text-display font-semibold uppercase break-words">
              {user.fullName}
            </p>
            <p className="mt-1.5 inline-flex h-7 items-center rounded-full bg-primary-container px-3 text-caption font-semibold text-primary">
              {user.accountLevel}
            </p>
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2.5">
          {qrShortcuts.map((shortcut) => (
            <div
              key={shortcut.label}
              className="flex min-h-14 items-center gap-2 rounded-control bg-surface p-1.5 text-on-surface"
            >
              <span
                aria-hidden
                className="grid size-11 shrink-0 place-items-center rounded-lg bg-primary-container text-primary"
              >
                <QrCode strokeWidth={1.5} className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-label font-semibold leading-4">
                  Mã QR
                </span>
                <span className="block text-label leading-4 text-on-surface/65">
                  {shortcut.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </header>

      <main className="flex-1 px-2.5 pb-10 pt-4">
        <h1 className="sr-only">Trang chủ</h1>

        <section aria-labelledby="favourite-utilities-heading">
          <div className="flex items-center justify-between gap-3">
            <h2
              id="favourite-utilities-heading"
              className="text-section font-semibold text-on-surface"
            >
              Tiện ích yêu thích
            </h2>

            <span className="flex items-center gap-1 text-label text-on-surface/55">
              Chỉnh sửa
              <Pencil aria-hidden strokeWidth={1.5} className="size-4" />
            </span>
          </div>

          <ul className="mt-2 grid grid-cols-5 items-start gap-x-1 gap-y-6">
            <li>
              <Link
                href="/feedback"
                className="group flex flex-col items-center gap-2 rounded-control py-1 text-center focus-visible:outline-primary"
              >
                <span className="grid size-14 place-items-center rounded-full bg-primary text-on-primary transition-colors group-hover:bg-primary/90 group-active:bg-primary/80">
                  <MessageSquareText
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-6"
                  />
                </span>
                <span className="text-caption font-semibold leading-4 text-primary">
                  Tiếp nhận góp ý, phản ánh &amp; vướng mắc
                </span>
              </Link>
            </li>

            {favouriteUtilities.map((utility) => {
              const Icon = utility.icon;

              return (
                <li
                  key={utility.label}
                  className="flex flex-col items-center gap-2 py-1 text-center"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-primary-container text-primary">
                    <Icon aria-hidden strokeWidth={1.5} className="size-6" />
                  </span>
                  <span className="text-caption leading-4 text-on-surface/65">
                    {utility.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        <ul
          aria-label="Tiện ích khác"
          className="mt-8 flex gap-2.5 overflow-x-auto px-2.5 pb-2 [scrollbar-width:none]"
        >
          {otherUtilities.map((utility) => {
            const Icon = utility.icon;

            return (
              <li
                key={utility.label}
                className="flex w-[4.25rem] shrink-0 flex-col items-center gap-2 text-center"
              >
                <span className="grid size-14 place-items-center rounded-full bg-primary-container text-primary">
                  <Icon aria-hidden strokeWidth={1.5} className="size-6" />
                </span>
                <span className="text-caption leading-4 text-on-surface/65">
                  {utility.label}
                </span>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
