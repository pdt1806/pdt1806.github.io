import "aos/dist/aos.css";

import "./index.css";

import { useEffect, useLayoutEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

import Connections from "../../components/Connections";
import { LightBlueBox } from "../../components/LightBlueBox";

export default function Introduction() {
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
      <div
        id="introduction"
        style={{
          flex: "1 1 auto",
          flexDirection: "column",
          alignSelf: "stretch",
          display: "flex",
          justifyContent: "center",
          marginTop: isMobile ? "3rem" : "0",
          marginBottom: isMobile ? "3rem" : "0",
        }}
      >
        {isMobile ? null : <LightBlueBox position="left" />}
        <IntroductionInfo isMobile={isMobile} />
      </div>
    </>
  );
}

export function IntroductionInfo({ isMobile }: { isMobile: boolean }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageWidth, setImageWidth] = useState(450);
  const [imageHeight, setImageHeight] = useState(580);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = "/images/me.webp";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    let imgWidth = 450;
    if (currentWidth < 1537) imgWidth = 400;
    if (currentWidth < 1280) imgWidth = currentWidth / 2;
    if (currentWidth < 721) imgWidth = currentWidth * 0.75;
    setImageWidth(imgWidth);
    setImageHeight(imgWidth * (825 / 640));
  }, [currentWidth]);

  return (
    <>
      <div className="introduction-info" style={{ zIndex: 2 }}>
        <div>
          <h2 className="this-is">This is</h2>
          <h1 className="highlight title" data-aos-duration="1000">
            Benny Nguyen
          </h1>
          <div>
            <p>
              A <span style={{ fontWeight: "bold" }}>Front-end developer</span>{" "}
              who enjoys and wants to know more about programming.
            </p>
          </div>
        </div>
        <div
          style={{
            transform: "translate(-1vw)",
            display: isMobile ? "flex" : "static",
            justifyContent: isMobile ? "center" : "",
          }}
        >
          <Connections />
        </div>
      </div>
      {imageLoaded ? (
        <img
          alt="Me"
          src="/images/me.webp"
          className="img-fluid introduction-img"
        />
      ) : (
        <Blurhash
          hash="|WJlHkNZ-,ROadbwbct7s.G1%LRiWUacNGRjRiWCtp-pRQtStQaeo3WXozIVjdItNItRnhRkt8WAnMRiR.%La#t5ofRkn$j;WqWBRjaeWDjtt7t7WAa$V@WBWAWDWBWAR*s-bIofWBjYW=t7oIfRjYj]ozWYkCbHR*aya#"
          className={currentWidth > 1279 ? "introduction-img" : ""}
          width={imageWidth}
          height={imageHeight}
          punch={1}
        />
      )}
    </>
  );
}
