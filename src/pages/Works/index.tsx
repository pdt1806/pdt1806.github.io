import { useEffect, useState } from "react";

import WorksContainer from "../../components/WorksContainer";

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
        id="works"
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
        Works
      </h1>
      <div
        id="works"
        style={{
          display: "flex",

          alignItems: "center",
          height: !isMobile ? "100vh" : "",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: !isMobile ? "center" : "flex-start",
        }}
      >
        {!isMobile && (
          <img
            loading="lazy"
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
