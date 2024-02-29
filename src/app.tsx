import AOS from "aos";
import "aos/dist/aos.css";

import "./app.css";

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

  const listOfPages = [
    <Introduction />,
    <AboutMe />,
    <Education />,
    <Technologies />,
    <Works />,
    <MyValues />,
    <ContactMe />,
  ];

  return (
    <>
      {listOfPages.map((page) => (
        <section>{page}</section>
      ))}
    </>
  );
}
