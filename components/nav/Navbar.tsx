"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import LanguageToggle from "@/components/i18n/LanguageToggle";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t("nav.crisis"),      href: "#crisis" },
    { label: t("nav.solution"),    href: "#solution" },
    { label: t("nav.impact"),      href: "#impact" },
    { label: t("nav.ambassadors"), href: "#ambassadors" },
    { label: t("nav.partners"),    href: "#partners" },
    { label: t("nav.sponsors"),    href: "#sponsors" },
    { label: t("nav.references"),  href: "#references" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-lake-blue/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-water-teal text-base tracking-tight">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            Guardians of the Lake
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-white/10 hover:text-water-teal transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <HamburgerMenu links={links} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
