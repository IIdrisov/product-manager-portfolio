import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ValueProps } from "@/components/ValueProps";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" className="flex w-full flex-col items-center pb-28 lg:pb-0">
        <Hero />
        <WorkSection />
        <ExperienceSection />
        <ValueProps />
        <TestimonialsSection />
        <OfferSection />
        <ManifestoSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}
