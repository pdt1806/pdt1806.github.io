import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import Connections from "./components/Connections";
import { LightBlueBox } from "./components/LightBlueBox";

export default function Introduction() {
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

  return (
    <>
      <div
        id="introduction"
        className="vstack gap-3 d-flex justify-content-center"
      >
        {isMobile ? null : <LightBlueBox position="left" />}
        <IntroductionInfo isMobile={isMobile} />
      </div>
    </>
  );
}

export function IntroductionInfo({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <div className="introduction-info" style={{ zIndex: 2 }}>
        <div>
          <h2 className="this-is">This is</h2>
          <h1 className="highlight title" data-aos-duration="1000">
            Benny Nguyen
          </h1>
          <div>
            <p>
              A <span style={{ fontWeight: "bold" }}>Front-end developer</span>{" "}
              who enjoys and wants to know more about programming.
            </p>
          </div>
        </div>
        <div
          style={{
            transform: "translate(-1vw)",
            display: isMobile ? "flex" : "static",
            justifyContent: isMobile ? "center" : "",
          }}
        >
          <Connections />
        </div>
      </div>
      <img
        src="/images/me.webp"
        alt="Me"
        className="img-fluid introduction-img"
      />
    </>
  );
}
