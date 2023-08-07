import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import AboutMeText from "./components/Box/AboutMeText";

export default function AboutMe() {
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
      <h1
        className="section-title mt-5"
        style={{
          position: isMobile ? "static" : "absolute",
          left: isMobile ? "0" : "50%",
          transform: isMobile ? "0" : "translateX(-50%)",
          marginBottom: isMobile ? "30px" : "0",
        }}
      >
        More about me
      </h1>
      <div className="vstack d-flex align-items-center justify-content-center h-100">
        <div className="d-flex">
          {!isMobile && (
            <>
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
            </>
          )}
        </div>
        <AboutMeInfo isMobile={isMobile} />
      </div>
    </>
  );
}

export function AboutMeInfo({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className="d-flex justify-content-around align-items-center w-100 h-100"
      style={{
        position: isMobile ? "static" : "absolute",
        flexDirection: isMobile ? "column" : "row",
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
