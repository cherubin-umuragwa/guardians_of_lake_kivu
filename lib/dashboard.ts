export interface DashboardMetrics {
  kgDiverted: number;
  activeWasteHubs: number;
  lastUpdated: string; // ISO date string
  isLive: boolean;
}

export const PLACEHOLDER_METRICS: DashboardMetrics = {
  kgDiverted: 0,
  activeWasteHubs: 0,
  lastUpdated: 'Placeholder — live data coming soon',
  isLive: false,
};

// Module-level cache for the last successfully fetched metrics
let cachedMetrics: DashboardMetrics | null = null;

/**
 * Fetches dashboard metrics from the configured API endpoint.
 *
 * - If `NEXT_PUBLIC_DASHBOARD_API_URL` is unset, returns PLACEHOLDER_METRICS.
 * - If set, fetches with a 10-second timeout.
 * - On failure (network error, non-2xx, malformed JSON), returns the last
 *   cached value or PLACEHOLDER_METRICS if no successful fetch has occurred.
 */
export async function fetchMetrics(): Promise<DashboardMetrics> {
  const apiUrl = process.env.NEXT_PUBLIC_DASHBOARD_API_URL;

  if (!apiUrl) {
    return PLACEHOLDER_METRICS;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(apiUrl, { signal: controller.signal });

    if (!response.ok) {
      return cachedMetrics ?? PLACEHOLDER_METRICS;
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      console.error('[dashboard] Malformed JSON response from API');
      return cachedMetrics ?? PLACEHOLDER_METRICS;
    }

    if (!isValidMetrics(data)) {
      console.error('[dashboard] API response does not match DashboardMetrics shape');
      return cachedMetrics ?? PLACEHOLDER_METRICS;
    }

    cachedMetrics = data;
    return cachedMetrics;
  } catch {
    // Network error or abort (timeout)
    return cachedMetrics ?? PLACEHOLDER_METRICS;
  } finally {
    clearTimeout(timeoutId);
  }
}

function isValidMetrics(data: unknown): data is DashboardMetrics {
  if (typeof data !== 'object' || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.kgDiverted === 'number' &&
    typeof d.activeWasteHubs === 'number' &&
    typeof d.lastUpdated === 'string' &&
    typeof d.isLive === 'boolean'
  );
}
