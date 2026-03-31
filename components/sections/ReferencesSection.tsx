"use client";

import { ExternalLink, BookOpen } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { CITATIONS } from "@/lib/citations";

export default function ReferencesSection() {
  const { t } = useI18n();

  return (
    <section id="references" className="py-24 bg-slate-50" aria-label="References">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-3">Sources</p>
          <h2 className="text-4xl md:text-5xl font-bold text-lake-blue tracking-tight mb-4">{t("references.title")}</h2>
          <p className="text-gray-500 text-base font-light max-w-xl mx-auto">{t("references.subtitle")}</p>
        </div>

        {/* Citation cards */}
        <ol className="space-y-4">
          {CITATIONS.map((citation, i) => (
            <li
              key={citation.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-5 items-start card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Index */}
              <div className="w-9 h-9 rounded-xl bg-lake-blue/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen size={16} className="text-lake-blue" strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-water-teal mb-1">
                  {citation.authors} · {citation.year}
                </p>
                <p className="text-gray-800 font-medium text-sm leading-snug mb-2">
                  {citation.title}
                </p>
                <a
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-lake-blue hover:text-water-teal text-xs font-medium transition-colors"
                >
                  {citation.source}
                  <ExternalLink size={11} strokeWidth={2} />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
