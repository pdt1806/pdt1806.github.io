import "aos/dist/aos.css";

import { useEffect, useRef, useState } from "react";

import ValueCard from "../../components/ValueCard";

export default function MyValues() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  const outerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    const updateBackgroundHeight = () => {
      if (outerDivRef.current) {
        const height = outerDivRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--bg-height-values",
          `${height}px`
        );
      }
    };

    window.addEventListener("resize", () => {
      handleResize();
      updateBackgroundHeight();
    });

    updateBackgroundHeight();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="my-values"
      style={{
        justifyContent: isMobile ? "" : "center",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        height: "100%",
      }}
      ref={outerDivRef}
    >
      <img
        loading="lazy"
        src="/images/components/my-values-bg.webp"
        className="background-component"
        alt="my-values-bg"
        style={{
          right: 0,
          height: isMobile ? "var(--bg-height-values)" : "",
          width: isMobile ? "100vw" : "",
          maxWidth: isMobile ? "620px" : "",
        }}
      />
      <h1
        className="section-title"
        style={{
          paddingTop: isMobile ? "5vh" : "",
          position: !isMobile ? "absolute" : "static",
          right: !isMobile ? "0" : "",
          marginRight: !isMobile ? "5rem" : "auto",
          marginLeft: "auto",
          marginBottom: isMobile ? "3rem" : "auto",
          marginTop: isMobile ? "3rem" : "auto",
        }}
      >
        My Values
      </h1>
      <div
        style={{
          alignItems: isMobile ? "center" : "",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <ValueCard
            title="Determination"
            img="images/components/value-1.webp"
          />
          <ValueCard title="Thoughtful" img="images/components/value-2.webp" />
        </div>
        <div style={{ display: "flex" }}>
          <ValueCard
            title="Collaborative"
            img="images/components/value-3.webp"
          />
          <ValueCard title="Discipline" img="images/components/value-4.webp" />
        </div>
      </div>
    </div>
  );
}
