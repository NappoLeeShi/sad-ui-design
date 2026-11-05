import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VNeID — Góp ý, phản ánh",
    template: "%s · VNeID",
  },
  description:
    "Bản mô phỏng tiếp nhận góp ý, phản ánh và vướng mắc của người dân.",
  applicationName: "VNeID",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-surface min-[431px]:border-x min-[431px]:border-outline/20">
          {children}
        </div>
      </body>
    </html>
  );
}
