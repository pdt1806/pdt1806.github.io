import "aos/dist/aos.css";

import "./index.css";

import { useEffect, useState } from "react";

import AboutMeText from "../../components/AboutMeText";

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
    <div id="aboutme">
      <h1
        className="section-title"
        style={{
          paddingTop: "5vh",
          position: !isMobile ? "absolute" : "static",
          left: !isMobile ? "50%" : "auto",
          right: !isMobile ? "" : "auto",
          marginBottom: !isMobile ? "0" : "3rem",
          transform: !isMobile ? "translateX(-50%)" : "none",
        }}
      >
        More about me
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {!isMobile && (
            <>
              <img
                loading="lazy"
                src="/images/components/aboutme-bg-1.webp"
                className="aboutme-img"
                alt="aboutme-bg-1"
              />
              <img
                loading="lazy"
                src="/images/components/aboutme-bg-2.webp"
                className="aboutme-img"
                alt="aboutme-bg-2"
              />
              <img
                loading="lazy"
                src="/images/components/aboutme-bg-3.webp"
                className="aboutme-img"
                alt="aboutme-bg-3"
              />
            </>
          )}
        </div>
        <AboutMeInfo isMobile={isMobile} />
      </div>
    </div>
  );
}

export function AboutMeInfo({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: isMobile ? "static" : "absolute",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <AboutMeText>
        Was born and raised in{" "}
        <span style={{ fontWeight: "bold" }}>Vietnam</span> until the age of{" "}
        <span style={{ fontWeight: "bold" }}>14</span>, I’ve overcome numerous
        obstacles to become who I am today.
      </AboutMeText>
      <AboutMeText>
        Living in{" "}
        <span style={{ fontWeight: "bold" }}>2 different countries</span> with{" "}
        <span style={{ fontWeight: "bold" }}>2 distinct cultures</span> has made
        my perspective on this world{" "}
        <span style={{ fontWeight: "bold" }}>unique</span>.
      </AboutMeText>
      <AboutMeText>
        Talking about my hobbies, it is clear that{" "}
        <span style={{ fontWeight: "bold" }}>I really enjoy programming.</span>{" "}
        I also like <span style={{ fontWeight: "bold" }}>watching anime</span>{" "}
        and{" "}
        <span style={{ fontWeight: "bold" }}>listening to Japanese music</span>.
      </AboutMeText>
    </div>
  );
}
