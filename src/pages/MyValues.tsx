import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useRef, useState } from "react";

import ValueCard from "./components/ValueCard";

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
      className="vstack gap-3 d-flex h-100"
      style={{
        justifyContent: isMobile ? "" : "center",
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
        className={`section-title ${isMobile ? "pt-5" : ""}`}
        style={{
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
        className="d-flex flex-column"
        style={{ alignItems: isMobile ? "center" : "" }}
      >
        <div className="d-flex">
          <ValueCard
            title="Determination"
            img="images/components/value-1.webp"
          />
          <ValueCard title="Thoughtful" img="images/components/value-2.webp" />
        </div>
        <div className="d-flex">
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
