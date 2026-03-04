
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import BubbleBackground from "@/components/BubbleBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  useEffect(() => {
    // Handle scrolling to anchor on page load
    const scrollToAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    // Scroll immediately if sections are already loaded
    scrollToAnchor();

    // Also listen for hash changes
    window.addEventListener('hashchange', scrollToAnchor);

    return () => {
      window.removeEventListener('hashchange', scrollToAnchor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BubbleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <CookieBanner />
    </div>
  );
};

export default Index;
