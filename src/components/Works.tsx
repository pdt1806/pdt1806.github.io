import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import WorksBox from "./Box/WorksBox";
import MainPageComponent from "./MainPageComponent";

export default function Works() {
  return (
    <MainPageComponent title="Works">
      <div
        className="d-flex flex-wrap justify-content-center align-items-center"
        id="works"
      >
        <WorksBox
          title="Legacy personal website"
          description="Legacy personal website written in pure HTML5, CSS, and JavaScript."
          image="/images/works/legacy-personal-website.png"
          link="http://legacy.bennynguyen.us"
          source="https://github.com/pdt1806/pdt1806.github.io"
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
          description="A remake of the famous game Wordle using pure HTML5, CSS and JavaScript."
          image="/images/works/wordle-icon.png"
          link="/erg-wordle"
          source="https://github.com/pdt1806/erg-wordle"
          erg={true}
        ></WorksBox>
      </div>
      <hr className="w-75 mx-auto" />
    </MainPageComponent>
  );
}
