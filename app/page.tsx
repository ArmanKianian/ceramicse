import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorks from "@/components/FeaturedWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedWorks />
        <Contact />
      </main>

      <Footer />
    </>
  );
}