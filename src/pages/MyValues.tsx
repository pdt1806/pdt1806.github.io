import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import ValueCard from "./components/Box/ValueCard";

export default function MyValues() {
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
    <div
      className="vstack gap-3 d-flex h-100"
      style={{ justifyContent: isMobile ? "" : "center" }}
    >
      {!isMobile && (
        <img
          src="/images/components/my-values-bg.png"
          className="background-component"
          style={{ right: 0 }}
        />
      )}
      <h1
        className="section-title"
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
            img="images/components/value-1.png"
          />
          <ValueCard title="Thinking" img="images/components/value-2.png" />
        </div>
        <div className="d-flex">
          <ValueCard
            title="Collaborative"
            img="images/components/value-3.png"
          />
          <ValueCard title="Discipline" img="images/components/value-4.png" />
        </div>
      </div>
    </div>
  );
}
