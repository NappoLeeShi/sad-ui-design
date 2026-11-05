import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/LoginForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { getMockUser } from "@/lib/mock/mockAuthService";

export const metadata: Metadata = {
  title: "Đăng nhập",
};

export default function LoginPage() {
  const user = getMockUser();

  return (
    <>
      <PageHeader title="Đăng nhập" showBack={false} />
      <LoginForm user={user} />
    </>
  );
}
