import {Contact} from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}
