import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import Connections from "./components/Box/Connections";
import { LightBlueBox } from "./components/Box/LightBlueBox";

export default function ContactMe() {
  return (
    <>
      <div id="contact-me" className="vstack gap-3 h-100">
        <h1
          className="section-title ms-5 mt-5 z-0"
          style={{ position: "absolute" }}
        >
          Get in touch
        </h1>
        <ContactMeInput />
        <LightBlueBox position="right">
          <p style={{ fontWeight: "bold" }}>Connections</p>
          <Connections />
        </LightBlueBox>
      </div>
    </>
  );
}

export function ContactMeInput() {
  return (
    <div className="ms-5 h-100 d-flex align-items-center">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "65vw" }}
      >
        <form className="d-flex flex-column">
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
        <div style={{ textAlign: "end" }}>
          <p style={{ fontWeight: "bold" }}>Contact me</p>
          <p>nmphuc1806@gmail.com</p>
          <br />
          <p style={{ fontWeight: "bold" }}>Based in</p>
          <p>Antelope, California</p>
        </div>
      </div>
    </div>
  );
}
