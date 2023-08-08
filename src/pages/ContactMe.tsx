import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import Connections from "./components/Box/Connections";
import { LightBlueBox } from "./components/Box/LightBlueBox";

export default function ContactMe() {
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
      <div id="contact-me" className="vstack gap-3 h-100">
        {/* <h1
          className="section-title ms-5 mt-5 z-0"
          style={{ position: "absolute" }}
        >
          Get in touch
        </h1> */}
        <h1
          className="section-title z-0"
          style={{
            position: !isMobile ? "absolute" : "static",
            marginTop: "5rem",
            marginLeft: isMobile ? "auto" : "3rem",
            marginBottom: isMobile ? "3rem" : "none",
            marginRight: isMobile ? "auto" : "0",
          }}
        >
          Get in touch
        </h1>
        <ContactMeInput isMobile={isMobile} />
        {!isMobile && (
          <LightBlueBox position="right">
            <p style={{ fontWeight: "bold" }}>Connections</p>
            <Connections />
          </LightBlueBox>
        )}
      </div>
    </>
  );
}

export function ContactMeInput({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="h-100 d-flex align-items-center">
      <div
        className="d-flex align-items-center"
        style={{
          width: !isMobile ? "65vw" : "100%",
          justifyContent: !isMobile ? "space-between" : "none",
          flexDirection: !isMobile ? "row" : "column",
          marginLeft: isMobile ? "0" : "3rem",
        }}
      >
        <form
          className="d-flex flex-column"
          style={{ marginBottom: isMobile ? "3rem" : "0" }}
        >
          <input
            type="text"
            id="text-input"
            placeholder="Full name"
            className="non-message"
            name="full-name"
          ></input>
          <input
            type="text"
            id="text-input"
            placeholder="Email"
            className="non-message"
            name="email"
          ></input>
          <textarea
            id="text-input"
            placeholder="Message"
            className="message"
            name="message"
          ></textarea>
          <input type="submit" id="submit-button" value="Send"></input>
        </form>
        <div
          style={{
            textAlign: isMobile ? "center" : "end",
            marginBottom: isMobile ? "3rem" : "",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Contact me</p>
          <a href="mailto:contact@bennynguyen.us">
            <p>contact@bennynguyen.us</p>
          </a>
          <br />
          <p style={{ fontWeight: "bold" }}>Based in</p>
          <p>Antelope, California</p>
        </div>
        {isMobile && (
          <div
            style={{
              marginBottom: "3rem",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Connections</p>
            <Connections />
          </div>
        )}
      </div>
    </div>
  );
}
