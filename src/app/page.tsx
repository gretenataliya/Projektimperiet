import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Customers from "@/src/components/Customers";
import ProjectAreas from "@/src/components/ProjectAreas";
import Process from "@/src/components/Process";
import ServiceAccordion from "@/src/components/ServiceAccordion";
import ContactSection from "@/src/components/ContactSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-white text-[#111111]">
        <Hero />
        <About />
        <ProjectAreas />
        <Customers />
        <Services />
        <ServiceAccordion />
        <Process />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
