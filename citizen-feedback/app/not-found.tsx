import { SearchX } from "lucide-react";
import Link from "next/link";

import { buttonClasses } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Không tìm thấy trang" backHref="/login" />
      <main className="flex flex-1 items-center px-5 py-6">
        <EmptyState
          icon={SearchX}
          title="Trang này không tồn tại"
          description="Đường dẫn có thể đã thay đổi hoặc chưa được xây dựng trong bản mẫu."
          action={
            <Link href="/login" className={buttonClasses()}>
              Về đăng nhập
            </Link>
          }
          className="w-full"
        />
      </main>
    </>
  );
}
