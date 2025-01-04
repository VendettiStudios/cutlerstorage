// import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import WhyUs from "../components/whyUs/whyUs";
import Services from "../components/services/services";
import Footer from "../components/footer/footer";
import AreasServiced from "@/components/areasServiced/areasServiced";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <AreasServiced />
      <Footer />
    </div>
  );
}
