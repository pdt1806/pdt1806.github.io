import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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

  const [isSmall, setIsSmall] = useState(window.innerHeight < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerHeight < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div id="contact-me" className="vstack gap-3 h-100">
        <h1
          className="section-title z-0"
          style={{
            position: !isMobile ? "absolute" : "static",
            marginTop: isSmall ? "2rem" : "5rem",
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
            <p style={{ fontWeight: "bold" }}>Social Links</p>
            <Connections />
          </LightBlueBox>
        )}
      </div>
    </>
  );
}

export function ContactMeInput({ isMobile }: { isMobile: boolean }) {
  const isEmptyOrSpaces = (str: string) => {
    return str === null || str.match(/^ *$/) !== null;
  };

  const afterSending = () => {
    const inputs = document.querySelectorAll(
      'input[name="email"], textarea[name="message"], input[name="full-name"]'
    ) as NodeListOf<HTMLInputElement>;

    inputs.forEach((input) => {
      input.value = "";
      input.setAttribute("disabled", "true");
    });
  };

  const [emailSent, setEmailSent] = useState<string | null>(null);
  const [isHuman, setIsHuman] = useState(false);

  const captchaVerify = () => {
    isHuman ? setIsHuman(false) : setIsHuman(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const getValue = (name: string) =>
      (document.getElementsByName(name)[0] as HTMLInputElement).value;

    const fullName = getValue("full-name");
    const email = getValue("email");
    const message = getValue("message");

    e.preventDefault();
    if (!isHuman) {
      setEmailSent("Please verify that you are a human.");
      return;
    }
    if (emailSent !== "Message sent successfully!") {
      if (isEmptyOrSpaces(fullName)) {
        setEmailSent("Please enter your full name.");
        return;
      }
      if (isEmptyOrSpaces(email)) {
        setEmailSent("Please enter your email.");
        return;
      }
      if (
        !email.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        setEmailSent("Please enter a valid email.");
        return;
      }
      if (isEmptyOrSpaces(message)) {
        setEmailSent("Please enter your message.");
        return;
      }
      try {
        const response = await fetch("https://webemail.bennynguyen.us/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: fullName,
            email: email,
            message: message,
          }),
        });
        response.status !== 200 || (await response.text()) !== "sent"
          ? setEmailSent("An error occurred. Please try again later.")
          : setEmailSent("Message sent successfully!");
        afterSending();
      } catch (error) {
        setEmailSent("An error occurred. Please try again later.");
        afterSending();
      }
    }
  };

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
          onSubmit={handleSubmit}
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
          <ReCAPTCHA
            sitekey="6LfeLqMnAAAAAKNqeaU1rJCln6rgiwDNdoHDLX0s"
            theme="dark"
            onChange={captchaVerify}
          />
          <div
            className="d-flex align-items-center"
            style={{ marginTop: "2vh" }}
          >
            <input type="submit" id="submit-button" value="Send"></input>
            {emailSent !== "" && <h5>{emailSent}</h5>}
          </div>
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
            <p style={{ fontWeight: "bold" }}>Social Links</p>
            <Connections />
          </div>
        )}
      </div>
    </div>
  );
}
