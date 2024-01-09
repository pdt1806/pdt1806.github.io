import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Connections from "./components/Connections";
import { LightBlueBox } from "./components/LightBlueBox";

export default function ContactMe() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [isSmall, setIsSmall] = useState(window.innerHeight < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    const handleResizeSmall = () => {
      setIsSmall(window.innerHeight < 768);
    };

    window.addEventListener("resize", handleResizeSmall);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResizeSmall);
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
            <iframe
              className="mt-5"
              src="https://disi.bennynguyen.dev/smallcard?id=458550515614351360&bg=ffffff"
              name="disi-small-card"
              title="Discord"
              style={{ borderRadius: "20px" }}
              height="100px"
              width="300px"
            ></iframe>
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

    document.getElementById("captcha")?.remove();

    inputs.forEach((input) => {
      input.value = "";
      input.setAttribute("disabled", "true");
    });
  };

  const [emailSent, setEmailSent] = useState<string | null>(null);
  const [isHuman, setIsHuman] = useState(false);

  const captchaVerify = () => {
    setIsHuman(!isHuman);
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
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
        const response = await fetch("https://webemail.bennynguyen.dev/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: fullName,
            email: email,
            message: message,
            "g-recaptcha-response": (
              document.getElementsByName(
                "g-recaptcha-response"
              )[0] as HTMLInputElement
            ).value,
          }),
        });
        response.ok
          ? setEmailSent("Message sent successfully!")
          : setEmailSent("An error occurred. Please try again later.");
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
            autoComplete="name"
            type="text"
            id="name"
            placeholder="Full name"
            className="non-message"
            name="full-name"
          ></input>
          <input
            autoComplete="email"
            type="text"
            id="email"
            placeholder="Email"
            className="non-message"
            name="email"
          ></input>
          <textarea
            id="message"
            placeholder="Message"
            className="message"
            name="message"
          ></textarea>
          <ReCAPTCHA
            sitekey="6LdnCkIpAAAAAKGhynf4oAl_6wzJapkYWNQYhDbg"
            theme="dark"
            onChange={captchaVerify}
            id="captcha"
          />
          <div
            className="d-flex align-items-center"
            style={{ marginTop: "2vh" }}
          >
            <input type="submit" id="submit-button" value="Send"></input>
            {emailSent !== "" && <p className="email-sent">{emailSent}</p>}
          </div>
        </form>
        <div
          style={{
            textAlign: isMobile ? "center" : "end",
            marginBottom: isMobile ? "3rem" : "",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Contact me</p>
          <a href="mailto:me@bennynguyen.dev">
            <p>me@bennynguyen.dev</p>
          </a>
          <br />
          <p style={{ fontWeight: "bold" }}>Based in</p>
          <p>Antelope, California</p>
        </div>
        {isMobile && (
          <div
            style={{
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Social Links</p>
            <Connections />
            <a
              href="https://discord.com/users/458550515614351360"
              target="_blank"
            >
              <img
                style={{ borderRadius: "20px" }}
                height="100px"
                width="300px"
                className="mt-5"
                alt="disi-small-card"
                src="https://disi-api.bennynguyen.dev/smallcard/458550515614351360?bg=FFFFFF"
              ></img>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
