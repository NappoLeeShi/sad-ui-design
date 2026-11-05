import userSeed from "@/data/mock/user.json";
import type { MockUserProfile } from "@/lib/types/report";

/**
 * The mock session is mirrored into a cookie because the Proxy runs on the
 * server, where `localStorage` does not exist. The cookie is a routing hint
 * only: it is readable by the client and is not a security mechanism.
 */
export const MOCK_SESSION_COOKIE = "vneid_mock_session";

const MOCK_SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export interface MockSession {
  userId: string;
  signedInAt: string;
}

const user = userSeed as MockUserProfile;

export function isValidMockSession(value: unknown): value is MockSession {
  if (!value || typeof value !== "object") return false;

  const session = value as Partial<MockSession>;
  return (
    session.userId === user.id &&
    typeof session.signedInAt === "string" &&
    !Number.isNaN(Date.parse(session.signedInAt))
  );
}

/**
 * Pure encode/decode helpers shared by the client service and `proxy.ts`.
 */
export function encodeMockSessionCookie(session: MockSession): string {
  return encodeURIComponent(JSON.stringify(session));
}

export function decodeMockSessionCookie(
  value: string | undefined,
): MockSession | null {
  if (!value) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(value));
    return isValidMockSession(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function hasDocument(): boolean {
  return typeof document !== "undefined";
}

export function readMockSessionCookie(): MockSession | null {
  if (!hasDocument()) return null;

  const prefix = `${MOCK_SESSION_COOKIE}=`;
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(prefix));

  if (!match) return null;

  return decodeMockSessionCookie(match.slice(prefix.length));
}

export function writeMockSessionCookie(session: MockSession): boolean {
  if (!hasDocument()) return false;

  try {
    const secure =
      window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${MOCK_SESSION_COOKIE}=${encodeMockSessionCookie(
      session,
    )}; Path=/; Max-Age=${MOCK_SESSION_MAX_AGE}; SameSite=Lax${secure}`;

    // Some browsers silently reject cookies. Verify the write before telling
    // the login form that the session can cross the route guard.
    return readMockSessionCookie()?.signedInAt === session.signedInAt;
  } catch {
    return false;
  }
}

export function clearMockSessionCookie(): void {
  if (!hasDocument()) return;

  try {
    const secure =
      window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${MOCK_SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
  } catch {
    // Cookie storage unavailable — nothing to clean up.
  }
}
