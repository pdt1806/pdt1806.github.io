import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <NavBar />
      <section id="introduction"><Introduction /></section>
      <section id="aboutme"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="contactme"><ContactMe /></section>
      <Footer />
    </>
  );
}
