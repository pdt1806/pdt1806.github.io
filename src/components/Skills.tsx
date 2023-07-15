import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import Box from "./Box/Box";
import MainPageComponent from "./MainPageComponent";

export default function Skills() {
  return (
    <MainPageComponent title="Skills">
      <div
        data-aos="fade-left"
        className="d-flex justify-content-between align-items-center w-75"
      >
        <Box title="Languages">
          <div className="tech-icons-container">
            <img
              src="/icon/tech/python.svg"
              className="tech-icon"
              alt="Python"
              title="Python"
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
              src="/icon/tech/java.svg"
              className="tech-icon"
              alt="Java"
              title="Java"
            />
          </div>
        </Box>
        <Box title="Frameworks">
          <img
            src="/icon/tech/flutter.svg"
            className="tech-icon"
            alt="Flutter"
            title="Flutter"
          />
          <img
            src="/icon/tech/bootstrap.svg"
            className="tech-icon"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <img
            src="/icon/tech/phaser.svg"
            className="tech-icon"
            alt="Phaser"
            title="Phaser"
          />
        </Box>
        <Box title="Libraries">
          <img
            src="/icon/tech/react.svg"
            className="tech-icon"
            alt="React"
            title="React"
          />
        </Box>
        <Box title="Databases and Other">
          <img
            src="/icon/tech/pocketbase.svg"
            className="tech-icon"
            alt="PocketBase"
            title="PocketBase"
          />
          <img
            src="/icon/tech/vite.svg"
            className="tech-icon"
            alt="Vite"
            title="Vite"
          />
          <img
            src="/icon/tech/nodejs.svg"
            className="tech-icon"
            alt="Node.js"
            title="Node.js"
          />
          <img
            src="/icon/tech/gradle.svg"
            className="tech-icon"
            alt="Gradle"
            title="Gradle"
          />
          <img
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
          />
          <img
            src="/icon/tech/vscode.svg"
            className="tech-icon"
            alt="Visual Studio Code"
            title="Visual Studio Code"
          />
          <img
            src="/icon/tech/photoshop.svg"
            className="tech-icon"
            alt="Adobe Photoshop"
            title="Adobe Photoshop"
          />
          <img
            src="/icon/tech/figma.svg"
            className="tech-icon"
            alt="Figma"
            title="Figma"
          />
        </Box>
      </div>
      <hr className="w-75 mx-auto" />
    </MainPageComponent>
  );
}
