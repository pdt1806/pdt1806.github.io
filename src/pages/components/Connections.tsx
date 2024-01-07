import { useEffect, useState } from "react";

const Connections = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div
      className="d-flex"
      style={{
        marginTop: "4vh",
        width: "70%",
        maxWidth: "320px",
        minWidth: isMobile ? "240px" : "277px",
        justifyContent: "space-between",
      }}
    >
      <a
        href="https://github.com/pdt1806"
        target="_blank"
        className="connections-icon-a"
      >
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/tech/github.svg"
          className="connections-icon"
          alt="GitHub"
          title="GitHub"
        />
      </a>
      <a
        href="https://instagram.com/benny_ng08"
        target="_blank"
        className="connections-icon-a"
      >
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/social-media/instagram.svg"
          className="connections-icon"
          alt="Instagram"
          title="Instagram"
        />
      </a>
      <a
        href="https://facebook.com/pdteggman"
        target="_blank"
        className="connections-icon-a"
      >
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/social-media/facebook.svg"
          className="connections-icon"
          alt="Facebook"
          title="Facebook"
        />
      </a>
      <a
        href="https://x.com/pdteggman"
        target="_blank"
        className="connections-icon-a"
      >
        <img
          loading="lazy"
          style={{ filter: "invert(1)" }}
          src="/icon/social-media/x.svg"
          className="connections-icon"
          alt="X"
          title="X"
        />
      </a>
    </div>
  );
};

export default Connections;
