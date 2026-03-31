"use client";

import { CloudRain, BookOpen, Trash2, Zap, Fish } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import CitationBlock from "@/components/ui/CitationBlock";

export default function CrisisSection() {
  const { t } = useI18n();

  return (
    <section id="crisis" className="py-24 bg-white" aria-label="The Crisis">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-3">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight">{t("crisis.title")}</h2>
        </div>

        {/* Bento grid — 3 problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Card 1 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 card-hover animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
              <CloudRain size={20} className="text-lake-blue" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-bold text-lake-blue mb-3">{t("crisis.conveyor.title")}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t("crisis.conveyor.body")}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 card-hover animate-fade-up delay-100">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
              <BookOpen size={20} className="text-amber-700" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-bold text-lake-blue mb-3">{t("crisis.education.title")}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t("crisis.education.body")}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-7 card-hover animate-fade-up delay-200">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-5">
              <Trash2 size={20} className="text-red-600" strokeWidth={1.8} />
            </div>
            <h3 className="text-lg font-bold text-lake-blue mb-3">{t("crisis.salongo.title")}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t("crisis.salongo.body")}</p>
          </div>
        </div>

        {/* Citation strip */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl px-7 py-5 mb-8 space-y-3">
          <p className="text-gray-500 text-sm leading-relaxed italic">
            {t("crisis.cite.ijltemas")}
            <CitationBlock citationId="ijltemas-2026" inline />
          </p>
          <p className="text-gray-500 text-sm leading-relaxed italic">
            {t("crisis.cite.niles")}
            <CitationBlock citationId="niles-2026" inline />
          </p>
        </div>

        {/* Why It Matters — dark bento */}
        <div className="bg-lake-blue rounded-3xl p-8 md:p-10 animate-fade-up delay-300">
          <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-2">Why It Matters</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{t("crisis.matters.title")}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Energy card */}
            <div className="bg-white/8 border border-white/12 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/20 flex items-center justify-center mb-4">
                <Zap size={20} className="text-yellow-300" strokeWidth={1.8} />
              </div>
              <p className="text-white/85 text-sm leading-relaxed mb-5">
                {t("crisis.matters.energy")}
                <CitationBlock citationId="ggn-afp-2022" inline />
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-water-teal">90 km</p>
                  <p className="text-white/55 text-xs mt-0.5">plastic travels to dam</p>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-water-teal">6.3 MW</p>
                  <p className="text-white/55 text-xs mt-0.5">power deficit</p>
                </div>
              </div>
            </div>

            {/* Food security card */}
            <div className="bg-white/8 border border-white/12 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-eco-green/20 flex items-center justify-center mb-4">
                <Fish size={20} className="text-eco-green" strokeWidth={1.8} />
              </div>
              <h4 className="font-bold text-white text-base mb-3">{t("crisis.matters.fish.title")}</h4>
              <p className="text-white/85 text-sm leading-relaxed">
                {t("crisis.matters.fish.body")}
                <CitationBlock citationId="researchgate-pmc-2025" inline />
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
