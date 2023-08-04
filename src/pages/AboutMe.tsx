import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import AboutMeText from "./components/Box/AboutMeText";

export default function AboutMe() {
  return (
    <>
      <h1
        className="section-title mt-5"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        More about me
      </h1>
      <div className="vstack d-flex align-items-center justify-content-center h-100">
        <div className="d-flex">
          <img
            src="/images/components/aboutme-bg-1.jpg"
            className="aboutme-img"
          />
          <img
            src="/images/components/aboutme-bg-2.jpg"
            className="aboutme-img"
          />
          <img
            src="/images/components/aboutme-bg-3.jpg"
            className="aboutme-img"
          />
        </div>
        <AboutMeInfo />
      </div>
    </>
  );
}

export function AboutMeInfo() {
  return (
    <div
      className="d-flex justify-content-around align-items-center w-100 h-100"
      style={{
        position: "absolute",
      }}
    >
      <AboutMeText>
        Was born and raised in{" "}
        <span style={{ fontWeight: "bold" }}>Vietnam</span> until the age of{" "}
        <span style={{ fontWeight: "bold" }}>14</span>, I’ve been through many
        obstacles to become who I am.
      </AboutMeText>
      <AboutMeText>
        Living in{" "}
        <span style={{ fontWeight: "bold" }}>2 different countries</span>,{" "}
        <span style={{ fontWeight: "bold" }}>2 different cultures</span> has
        made my perspective on this world{" "}
        <span style={{ fontWeight: "bold" }}>unique</span>.
      </AboutMeText>
      <AboutMeText>
        Talking about my hobbies, I love{" "}
        <span style={{ fontWeight: "bold" }}>programming</span>, that it
        obvious. I also enjoy{" "}
        <span style={{ fontWeight: "bold" }}>watching anime</span> and{" "}
        <span style={{ fontWeight: "bold" }}>listening to Japanese music</span>.
      </AboutMeText>
    </div>
  );
}
