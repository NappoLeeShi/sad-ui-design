import individualSeed from "@/data/mock/report_individual_history.json";
import infrastructureSeed from "@/data/mock/report_infrastructure_history.json";
import {
  REPORT_CATEGORY_META,
  type ReportCategoryMeta,
} from "@/lib/report-catalog";
import type {
  CreateReportResult,
  IndividualReportRecord,
  InfrastructureReportRecord,
  NewReportInput,
  ReportCategory,
  ReportRecord,
} from "@/lib/types/report";

import { getReporterSnapshot } from "./mockAuthService";
import {
  readStoredJson,
  removeStoredItem,
  STORAGE_KEYS,
  writeStoredJson,
} from "./storage";

/** Fired in the same tab so lists can refresh after a submission. */
export const REPORTS_CHANGED_EVENT = "vneid:reports-changed";

const SEED_BY_CATEGORY: Record<ReportCategory, ReportRecord[]> = {
  individual: individualSeed as unknown as IndividualReportRecord[],
  infrastructure: infrastructureSeed as unknown as InfrastructureReportRecord[],
};

const STORAGE_KEY_BY_CATEGORY: Record<ReportCategory, string> = {
  individual: STORAGE_KEYS.individualReports,
  infrastructure: STORAGE_KEYS.infrastructureReports,
};

/**
 * Stable snapshots for `useSyncExternalStore`. Without this cache every
 * snapshot would be a new array and React would re-render forever.
 */
const reportsCache = new Map<ReportCategory, ReportRecord[]>();

function invalidateReportsCache(category?: ReportCategory): void {
  if (category) {
    reportsCache.delete(category);
  } else {
    reportsCache.clear();
  }
}

function cloneSeeds(category: ReportCategory): ReportRecord[] {
  return SEED_BY_CATEGORY[category].map((record) => ({
    ...record,
    evidence: [...record.evidence],
    timeline: [...record.timeline],
  }));
}

function newestFirst(records: ReportRecord[]): ReportRecord[] {
  return [...records].sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  );
}

function isRecordForCategory(
  value: unknown,
  category: ReportCategory,
): value is ReportRecord {
  if (!value || typeof value !== "object") return false;

  const record = value as Partial<ReportRecord>;
  return (
    typeof record.id === "string" &&
    typeof record.code === "string" &&
    record.category === category &&
    typeof record.submittedAt === "string"
  );
}

/**
 * Returns the stored history for a category, falling back to the JSON seed
 * data. Sorted newest first. Safe to call on the server (returns seeds).
 *
 * The returned array is a shared snapshot: treat it as read-only. Call
 * `refreshReports` after writing storage outside this module.
 */
export function getReports(category: ReportCategory): ReportRecord[] {
  const cached = reportsCache.get(category);
  if (cached) return cached;

  const stored = readStoredJson<unknown>(
    STORAGE_KEY_BY_CATEGORY[category],
  );

  const records = Array.isArray(stored)
    ? newestFirst(stored.filter((item) => isRecordForCategory(item, category)))
    : newestFirst(cloneSeeds(category));

  reportsCache.set(category, records);
  return records;
}

/** Drops cached snapshots and notifies subscribers to re-read storage. */
export function refreshReports(category?: ReportCategory): void {
  invalidateReportsCache(category);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(REPORTS_CHANGED_EVENT));
  }
}

export function getReport(
  category: ReportCategory,
  idOrCode: string,
): ReportRecord | undefined {
  const needle = idOrCode.toLowerCase();

  return getReports(category).find(
    (record) =>
      record.id.toLowerCase() === needle ||
      record.code.toLowerCase() === needle,
  );
}

function nextCode(category: ReportCategory, records: ReportRecord[]): string {
  const meta: ReportCategoryMeta = REPORT_CATEGORY_META[category];
  const year = new Date().getFullYear();
  const pattern = new RegExp(`^${meta.codePrefix}-${year}-(\\d+)$`);

  const highest = records.reduce((max, record) => {
    const match = pattern.exec(record.code);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0);

  return `${meta.codePrefix}-${year}-${String(highest + 1).padStart(4, "0")}`;
}

/**
 * Creates a mock report and persists it to `localStorage`. The JSON files
 * remain untouched: they are seed data only.
 */
export function createReport(input: NewReportInput): CreateReportResult {
  const existing = getReports(input.category);
  const now = new Date();
  const timestamp = now.toISOString();
  const code = nextCode(input.category, existing);

  const base = {
    id: code.toLowerCase(),
    code,
    title: input.title,
    description: input.description,
    submittedAt: timestamp,
    status: "submitted" as const,
    statusUpdatedAt: timestamp,
    reporter: getReporterSnapshot(),
    location: input.location,
    evidence: input.evidence ?? [],
    timeline: [
      {
        status: "submitted" as const,
        at: timestamp,
        note: "Báo cáo được gửi từ ứng dụng.",
      },
    ],
  };

  const record: ReportRecord =
    input.category === "individual"
      ? { ...base, category: "individual", details: input.details }
      : { ...base, category: "infrastructure", details: input.details };

  const persisted = writeStoredJson(STORAGE_KEY_BY_CATEGORY[input.category], [
    record,
    ...existing,
  ]);

  if (persisted) {
    refreshReports(input.category);
  }

  return { record, persisted };
}

/**
 * Subscribes to report changes in this tab and in other tabs.
 * Returns an unsubscribe function.
 */
export function subscribeToReports(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (
      event.key === null ||
      event.key === STORAGE_KEYS.individualReports ||
      event.key === STORAGE_KEYS.infrastructureReports
    ) {
      invalidateReportsCache();
      callback();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(REPORTS_CHANGED_EVENT, callback);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(REPORTS_CHANGED_EVENT, callback);
  };
}

/** Development helper: drop stored reports and return to the JSON seeds. */
export function resetMockReports(category?: ReportCategory): void {
  const categories = category
    ? [category]
    : (Object.keys(STORAGE_KEY_BY_CATEGORY) as ReportCategory[]);

  for (const item of categories) {
    removeStoredItem(STORAGE_KEY_BY_CATEGORY[item]);
  }

  invalidateReportsCache(category);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(REPORTS_CHANGED_EVENT));
  }
}
