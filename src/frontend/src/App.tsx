import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/pages/ContactSection";
import { HomeSection } from "@/pages/HomeSection";
import { HowWeActivateSection } from "@/pages/HowWeActivateSection";
import { OurWorkSection } from "@/pages/OurWorkSection";
import { WhoWeAreSection } from "@/pages/WhoWeAreSection";

export default function App() {
  return (
    <div className="min-h-screen navy-bg">
      <Navbar />
      <main>
        <HomeSection />
        <WhoWeAreSection />
        <HowWeActivateSection />
        <OurWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
