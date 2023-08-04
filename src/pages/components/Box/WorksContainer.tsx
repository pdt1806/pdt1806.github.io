import WorksBox from "./WorksBox";

const WorksContainer = () => {
  return (
    <div
      className="works-container d-flex justify-content-around align-items-center"
      style={{ zIndex: "2" }}
    >
      <img
        src="/images/components/arrow-back.svg"
        alt="Arrow Back"
        style={{ height: "50px", width: "50px", filter: "invert(1)" }}
      />
      <WorksBox
        title="Legacy personal website"
        description="Legacy personal website written in pure HTML5, CSS, and JavaScript."
        image="/images/works/legacy-personal-website.png"
        link="http://legacy.bennynguyen.us"
        source="https://github.com/BNMP-Inc/legacy-personal-website"
        erg={false}
      ></WorksBox>
      <img
        src="/images/components/arrow-forward.svg"
        alt="Arrow Forward"
        style={{ height: "50px", width: "50px", filter: "invert(1)" }}
      />
    </div>
  );
};

export default WorksContainer;

{
  /* <WorksBox
            title="Legacy personal website"
            description="Legacy personal website written in pure HTML5, CSS, and JavaScript."
            image="/images/works/legacy-personal-website.png"
            link="http://legacy.bennynguyen.us"
            source="https://github.com/BNMP-Inc/legacy-personal-website"
            erg={false}
          ></WorksBox>
          <WorksBox
            title="AutoDisconnect"
            description="A simple Minecraft mod that automatically disconnects players when they are in low health."
            image="/images/works/autodisconnect-logo.png"
            link="https://github.com/pdt1806/AutoDisconnect/releases/tag/v1.0.2"
            source="https://github.com/pdt1806/AutoDisconnect"
            erg={false}
          ></WorksBox>
          <WorksBox
            title="Rock Paper Scissors"
            description="A Rock Paper Scissors game created using Phaser, a JavaScript framework."
            image="/images/works/ropas-title.png"
            link=""
            source="https://github.com/pdt1806/erg-rock-paper-scissors"
            erg={true}
          ></WorksBox>
          <WorksBox
            title="Wordle"
            description="A remake of the popular game Wordle using pure HTML5, CSS and JavaScript."
            image="/images/works/wordle-icon.png"
            link="/erg-wordle"
            source="https://github.com/pdt1806/erg-wordle"
            erg={true}
          ></WorksBox>
          <WorksBox
            title="Pocket Hanzi Dictionary"
            description="A simple extension that makes learning Chinese characters easier."
            image="/images/works/pocket-hanzi-dictionary-icon.png"
            link=""
            source="https://github.com/pdt1806/pocket-hanzi-dictionary"
            erg={false}
          ></WorksBox> */
}
