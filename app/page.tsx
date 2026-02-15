import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Help from "@/components/sections/Help";
import Hero from "@/components/sections/Hero";
import Pets from "@/components/sections/Pets";
import WhoWeAre from "@/components/sections/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="who-we-are">
        <WhoWeAre />
      </section>
      <section id="help">
        <Help />
      </section>
      <section id="pets">
        <Pets />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
