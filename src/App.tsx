import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/Education";
import Introduction from "./pages/Introduction";
import MyValues from "./pages/MyValues";
import Technologies from "./pages/Technologies";
import Works from "./pages/Works";

export default function App() {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
  {
    setTimeout(() => {
      AOS.refresh();
      let sections = document.querySelectorAll("section");
      let navLinks = document.querySelectorAll(".navbar .nav-link");

      function makeActive(link: Element | null) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (link) {
          link.classList.add("active");
        }
      }

      function isElementInViewport(el: Element) {
        const rect = el.getBoundingClientRect();
        if (el.id === "works" || el.id === "technologies") {
          return (
            rect.top <=
            (el.id === "technologies"
              ? document.documentElement.clientHeight / 2
              : 300)
          );
        }
        return (
          (rect.top >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight)) ||
          rect.top ==
            (window.innerHeight || document.documentElement.clientHeight)
        );
      }

      document.addEventListener("scroll", () => {
        let activeLinkFound = false;

        sections.forEach((section) => {
          if (isElementInViewport(section)) {
            let id = section.getAttribute("id");
            let correspondingLink = document.querySelector(
              `.navbar .nav-link[href="#${id}"]`
            );
            makeActive(correspondingLink);
            activeLinkFound = true;
          }
        });

        if (!activeLinkFound) {
          makeActive(null);
        }
      });
    }, 500);
  }
  return (
    <>
      {/* <section id="navbar">
        <NavBar />
      </section> */}
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
