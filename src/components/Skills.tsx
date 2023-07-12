import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "./Box";
import MainPageComponent from "./MainPageComponent";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function TechStack() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <MainPageComponent title="Skills">
      <div data-aos="fade-down" className="d-flex justify-content-between w-75">
        <Box title="Languages">
          <div className="tech-icons-container">
            <img
              src="/icon/tech/python.svg"
              className="tech-icon"
              alt="Python"
            />
            <img src="/icon/tech/dart.svg" className="tech-icon" alt="Dart" />
            <img src="/icon/tech/html5.svg" className="tech-icon" alt="HTML5" />
            <img src="/icon/tech/css3.svg" className="tech-icon" alt="CSS3" />
            <img
              src="/icon/tech/javascript.svg"
              className="tech-icon"
              alt="JavaScript"
            />
            <img
              src="/icon/tech/typescript.svg"
              className="tech-icon"
              alt="TypeScript"
            />
            <img src="/icon/tech/java.svg" className="tech-icon" alt="Java" />
          </div>
        </Box>
        <Box title="Frameworks">
          <img
            src="/icon/tech/flutter.svg"
            className="tech-icon"
            alt="Flutter"
          />
          <img
            src="/icon/tech/bootstrap.svg"
            className="tech-icon"
            alt="Bootstrap"
          />
        </Box>
        <Box title="Libraries">
          <img src="/icon/tech/react.svg" className="tech-icon" alt="React" />
        </Box>
        <Box title="Databases and Other">
          <img
            src="/icon/tech/pocketbase.svg"
            className="tech-icon"
            alt="Pocketbase"
          />
          <img src="/icon/tech/vite.svg" className="tech-icon" alt="Vite" />
          <img
            src="/icon/tech/nodejs.svg"
            className="tech-icon"
            alt="Node.js"
          />
          <img src="/icon/tech/gradle.svg" className="tech-icon" alt="Gradle" />
          <img src="/icon/tech/docker.svg" className="tech-icon" alt="Docker" />
          <img
            src="/icon/tech/jenkins.svg"
            className="tech-icon"
            alt="Jenkins"
          />
          <img
            src="/icon/tech/vscode.svg"
            className="tech-icon"
            alt="Visual Studio Code"
          />
          <img
            src="/icon/tech/photoshop.svg"
            className="tech-icon"
            alt="Adobe Photoshop"
          />
          <img src="/icon/tech/figma.svg" className="tech-icon" alt="Figma" />
        </Box>
      </div>
    </MainPageComponent>
  );
}
