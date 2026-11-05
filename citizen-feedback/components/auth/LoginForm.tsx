"use client";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Field, fieldDescribedBy } from "@/components/ui/Field";
import { Notice } from "@/components/ui/Notice";
import { TextInput } from "@/components/ui/TextInput";
import { getSession, signIn } from "@/lib/mock/mockAuthService";
import type { MockUserProfile } from "@/lib/types/report";

const PASSWORD_HINT = "Bản mô phỏng chấp nhận mật khẩu bất kỳ.";

/** Keeps enough of the identifier visible to recognise the account. */
function maskCitizenId(citizenId: string): string {
  if (citizenId.length <= 5) return citizenId;

  const masked = "*".repeat(citizenId.length - 5);
  return `${citizenId.slice(0, 3)}${masked}${citizenId.slice(-2)}`;
}

export interface LoginFormProps {
  user: MockUserProfile;
}

export function LoginForm({ user }: LoginFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);

  // A returning visitor with a stored session skips the login screen.
  // Storage is only readable after mount, so this cannot run during SSR.
  useEffect(() => {
    if (getSession()) {
      router.replace("/home");
    }
  }, [router]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!password.trim()) {
      setError("Vui lòng nhập mật khẩu.");
      return;
    }

    setError(undefined);
    setSubmitting(true);

    const result = signIn(password);

    if (!result.ok) {
      setSubmitting(false);
      setError(result.error ?? "Không thể đăng nhập. Vui lòng thử lại.");
      return;
    }

    router.replace("/home");
  }

  return (
    <main className="flex flex-1 flex-col px-5 pb-8 pt-6">
      <h2 className="text-display font-semibold text-on-surface">
        Xác nhận tài khoản
      </h2>
      <p className="mt-1.5 text-body text-on-surface/65">
        Dùng tài khoản định danh VNeID để gửi phản ánh và theo dõi tiến xử lý.
      </p>

      <section aria-labelledby="login-account-heading" className="mt-7">
        <h3
          id="login-account-heading"
          className="text-label font-medium text-on-surface/55"
        >
          Tài khoản định danh
        </h3>

        <div className="mt-2 flex items-center gap-3 rounded-card border border-outline/25 bg-surface p-4">
          <span
            aria-hidden
            className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-container text-section font-semibold text-on-primary-container"
          >
            {user.initials}
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-body font-semibold text-on-surface">
              {user.fullName}
            </p>
            <p className="mt-0.5 truncate text-caption text-on-surface/55">
              {user.accountLevel}
            </p>
          </div>

          <span
            aria-hidden
            className="shrink-0 text-label tabular-nums text-on-surface/60"
          >
            {maskCitizenId(user.citizenId)}
          </span>
          <span className="sr-only">Số định danh đã được ẩn</span>
        </div>
      </section>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <Field
          id="login-password"
          label="Mật khẩu"
          required
          hint={PASSWORD_HINT}
          error={error}
        >
          <div className="relative">
            <TextInput
              id="login-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (error) setError(undefined);
              }}
              placeholder="Nhập mật khẩu"
              autoComplete="current-password"
              invalid={Boolean(error)}
              aria-describedby={fieldDescribedBy("login-password", {
                hint: PASSWORD_HINT,
                error,
              })}
              required
              className="pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              aria-pressed={showPassword}
              className="absolute right-1 top-1 grid size-10 place-items-center rounded-full text-on-surface/55 transition-colors hover:bg-on-surface/6 hover:text-on-surface focus-visible:outline-primary"
            >
              {showPassword ? (
                <EyeOff aria-hidden strokeWidth={1.5} className="size-5" />
              ) : (
                <Eye aria-hidden strokeWidth={1.5} className="size-5" />
              )}
            </button>
          </div>
        </Field>

        <Button type="submit" size="lg" fullWidth loading={submitting}>
          Đăng nhập
        </Button>
      </form>

      <Notice tone="info" title="Bản mô phỏng" className="mt-6">
        Mật khẩu không được kiểm tra, lưu hoặc gửi đến máy chủ. Phiên đăng nhập
        chỉ được giữ trong trình duyệt.
      </Notice>

      <footer className="mt-auto pt-8 text-center">
        <p className="text-caption leading-5 text-on-surface/55">
          Bản mô phỏng giao diện VNeID
        </p>
        <p className="mt-0.5 text-caption tabular-nums text-on-surface/55">
          Phiên bản 0.1.0
        </p>
      </footer>
    </main>
  );
}
