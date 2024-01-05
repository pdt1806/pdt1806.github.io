import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";

import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/Education";
import Introduction from "./pages/Introduction";
import MyValues from "./pages/MyValues";
import Technologies from "./pages/Technologies";
import Works from "./pages/Works";

export default function App() {
  useEffect(() => {
    const initAOS = async () => {
      await AOS.init({
        duration: 1000,
        offset: 100,
      });
      await new Promise((resolve) => setTimeout(resolve, 500));
      AOS.refresh();
    };

    const handleError = (e: ErrorEvent) => {
      e.preventDefault();
    };

    initAOS();
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <>
      <section id="introduction" className="section">
        <Introduction />
      </section>
      <section id="aboutme" className="section">
        <AboutMe />
      </section>
      <section id="education" className="section">
        <Education />
      </section>
      <section id="technologies" className="section">
        <Technologies />
      </section>
      <section id="works" className="section">
        <Works />
      </section>
      <section id="my-values" className="section">
        <MyValues />
      </section>
      <section id="contactme" className="section">
        <ContactMe />
      </section>
    </>
  );
}
