import { ContactSection } from "@/components/sections/ContactSection";
import { CustomerTestimonialsSection } from "@/components/sections/CustomerTestimonialsSection";
import { FAQsSection } from "@/components/sections/FAQsSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestProjectsSection } from "@/components/sections/latestProjects";
import { ProjectShowcaseSection } from "@/components/sections/ProjectShowcaseSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <HeroSection/>    
    <ProjectShowcaseSection/>
    <WhyChooseUsSection/>
    <LatestProjectsSection/>
    <CustomerTestimonialsSection/>
    <FAQsSection/>
    <ContactSection/>
  
    </>
  );
}
