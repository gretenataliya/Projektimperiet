import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import ProjectAreas from "@/src/components/ProjectAreas";
import Statement from "@/src/components/Statement";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import ContactSection from "@/src/components/ContactSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-white text-black">
        <Hero />
        <Services />
        <ProjectAreas />
        <Statement />
        <WhyChooseUs />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}