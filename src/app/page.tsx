import HomeHero from "@/components/home/hero-home";
import { AboutSection } from "@/components/home/about-section";
import { WorkSection } from "@/components/home/work-section";
import { ContactSection } from "@/components/home/contact-section";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {

  return (
    <>
      <Header />
      <main className="relative">
        <HomeHero />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
