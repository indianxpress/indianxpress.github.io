import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Cargo from "../components/Cargo";
import Garage from "../components/Garage";
import Shipping from "../components/Shipping";
import Warehouse from "../components/Warehouse";

export default function Home() {
  return (
    <>
      <Hero />
      <Cargo />
      <Garage />
      <Shipping />
      <Warehouse />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
