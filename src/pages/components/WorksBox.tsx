import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";

interface BoxProps {
  title: string;
  description: string;
  image: string;
  link: string;
  source: string;
  owner?: {
    name: string;
    link: string;
  };
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
      className="d-flex justify-content-evenly align-items-center"
      style={{
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <a href={props.link} target="_blank">
        <img
          loading="lazy"
          src={props.image}
          alt={props.title}
          style={{
            borderRadius: "20px",
            width: !isMobile ? "auto" : "50%",
            maxWidth: isMobile ? "400px" : "none",
            marginBottom: !isMobile ? "0px" : "20px",
            height: !isMobile ? "" : "auto",
            minHeight: "150px",
          }}
        />
      </a>
      <div
        style={{
          width: isMobile ? "90%" : "60%",
          marginBottom: isMobile ? "10vh" : "0",
        }}
      >
        {props.link !== "" ? (
          <a href={props.link} target="_blank" className="anchor">
            <p className="works-title mb-2">{props.title}</p>
          </a>
        ) : (
          <p className="works-title mb-2">{props.title}</p>
        )}
        <p>{props.description}</p>
        <div
          className="d-flex align-items-center"
          style={{
            marginTop: "20px",
            width: "min-content",
            marginLeft: isMobile ? "auto" : "",
            marginRight: isMobile ? "auto" : "",
          }}
        >
          {props.source !== "" && (
            <a href={props.source} target="_blank">
              <img
                loading="lazy"
                src="/icon/tech/github.svg"
                title="Source Code"
                style={{
                  filter: "invert(1)",
                  margin: "0 15px 0 0",
                  height: "32px",
                  width: "32px",
                }}
                alt="github"
              />
            </a>
          )}
          {props.owner && (
            <a
              href={props.owner.link}
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <p title="Project Owner">@{props.owner.name}</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
