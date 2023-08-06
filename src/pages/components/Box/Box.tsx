import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1366);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1366);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        marginTop: isLargeScreen ? "4rem" : "3rem",
        paddingTop: isLargeScreen ? "1rem" : "4rem",
        marginBottom: isLargeScreen ? "4rem" : "3rem",
        paddingBottom: isLargeScreen ? "1rem" : "4rem",
        textAlign: "right",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", fontWeight: "bold" }}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
}
