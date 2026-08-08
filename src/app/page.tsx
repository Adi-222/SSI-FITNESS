import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Training from "@/components/Training";
import Pricing from "@/components/Pricing";
import Transformations from "@/components/Transformations";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookCallCTA from "@/components/BookCallCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Training />
      <Pricing />
      <Transformations />
      <Trainers />
      <Testimonials />
      <FAQ />
      <BookCallCTA />
    </>
  );
}
