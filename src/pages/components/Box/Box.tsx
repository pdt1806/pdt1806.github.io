import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1536);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1536);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      data-aos={isMobile ? "fade-down" : "fade-right"}
      style={{
        marginTop: isLargeScreen ? "4rem" : "2rem",
        marginBottom: isLargeScreen ? "4rem" : "2rem",
        textAlign: isMobile ? "center" : "right",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
}
