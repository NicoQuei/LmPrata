import { TopBar } from "@/components/sections/TopBar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Catalog } from "@/components/sections/Catalog";
import { Collage } from "@/components/sections/Collage";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Guarantees } from "@/components/sections/Guarantees";
import { Occasions } from "@/components/sections/Occasions";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <TrustBar />
        <Catalog />
        <Collage />
        <Services />
        <HowItWorks />
        <Guarantees />
        <Occasions />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
