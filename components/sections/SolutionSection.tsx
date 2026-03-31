"use client";

import { Package, Users, Trophy, Globe, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import CitationBlock from "@/components/ui/CitationBlock";

export default function SolutionSection() {
  const { t } = useI18n();

  const flowSteps = [
    { label: "Rain falls",           icon: "🌧", active: false },
    { label: "Streets & slopes",     icon: "🏘", active: false },
    { label: "Waste Hub intercepts", icon: "📦", active: true  },
    { label: "Lake protected",       icon: "🌊", active: false },
  ];

  return (
    <section id="solution" className="py-24 bg-slate-50" aria-label="Our Solution">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-3">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight mb-4">{t("solution.title")}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">{t("solution.subtitle")}</p>
        </div>

        {/* Bento grid — 2 pillars side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Pillar 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 card-hover animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-lake-blue text-water-teal text-xs font-bold px-3 py-1 rounded-full">{t("solution.pillar1.label")}</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <Package size={18} className="text-lake-blue" strokeWidth={1.8} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-lake-blue mb-3">{t("solution.pillar1.title")}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{t("solution.pillar1.body")}</p>

            {/* Flow diagram */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-5">
              <div className="flex items-center justify-between gap-1 flex-wrap">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-1">
                    <div className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium text-center min-w-[72px] ${step.active ? "bg-eco-green text-white shadow-md" : "bg-white border border-gray-100 text-gray-600"}`}>
                      <span className="text-base" aria-hidden="true">{step.icon}</span>
                      <span className="leading-tight">{step.label}</span>
                    </div>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight size={14} className="text-gray-300 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed italic">
              {t("solution.pillar1.cite")}
              <CitationBlock citationId="ijltemas-2026" inline />
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 card-hover animate-fade-up delay-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-eco-green text-white text-xs font-bold px-3 py-1 rounded-full">{t("solution.pillar2.label")}</span>
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <Users size={18} className="text-eco-green" strokeWidth={1.8} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-lake-blue mb-3">{t("solution.pillar2.title")}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{t("solution.pillar2.body")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-eco-green/15 flex items-center justify-center mb-3">
                  <Users size={16} className="text-eco-green" strokeWidth={1.8} />
                </div>
                <h4 className="font-semibold text-lake-blue text-sm mb-1">Lake Ambassadors</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Students trained to lead conservation action in their schools and communities.</p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-eco-green/15 flex items-center justify-center mb-3">
                  <Trophy size={16} className="text-eco-green" strokeWidth={1.8} />
                </div>
                <h4 className="font-semibold text-lake-blue text-sm mb-1">Yearly Debate</h4>
                <p className="text-gray-500 text-xs leading-relaxed">A structured platform for student leadership development in conservation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Replicability banner */}
        <div className="bg-lake-blue rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 animate-fade-up delay-200">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
            <Globe size={26} className="text-water-teal" strokeWidth={1.6} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-water-teal mb-2">A Model Built to Travel</h3>
            <p className="text-white/80 text-sm leading-relaxed">{t("solution.replicable")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
