"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import LanguageToggle from "@/components/i18n/LanguageToggle";

interface NavLink { label: string; href: string; }
interface HamburgerMenuProps { links: NavLink[]; isOpen: boolean; onClose: () => void; }

export default function HamburgerMenu({ links, isOpen, onClose }: HamburgerMenuProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" aria-modal="true" role="dialog" aria-label="Navigation menu">
      <div
        ref={drawerRef}
        className="absolute top-0 left-0 right-0 bg-lake-blue text-white px-6 pt-5 pb-8 flex flex-col gap-5 shadow-2xl animate-fade-in"
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-water-teal text-base">Guardians of the Lake</span>
          <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-md hover:bg-white/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-base font-medium hover:text-water-teal transition-colors py-3 border-b border-white/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="pt-1">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
