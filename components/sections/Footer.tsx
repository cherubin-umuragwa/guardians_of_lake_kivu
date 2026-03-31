import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-lake-blue border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <div className="flex items-center gap-2">
          <Globe size={15} className="text-water-teal" strokeWidth={1.8} />
          <span className="text-water-teal font-semibold">Guardians of the Lake</span>
          <span>— Goma, DRC</span>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
