"use client";

import { useCallback, useSyncExternalStore } from "react";

import type { ReportCategory, ReportRecord } from "@/lib/types/report";

import {
  getReports,
  refreshReports,
  subscribeToReports,
} from "./mockReportService";

export interface UseMockReportsResult {
  /** `null` during SSR and hydration, matching the server snapshot. */
  reports: ReportRecord[] | null;
  loading: boolean;
  refresh: () => void;
}

/**
 * Subscribes to the mock report store through `useSyncExternalStore`.
 *
 * The server snapshot is always `null`; the client snapshot is the cached
 * report list from `localStorage`/seed data. React re-reads the snapshot after
 * hydration and on every storage or in-tab change, so stored reports never
 * cause a hydration mismatch.
 */
export function useMockReports(category: ReportCategory): UseMockReportsResult {
  const subscribe = useCallback(
    (onStoreChange: () => void) => subscribeToReports(onStoreChange),
    [],
  );
  const getSnapshot = useCallback(() => getReports(category), [category]);
  const getServerSnapshot = useCallback(() => null, []);

  const reports = useSyncExternalStore<ReportRecord[] | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const refresh = useCallback(() => {
    refreshReports(category);
  }, [category]);

  return { reports, loading: reports === null, refresh };
}
