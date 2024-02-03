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
  return (
    <div className="technologies-box">
      <div style={{ transform: !isMobile ? "translate(8vh)" : "" }}>
        <TechnologiesBox title="Front-end Development">
          <img
            loading="lazy"
            src="/icon/tech/react.svg"
            className="tech-icon"
            alt="React"
            title="React"
          />
          <img
            loading="lazy"
            src="/icon/tech/preact.svg"
            className="tech-icon"
            alt="Preact"
            title="Preact"
          />
          <img
            loading="lazy"
            src="/icon/tech/vite.svg"
            className="tech-icon"
            alt="Vite"
            title="Vite"
          />
          <img
            loading="lazy"
            src="/icon/tech/mantine.svg"
            className="tech-icon"
            alt="Mantine"
            title="Mantine"
          />
          <img
            loading="lazy"
            src="/icon/tech/bootstrap.svg"
            className="tech-icon"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <img
            loading="lazy"
            src="/icon/tech/flutter.svg"
            className="tech-icon"
            alt="Flutter"
            title="Flutter"
          />
          <img
            loading="lazy"
            src="/icon/tech/javascript.svg"
            className="tech-icon"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            loading="lazy"
            src="/icon/tech/typescript.svg"
            className="tech-icon"
            alt="TypeScript"
            title="TypeScript"
          />

          <img
            loading="lazy"
            src="/icon/tech/dart.svg"
            className="tech-icon"
            alt="Dart"
            title="Dart"
          />
          <img
            loading="lazy"
            src="/icon/tech/html5.svg"
            className="tech-icon"
            alt="HTML5"
            title="HTML5"
          />
          <img
            loading="lazy"
            src="/icon/tech/css3.svg"
            className="tech-icon"
            alt="CSS3"
            title="CSS3"
          />
        </TechnologiesBox>
      </div>
      <TechnologiesBox title="Back-end Development">
        <img
          loading="lazy"
          src="/icon/tech/nodejs.svg"
          className="tech-icon"
          alt="Node.js"
          title="Node.js"
        />
        <img
          loading="lazy"
          src="/icon/tech/npm.svg"
          className="tech-icon"
          alt="npm"
          title="npm"
        />
        <img
          loading="lazy"
          src="/icon/tech/bun.svg"
          className="tech-icon"
          alt="bun"
          title="bun"
        />
        <img
          loading="lazy"
          src="/icon/tech/python.svg"
          className="tech-icon"
          alt="Python"
          title="Python"
        />
        <img
          loading="lazy"
          src="/icon/tech/java.svg"
          className="tech-icon"
          alt="Java"
          title="Java"
        />
      </TechnologiesBox>
      <TechnologiesBox title="Tools, Libraries and Frameworks">
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/tech/express-js.svg"
          className="tech-icon"
          alt="Express.js"
          title="Express.js"
        />
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/tech/flask.svg"
          className="tech-icon"
          alt="Flask"
          title="Flask"
        />
        <img
          loading="lazy"
          src="/icon/tech/fastapi.svg"
          className="tech-icon"
          alt="FastAPI"
          title="FastAPI"
        />
        <img
          loading="lazy"
          src="/icon/tech/axios.svg"
          className="tech-icon"
          alt="Axios"
          title="Axios"
        />
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/tech/socket-io.svg"
          className="tech-icon"
          alt="Socket.IO"
          title="Socket.IO"
        />
        <img
          loading="lazy"
          src="/icon/tech/puppeteer.svg"
          className="tech-icon"
          alt="Puppeteer"
          title="Puppeteer"
        />
        <img
          loading="lazy"
          src="/icon/tech/postman.svg"
          className="tech-icon"
          alt="Postman"
          title="Postman"
        />
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/tech/gradle.svg"
          className="tech-icon"
          alt="Gradle"
          title="Gradle"
        />
        <img
          loading="lazy"
          src="/icon/tech/phaser.svg"
          className="tech-icon"
          alt="Phaser"
          title="Phaser"
        />
      </TechnologiesBox>
      <div style={{ transform: !isMobile ? "translate(8vh)" : "" }}>
        <TechnologiesBox title="Web Servers, Databases and Others">
          <img
            loading="lazy"
            src="/icon/tech/raspberry-pi.svg"
            className="tech-icon"
            alt="Raspberry Pi"
            title="Raspberry Pi"
          />
          <img
            loading="lazy"
            src="/icon/tech/nginx.svg"
            className="tech-icon"
            alt="NGINX"
            title="NGINX"
          />
          <img
            loading="lazy"
            style={{ filter: "invert(1)" }}
            src="/icon/tech/pocketbase.svg"
            className="tech-icon"
            alt="PocketBase"
            title="PocketBase"
          />
          <img
            loading="lazy"
            src="/icon/tech/cloudflare.svg"
            className="tech-icon"
            alt="Cloudflare"
            title="Cloudflare"
          />
          {/* <img loading="lazy"
            src="/icon/tech/arduino.svg"
            className="tech-icon"
            alt="Arduino"
            title="Arduino"
          /> */}
          {/* <img loading="lazy"
              src="/icon/tech/docker.svg"
              className="tech-icon"
              alt="Docker"
              title="Docker"
            />
            <img loading="lazy"
              src="/icon/tech/jenkins.svg"
              className="tech-icon"
              alt="Jenkins"
              title="Jenkins"
            /> */}
          {/* <img loading="lazy"
            src="/icon/tech/heroku.svg"
            className="tech-icon"
            alt="Heroku"
            title="Heroku"
          />
          <img loading="lazy"
            src="/icon/tech/netlify.svg"
            className="tech-icon"
            alt="Netlify"
            title="Netlify"
          /> */}
          {/* <img loading="lazy"
            src="/icon/tech/vscode.svg"
            className="tech-icon"
            alt="Visual Studio Code"
            title="Visual Studio Code"
          /> */}
          <img
            loading="lazy"
            src="/icon/tech/photoshop.svg"
            className="tech-icon"
            alt="Adobe Photoshop"
            title="Adobe Photoshop"
          />
          <img
            loading="lazy"
            src="/icon/tech/illustrator.svg"
            className="tech-icon"
            alt="Adobe Illustrator"
            title="Adobe Illustrator"
          />
          <img
            loading="lazy"
            src="/icon/tech/figma.svg"
            className="tech-icon"
            alt="Figma"
            title="Figma"
          />
        </TechnologiesBox>
      </div>
    </div>
  );
}
