import { NextResponse, type NextRequest } from "next/server";

import {
  decodeMockSessionCookie,
  MOCK_SESSION_COOKIE,
} from "@/lib/mock/session-cookie";

const LOGIN_PATH = "/login";
const ENTRY_PATH = "/home";

/**
 * Centralised mock authentication guard. Every application route except
 * `/login` requires a mock session cookie, so direct URLs, copied links,
 * refreshes and new tabs are all checked before the page renders.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = decodeMockSessionCookie(
    request.cookies.get(MOCK_SESSION_COOKIE)?.value,
  );
  const isLoginRoute =
    pathname === LOGIN_PATH || pathname === `${LOGIN_PATH}/`;

  if (isLoginRoute) {
    if (session) {
      return NextResponse.redirect(new URL(ENTRY_PATH, request.url));
    }

    return NextResponse.next();
  }

  if (session) {
    return NextResponse.next();
  }

  // `/login` is public, so a session-less visitor always has a valid stop.
  return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
}

export const config = {
  matcher: [
    /*
     * Skip Next.js assets and static files. Page data requests keep their
     * page path, so they still pass through the guard.
     */
    "/((?!_next/|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map|txt|xml|webmanifest|woff|woff2)$).*)",
  ],
};
