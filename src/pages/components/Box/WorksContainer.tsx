import { useState } from "react";
import WorksBox from "./WorksBox";

const projects = [
  <WorksBox
    title="Legacy personal website"
    description="Legacy personal website written in pure HTML5, CSS, and JavaScript."
    image="/images/works/legacy-personal-website.png"
    link="http://legacy.bennynguyen.us"
    source="https://github.com/BNMP-Inc/legacy-personal-website"
    erg={false}
  ></WorksBox>,
  <WorksBox
    title="AutoDisconnect"
    description="A simple Minecraft mod that automatically disconnects players when they are in low health."
    image="/images/works/autodisconnect-logo.png"
    link="https://github.com/pdt1806/AutoDisconnect/releases/tag/v1.0.2"
    source="https://github.com/pdt1806/AutoDisconnect"
    erg={false}
  ></WorksBox>,
  <WorksBox
    title="Rock Paper Scissors"
    description="A Rock Paper Scissors game created using Phaser, a JavaScript framework."
    image="/images/works/ropas-title.png"
    link="http://ropas.bennynguyen.us"
    source="https://github.com/pdt1806/erg-rock-paper-scissors"
    erg={true}
  ></WorksBox>,
  <WorksBox
    title="Wordle"
    description="A remake of the popular game Wordle using pure HTML5, CSS and JavaScript."
    image="/images/works/wordle-icon.png"
    link="/erg-wordle"
    source="https://github.com/pdt1806/erg-wordle"
    erg={true}
  ></WorksBox>,
  // <WorksBox
  //   title="Pocket Hanzi Dictionary"
  //   description="A simple extension that makes learning Chinese characters easier."
  //   image="/images/works/pocket-hanzi-dictionary-icon.png"
  //   link=""
  //   source="https://github.com/pdt1806/pocket-hanzi-dictionary"
  //   erg={false}
  // ></WorksBox>,
];

const WorksContainer = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="works-container d-flex justify-content-between align-items-center w-100 h-50"
      style={{ zIndex: "2" }}
    >
      <img
        src="/images/components/arrow-back.svg"
        alt="Arrow Back"
        className="ms-5"
        style={{ height: "50px", width: "50px", filter: "invert(1)" }}
        onClick={() =>
          setIndex((index - 1 + projects.length) % projects.length)
        }
      />
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="d-flex justify-content-center align-items-center w-75 h-100"
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
      <img
        src="/images/components/arrow-forward.svg"
        alt="Arrow Forward"
        className="me-5"
        style={{ height: "50px", width: "50px", filter: "invert(1)" }}
        onClick={() => setIndex((index + 1) % projects.length)}
      />
    </div>
  );
};

export default WorksContainer;
