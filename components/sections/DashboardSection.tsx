"use client";

import { useEffect, useState } from "react";
import { BarChart3, MapPin, RefreshCw, AlertTriangle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { fetchMetrics, PLACEHOLDER_METRICS, type DashboardMetrics } from "@/lib/dashboard";

export default function DashboardSection() {
  const { t } = useI18n();
  const [metrics, setMetrics] = useState<DashboardMetrics>(PLACEHOLDER_METRICS);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await fetchMetrics();
      setMetrics(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const env = (typeof process !== "undefined" ? (process as any).env : {}) as Record<string, string | undefined>;
      if (Boolean(env["NEXT_PUBLIC_DASHBOARD_API_URL"]) && !data.isLive) setApiError(true);
    }
    load();
  }, []);

  return (
    <section id="impact" className="py-24 bg-lake-blue" aria-label="Plastic Diverted Dashboard">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-3">Live Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">{t("dashboard.title")}</h2>
          <p className="text-white/55 text-base font-light">{t("dashboard.subtitle")}</p>
        </div>

        {/* Bento metric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 max-w-2xl mx-auto">
          {/* kg diverted */}
          <div className="bg-white/8 border border-white/12 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center gap-3 card-hover animate-fade-up">
            <div className="w-11 h-11 rounded-2xl bg-water-teal/20 flex items-center justify-center">
              <BarChart3 size={22} className="text-water-teal" strokeWidth={1.8} />
            </div>
            <span className="text-5xl font-bold text-water-teal tabular-nums">
              {metrics.kgDiverted.toLocaleString()}
            </span>
            <span className="text-white/65 text-sm text-center">{t("dashboard.kg")}</span>
          </div>

          {/* active hubs */}
          <div className="bg-white/8 border border-white/12 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center gap-3 card-hover animate-fade-up delay-100">
            <div className="w-11 h-11 rounded-2xl bg-eco-green/20 flex items-center justify-center">
              <MapPin size={22} className="text-eco-green" strokeWidth={1.8} />
            </div>
            <span className="text-5xl font-bold text-eco-green tabular-nums">
              {metrics.activeWasteHubs.toLocaleString()}
            </span>
            <span className="text-white/65 text-sm text-center">{t("dashboard.hubs")}</span>
          </div>
        </div>

        {/* Placeholder / status */}
        <div className="text-center">
          {!metrics.isLive && (
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-5 py-2.5 animate-fade-up delay-200">
              <RefreshCw size={14} className="text-water-teal" />
              <p className="text-white/55 text-xs" data-testid="placeholder-label">
                {t("dashboard.placeholder")}
              </p>
            </div>
          )}
          {metrics.isLive && (
            <p className="text-white/35 text-xs">
              {t("dashboard.updated")}: {metrics.lastUpdated}
            </p>
          )}
          {apiError && (
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-5 py-2.5 mt-3">
              <AlertTriangle size={14} className="text-yellow-400" />
              <span className="text-yellow-300 text-xs">{t("dashboard.unavailable")}</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
