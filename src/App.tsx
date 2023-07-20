import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function App() {
  AOS.init({
    duration: 1000,
    offset: 300,
  });
  {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
  return (
    <>
      <section id="navbar">
        <NavBar />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}
