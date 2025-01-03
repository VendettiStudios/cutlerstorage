import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import Services from "../components/services/services";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
