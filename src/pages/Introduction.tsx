import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import Connections from "./components/Box/Connections";
import { LightBlueBox } from "./components/Box/LightBlueBox";

export default function Introduction() {
  return (
    <>
      <div
        id="introduction"
        className="vstack gap-3 d-flex justify-content-center"
      >
        <LightBlueBox position="left" />
        <IntroductionInfo />
      </div>
    </>
  );
}

export function IntroductionInfo() {
  return (
    <>
      <img
        src="/images/me.jpg"
        alt="Me"
        className="img-fluid introduction-img"
        style={{ width: "450px" }}
      />
      <div className="introduction-info">
        <div>
          <h2 className="this-is">This is</h2>
          <h1 className="mb-5 highlight title" data-aos-duration="1000">
            Benny Nguyen
          </h1>
          <div>
            <p>
              A <span style={{ fontWeight: "bold" }}>Front-end developer</span>{" "}
              with a significant amount of knowledge of different tools and
              frameworks.
            </p>
          </div>
        </div>
        <div style={{ transform: "translate(-1vw)" }}>
          <Connections />
        </div>
      </div>
    </>
  );
}
