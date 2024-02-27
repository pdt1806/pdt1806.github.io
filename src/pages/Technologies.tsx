import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useRef, useState } from "react";

import TechnologiesBox from "./components/TechnologiesBox";

export default function Technologies() {
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
          "--bg-height-tech",
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
    <div>
      <div
        className="vstack gap-3 d-flex justify-content-center"
        style={{
          height: !isMobile ? "100vh" : "",
          width: isMobile ? "100%" : "",
          flexDirection: isMobile ? "column" : "row",
        }}
        ref={outerDivRef}
      >
        <img
          loading="lazy"
          src="/images/components/technologies-bg-1.webp"
          className="background-component"
          style={{
            left: 0,
            height: isMobile ? "var(--bg-height-tech)" : "",
            width: isMobile ? "100vw" : "",
            maxWidth: isMobile ? "480px" : "none",
          }}
          alt="technologies-bg-1"
        />
        {!isMobile && (
          <img
            loading="lazy"
            src="/images/components/technologies-bg-2.webp"
            className="background-component"
            style={{ right: 0 }}
            alt="technologies-bg-2"
          />
        )}
        <h1
          className={`section-title ${isMobile ? "pt-5" : ""}`}
          style={{
            marginLeft: !isMobile ? "5rem" : "auto",
            marginRight: "auto",
            marginBottom: isMobile ? "3rem" : "auto",
            marginTop: isMobile ? "3rem" : "auto",
          }}
        >
          Technologies
        </h1>
        <TechnologiesInfo isMobile={isMobile} />
      </div>
    </div>
  );
}

export function TechnologiesInfo({ isMobile }: { isMobile?: boolean }) {
  const feTechs = [
    {
      src: "",
      title: "React",
    },
    {
      src: "",
      title: "Preact",
    },
    {
      src: "",
      title: "Vite",
    },
    {
      src: "",
      title: "Mantine",
    },
    {
      src: "",
      title: "JavaScript",
    },
    {
      src: "",
      title: "TypeScript",
    },
  ];

  const beTechs = [
    {
      src: "nodejs",
      title: "Node.js",
    },
    {
      src: "",
      title: "npm",
    },
    {
      src: "",
      title: "Bun",
    },
    {
      src: "",
      title: "Python",
    },
  ];

  const webTechs = [
    {
      src: "raspberry-pi",
      title: "Raspberry Pi",
      inverted: false,
    },
    {
      src: "",
      title: "NGINX",
      inverted: false,
    },
    {
      src: "",
      title: "PocketBase",
      inverted: true,
    },
    {
      src: "",
      title: "Cloudflare",
      inverted: false,
    },
  ];

  const designTechs = [
    {
      src: "powerpoint",
      title: "Microsoft PowerPoint",
      inverted: false,
    },
    {
      src: "photoshop",
      title: "Adobe Photoshop",
      inverted: false,
    },
    {
      src: "illustrator",
      title: "Adobe Illustrator",
      inverted: false,
    },
    {
      src: "",
      title: "Figma",
      inverted: false,
    },
  ];

  return (
    <div className="technologies-box">
      <div style={{ transform: !isMobile ? "translate(8vh)" : "" }}>
        <TechnologiesBox title="Front-end Development">
          {feTechs.map((tech) => (
            <img
              loading="lazy"
              src={`/icon/tech/${tech.src || tech.title.toLowerCase()}.svg`}
              className="tech-icon"
              alt={tech.title}
              title={tech.title}
            />
          ))}
        </TechnologiesBox>
      </div>
      <TechnologiesBox title="Back-end Development">
        {beTechs.map((tech) => (
          <img
            loading="lazy"
            src={`/icon/tech/${tech.src || tech.title.toLowerCase()}.svg`}
            className="tech-icon"
            alt={tech.title}
            title={tech.title}
          />
        ))}
      </TechnologiesBox>
      <TechnologiesBox title="Web Servers and Network">
        {webTechs.map((tech) => (
          <img
            loading="lazy"
            src={`/icon/tech/${tech.src || tech.title.toLowerCase()}.svg`}
            className="tech-icon"
            alt={tech.title}
            title={tech.title}
            style={{ filter: tech.inverted ? "invert(1)" : "" }}
          />
        ))}
      </TechnologiesBox>
      <div style={{ transform: !isMobile ? "translate(8vh)" : "" }}>
        <TechnologiesBox title="Design and Creativity">
          {designTechs.map((tech) => (
            <img
              loading="lazy"
              src={`/icon/tech/${tech.src || tech.title.toLowerCase()}.svg`}
              className="tech-icon"
              style={{ filter: tech.inverted ? "invert(1)" : "" }}
              alt={tech.title}
              title={tech.title}
            />
          ))}
        </TechnologiesBox>
      </div>
    </div>
  );
}
