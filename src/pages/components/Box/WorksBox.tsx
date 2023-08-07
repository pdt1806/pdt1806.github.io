import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../../../App.css";

interface BoxProps {
  title: string;
  description: string;
  image: string;
  link: string;
  source: string;
}

export default function WorksBox(props: BoxProps) {
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
      className="d-flex"
      style={{
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
      }}
    >
      <img
        src={props.image}
        alt={props.title}
        style={{
          borderRadius: "10px",
          marginRight: !isMobile ? "50px" : "0px",
          width: !isMobile ? "auto" : "60%",
          maxWidth: isMobile ? "400px" : "none",
          marginBottom: !isMobile ? "0px" : "20px",
          height: !isMobile ? "" : "auto",
        }}
      />
      <div
        style={{
          width: isMobile ? "90%" : "60%",
          marginBottom: isMobile ? "10vh" : "0",
        }}
      >
        {props.link !== "" ? (
          <a href={props.link} target="_blank" className="anchor">
            <h3 className="works-title mb-3">{props.title}</h3>
          </a>
        ) : (
          <h3 className="works-title mb-3">{props.title}</h3>
        )}
        <p>{props.description}</p>
        {props.source !== "" ? (
          <a href={props.source} target="_blank">
            <img
              src="/icon/tech/github.svg"
              title="Source Code"
              className="tech-icon"
              style={{ filter: "invert(1)", marginTop: "20px" }}
            />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
