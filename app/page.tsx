import Navbar from "@/components/nav/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import CrisisSection from "@/components/sections/CrisisSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DashboardSection from "@/components/sections/DashboardSection";
import AmbassadorCTA from "@/components/sections/AmbassadorCTA";
import WasteToWealthCTA from "@/components/sections/WasteToWealthCTA";
import SponsorCTA from "@/components/sections/SponsorCTA";
import ReferencesSection from "@/components/sections/ReferencesSection";
import Footer from "@/components/sections/Footer";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CrisisSection />
      <SolutionSection />
      <DashboardSection />
      <AmbassadorCTA />
      <div id="waste-to-wealth">
        <WasteToWealthCTA />
      </div>
      <SponsorCTA />
      <ReferencesSection />
      <Footer />
    </main>
  );
}
