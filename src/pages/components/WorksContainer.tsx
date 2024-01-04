import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import WorksBox from "./WorksBox";

const projects = [
  <WorksBox
    title="Discord Status as Image"
    description="Turn your Discord status into a simple, eye-catching image for easy sharing and display."
    image="/images/works/disi-logo.webp"
    link="https://disi.bennynguyen.dev"
    source="https://github.com/pdt1806/discord-status-as-image"
  ></WorksBox>,
  <WorksBox
    title="ERG Wordle"
    description="A remake of the popular game Wordle using pure HTML5, CSS and JavaScript."
    image="/images/works/wordle-icon.webp"
    link="https://wordle.bennynguyen.dev"
    source="https://github.com/pdt1806/erg-wordle"
  ></WorksBox>,
  <WorksBox
    title="AutoDisconnect"
    description="A simple Minecraft mod that automatically disconnects players when they are in low health."
    image="/images/works/autodisconnect-logo.webp"
    link="https://github.com/pdt1806/AutoDisconnect/releases/"
    source="https://github.com/pdt1806/AutoDisconnect"
  ></WorksBox>,
  <WorksBox
    title="ERG Rock Paper Scissors"
    description="A Rock Paper Scissors game created using Phaser, a JavaScript framework."
    image="/images/works/ropas-title.webp"
    link="https://ropas.bennynguyen.dev"
    source="https://github.com/pdt1806/erg-rock-paper-scissors"
  ></WorksBox>,
  <WorksBox
    title="Emochoice Web Store"
    description="The web store of Emochoice, a print-on-demand store in Canada. Built with React, TypeScript and Mantine."
    image="https://emochoice.ca/images/logo.svg"
    link="https://emochoice.ca"
    source="https://github.com/tobycm/emochoice"
    owner={{ name: "tobycm", link: "https://github.com/tobycm" }}
  ></WorksBox>,
  // <WorksBox
  //   title="Pocket Hanzi Dictionary"
  //   description="A simple extension that makes learning Chinese characters easier."
  //   image="/images/works/pocket-hanzi-dictionary-icon.webp"
  //   link="https://github.com/pdt1806/pocket-hanzi-dictionary/releases/"
  //   source="https://github.com/pdt1806/pocket-hanzi-dictionary"
  // ></WorksBox>,
  // <WorksBox
  //   title="Legacy personal website"
  //   description="Legacy personal website written in pure HTML5, CSS, and JavaScript."
  //   image="/images/works/legacy-personal-website.webp"
  //   link="https://legacy.bennynguyen.dev"
  //   source="https://github.com/BNMP-Inc/legacy-personal-website"
  // ></WorksBox>,
];

const WorksContainer = () => {
  const [index, setIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isMobile ? (
    <div
      className="works-container d-flex justify-content-between align-items-center w-100 h-50"
      style={{ zIndex: "2", userSelect: "none" }}
    >
      <div
        style={{ height: "100%", width: "150px" }}
        className="d-flex justify-content-center align-items-center"
        onClick={() =>
          setIndex((index - 1 + projects.length) % projects.length)
        }
      >
        <img
          src="/images/components/arrow-back.svg"
          alt="Back"
          style={{
            height: "50px",
            width: "50px",
            filter: "invert(1)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="d-flex justify-content-evenly align-items-center w-75 h-100"
            id="worksbox"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: i === index ? 1 : 0,
              visibility: i === index ? "visible" : "hidden",
              pointerEvents: i === index ? "auto" : "none",
              transition: "opacity 0.3s ease-in",
            }}
          >
            {project}
          </div>
        );
      })}
      <div
        style={{ height: "100%", width: "150px" }}
        className="d-flex justify-content-center align-items-center"
        onClick={() => setIndex((index + 1) % projects.length)}
      >
        <img
          src="/images/components/arrow-forward.svg"
          alt="Next"
          style={{
            height: "50px",
            width: "50px",
            filter: "invert(1)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  ) : (
    <div>
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="d-flex justify-content-center align-items-center w-100 h-100"
            id="worksbox"
            data-aos="zoom-in"
          >
            {project}
          </div>
        );
      })}
    </div>
  );
};

export default WorksContainer;
