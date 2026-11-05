import userSeed from "@/data/mock/user.json";
import type { MockUserProfile, ReportReporter } from "@/lib/types/report";

import {
  clearMockSessionCookie,
  isValidMockSession,
  readMockSessionCookie,
  type MockSession,
  writeMockSessionCookie,
} from "./session-cookie";
import {
  readStoredJson,
  removeStoredItem,
  STORAGE_KEYS,
  writeStoredJson,
} from "./storage";

export type { MockSession };

export interface SignInResult {
  ok: boolean;
  error?: string;
  persisted?: boolean;
}

const user = userSeed as MockUserProfile;

/**
 * The mock profile that represents the signed-in citizen. It is the single
 * source for reporter details in both report forms.
 */
export function getMockUser(): MockUserProfile {
  return user;
}

export function getReporterSnapshot(): ReportReporter {
  return {
    fullName: user.fullName,
    citizenId: user.citizenId,
    permanentAddress: user.permanentAddress,
  };
}

/**
 * Reads the mock session. Call only after mount in client components;
 * during server rendering there is no storage and this returns `null`.
 *
 * `localStorage` is the original source of truth. The cookie mirrors it for
 * the server-side guard, and either copy can restore the other after a
 * refresh or an older session created before route protection existed.
 */
export function getSession(): MockSession | null {
  const stored: unknown = readStoredJson<MockSession>(STORAGE_KEYS.session);
  const cookieSession = readMockSessionCookie();

  if (isValidMockSession(stored)) {
    // Without a cookie the guard cannot admit the session. Treat the user as
    // signed out instead of redirecting to a protected page that bounces back.
    if (!cookieSession && !writeMockSessionCookie(stored)) {
      return null;
    }

    return stored;
  }

  if (cookieSession) {
    writeStoredJson(STORAGE_KEYS.session, cookieSession);
    return cookieSession;
  }

  if (stored) {
    removeStoredItem(STORAGE_KEYS.session);
  }

  return null;
}

export function isSignedIn(): boolean {
  return getSession() !== null;
}

/**
 * Mock sign-in: only the password field is validated. No credential is
 * checked, stored, or sent anywhere.
 */
export function signIn(password: string): SignInResult {
  if (!password.trim()) {
    return { ok: false, error: "Vui lòng nhập mật khẩu." };
  }

  const session: MockSession = {
    userId: user.id,
    signedInAt: new Date().toISOString(),
  };

  // The cookie is what lets the Proxy admit the next request. Without it the
  // guard would bounce the user back to `/login`, so fail the mock sign-in
  // instead of creating a redirect loop.
  if (!writeMockSessionCookie(session)) {
    removeStoredItem(STORAGE_KEYS.session);
    return {
      ok: false,
      error:
        "Trình duyệt đang chặn cookie nên không thể duy trì phiên đăng nhập.",
    };
  }

  return {
    ok: true,
    persisted: writeStoredJson(STORAGE_KEYS.session, session),
  };
}

export function signOut(): void {
  removeStoredItem(STORAGE_KEYS.session);
  clearMockSessionCookie();
}
