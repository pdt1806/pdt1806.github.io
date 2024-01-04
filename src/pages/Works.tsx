import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import WorksContainer from "./components/WorksContainer";

export default function Works() {
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
        className="section-title pt-5"
        style={{
          position: !isMobile ? "absolute" : "static",
          left: !isMobile ? "50%" : "auto",
          right: !isMobile ? "" : "auto",
          marginBottom: !isMobile ? "0" : "3rem",
          transform: !isMobile ? "translateX(-50%)" : "none",
        }}
      >
        Works
      </h1>
      <div
        className="vstack d-flex align-items-center"
        id="works"
        style={{
          height: !isMobile ? "100vh" : "",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: !isMobile ? "center" : "flex-start",
        }}
      >
        {!isMobile && (
          <img
            src="/images/components/works-bg.webp"
            className="background-component"
            style={{
              maxWidth: !isMobile ? "99%" : "none",
              zIndex: "0",
            }}
            alt="works-bg"
          />
        )}
        <WorksContainer />
      </div>
    </>
  );
}
