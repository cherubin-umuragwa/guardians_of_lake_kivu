"use client";

import { useState } from "react";
import { Droplets, Fish, Zap, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  const [imgError, setImgError] = useState(false);

  const stats = [
    { icon: Droplets, label: "Clean Water",   sub: "for millions in Goma",  color: "text-water-teal" },
    { icon: Fish,     label: "Sambaza Fish",  sub: "critical food source",  color: "text-eco-green" },
    { icon: Zap,      label: "Ruzizi Dam",    sub: "hydroelectric power",   color: "text-yellow-300" },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/lake-kivu-hero.jpg"
          alt="Lake Kivu, Goma, DRC"
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImgError(true)}
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-[#004080] to-[#001a33]" aria-hidden="true" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-lake-blue/80 via-lake-blue/65 to-lake-blue/90" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
        <p className="animate-fade-up text-water-teal font-semibold text-xs uppercase tracking-[0.2em] mb-5">
          Goma, DRC — Lake Kivu
        </p>

        <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          {t("hero.headline")}
        </h1>

        <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
          {t("hero.subheadline")}
        </p>

        {/* Bento stat cards */}
        <div className="animate-fade-up delay-300 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto">
          {stats.map(({ icon: Icon, label, sub, color }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-5 card-hover"
            >
              <Icon size={22} className={color} strokeWidth={1.8} />
              <span className="font-semibold text-sm text-white">{label}</span>
              <span className="text-white/55 text-xs">{sub}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#ambassadors"
            className="bg-eco-green hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-eco-green/30 hover:shadow-xl min-h-[44px]"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#crisis"
            className="border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full text-base transition-all duration-200 min-h-[44px]"
          >
            {t("hero.scroll")}
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#crisis" aria-label="Scroll down" className="inline-flex text-white/40 hover:text-white/70 transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
