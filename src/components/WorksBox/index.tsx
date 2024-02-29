import "./index.css";

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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
      }}
    >
      <div
        style={{
          width: isMobile ? "auto" : "35%",
          display: "flex",
          justifyContent: "center",
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
      </div>
      <div
        style={{
          width: isMobile ? "90%" : "65%",
          marginBottom: isMobile ? "10vh" : "0",
        }}
      >
        {props.link !== "" ? (
          <a
            href={props.link}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p className="works-title">{props.title}</p>
          </a>
        ) : (
          <p className="works-title">{props.title}</p>
        )}
        <p>{props.description}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            width: "min-content",
            marginLeft: isMobile ? "auto" : "0",
            marginRight: isMobile ? "auto" : "0",
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
