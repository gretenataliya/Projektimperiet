import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import About from "@/src/components/About";
import Process from "@/src/components/Process";
import Footer from "@/src/components/Footer";
import BRFProjects from "@/src/components/BRFProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <BRFProjects />
        <Process />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}