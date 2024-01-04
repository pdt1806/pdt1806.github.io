import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import TechnologiesBox from "./components/TechnologiesBox";

export default function Technologies() {
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
    <div>
      <div
        className="vstack gap-3 d-flex justify-content-center"
        style={{
          height: !isMobile ? "100vh" : "",
          width: isMobile ? "100%" : "",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {!isMobile && (
          <>
            <img
              src="/images/components/technologies-bg-1.webp"
              className="background-component"
              style={{ left: 0 }}
              alt="technologies-bg-1"
            />
            <img
              src="/images/components/technologies-bg-2.webp"
              className="background-component"
              style={{ right: 0 }}
              alt="technologies-bg-2"
            />
          </>
        )}
        <h1
          className="section-title"
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
            src="/icon/tech/react.svg"
            className="tech-icon"
            alt="React"
            title="React"
          />
          <img
            src="/icon/tech/vite.svg"
            className="tech-icon"
            alt="Vite"
            title="Vite"
          />
          <img
            src="/icon/tech/mantine.svg"
            className="tech-icon"
            alt="Mantine"
            title="Mantine"
          />
          <img
            src="/icon/tech/bootstrap.svg"
            className="tech-icon"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <img
            src="/icon/tech/flutter.svg"
            className="tech-icon"
            alt="Flutter"
            title="Flutter"
          />
          <img
            src="/icon/tech/javascript.svg"
            className="tech-icon"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            src="/icon/tech/typescript.svg"
            className="tech-icon"
            alt="TypeScript"
            title="TypeScript"
          />

          <img
            src="/icon/tech/dart.svg"
            className="tech-icon"
            alt="Dart"
            title="Dart"
          />
          <img
            src="/icon/tech/html5.svg"
            className="tech-icon"
            alt="HTML5"
            title="HTML5"
          />
          <img
            src="/icon/tech/css3.svg"
            className="tech-icon"
            alt="CSS3"
            title="CSS3"
          />
        </TechnologiesBox>
      </div>
      <TechnologiesBox title="Back-end Development">
        <img
          src="/icon/tech/nodejs.svg"
          className="tech-icon"
          alt="Node.js"
          title="Node.js"
        />
        <img
          src="/icon/tech/npm.svg"
          className="tech-icon"
          alt="npm"
          title="npm"
        />
        <img
          src="/icon/tech/bun.svg"
          className="tech-icon"
          alt="bun"
          title="bun"
        />
        <img
          src="/icon/tech/python.svg"
          className="tech-icon"
          alt="Python"
          title="Python"
        />
        <img
          src="/icon/tech/java.svg"
          className="tech-icon"
          alt="Java"
          title="Java"
        />
      </TechnologiesBox>
      <TechnologiesBox title="Tools, Libraries and Frameworks">
        <img
          style={{ filter: "invert(1)" }}
          src="/icon/tech/express-js.svg"
          className="tech-icon"
          alt="Express.js"
          title="Express.js"
        />
        <img
          style={{ filter: "invert(1)" }}
          src="/icon/tech/flask.svg"
          className="tech-icon"
          alt="Flask"
          title="Flask"
        />
        <img
          src="/icon/tech/fastapi.svg"
          className="tech-icon"
          alt="FastAPI"
          title="FastAPI"
        />
        <img
          src="/icon/tech/axios.svg"
          className="tech-icon"
          alt="Axios"
          title="Axios"
        />
        <img
          style={{ filter: "invert(1)" }}
          src="/icon/tech/socket-io.svg"
          className="tech-icon"
          alt="Socket.IO"
          title="Socket.IO"
        />
        <img
          src="/icon/tech/puppeteer.svg"
          className="tech-icon"
          alt="Puppeteer"
          title="Puppeteer"
        />
        <img
          src="/icon/tech/postman.svg"
          className="tech-icon"
          alt="Postman"
          title="Postman"
        />
        <img
          style={{ filter: "invert(1)" }}
          src="/icon/tech/gradle.svg"
          className="tech-icon"
          alt="Gradle"
          title="Gradle"
        />
        <img
          src="/icon/tech/phaser.svg"
          className="tech-icon"
          alt="Phaser"
          title="Phaser"
        />
      </TechnologiesBox>
      <div style={{ transform: !isMobile ? "translate(8vh)" : "" }}>
        <TechnologiesBox title="Web Servers, Databases and Others">
          <img
            src="/icon/tech/raspberry-pi.svg"
            className="tech-icon"
            alt="Raspberry Pi"
            title="Raspberry Pi"
          />
          <img
            src="/icon/tech/nginx.svg"
            className="tech-icon"
            alt="NGINX"
            title="NGINX"
          />
          <img
            style={{ filter: "invert(1)" }}
            src="/icon/tech/pocketbase.svg"
            className="tech-icon"
            alt="PocketBase"
            title="PocketBase"
          />
          <img
            src="/icon/tech/cloudflare.svg"
            className="tech-icon"
            alt="Cloudflare"
            title="Cloudflare"
          />
          {/* <img
            src="/icon/tech/arduino.svg"
            className="tech-icon"
            alt="Arduino"
            title="Arduino"
          /> */}
          {/* <img
              src="/icon/tech/docker.svg"
              className="tech-icon"
              alt="Docker"
              title="Docker"
            />
            <img
              src="/icon/tech/jenkins.svg"
              className="tech-icon"
              alt="Jenkins"
              title="Jenkins"
            /> */}
          {/* <img
            src="/icon/tech/heroku.svg"
            className="tech-icon"
            alt="Heroku"
            title="Heroku"
          />
          <img
            src="/icon/tech/netlify.svg"
            className="tech-icon"
            alt="Netlify"
            title="Netlify"
          /> */}
          {/* <img
            src="/icon/tech/vscode.svg"
            className="tech-icon"
            alt="Visual Studio Code"
            title="Visual Studio Code"
          /> */}
          <img
            src="/icon/tech/photoshop.svg"
            className="tech-icon"
            alt="Adobe Photoshop"
            title="Adobe Photoshop"
          />
          <img
            src="/icon/tech/illustrator.svg"
            className="tech-icon"
            alt="Adobe Illustrator"
            title="Adobe Illustrator"
          />
          <img
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
