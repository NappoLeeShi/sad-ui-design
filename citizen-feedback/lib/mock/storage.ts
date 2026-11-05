/**
 * SSR-safe helpers around `localStorage`.
 *
 * Every read happens after mount inside a client component, so server
 * rendering and the first client render stay identical. Storage failures
 * (private mode, quota, disabled storage) return safe fallbacks instead of
 * throwing.
 */

export const STORAGE_KEYS = {
  session: "vneid:session:v1",
  individualReports: "vneid:reports:individual:v1",
  infrastructureReports: "vneid:reports:infrastructure:v1",
} as const;

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function readStoredJson<T>(key: string): T | null {
  if (!isBrowser()) return null;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function writeStoredJson(key: string, value: unknown): boolean {
  if (!isBrowser()) return false;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStoredItem(key: string): void {
  if (!isBrowser()) return;

  try {
    window.localStorage.removeItem(key);
  } catch {
    // Storage unavailable — nothing to clean up.
  }
}
