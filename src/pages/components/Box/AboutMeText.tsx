import "aos/dist/aos.css";
import React from "react";
import "../../../App.css";

interface AboutMeTextProps {
  children?: React.ReactNode;
}

const AboutMeText = (props: AboutMeTextProps) => {
  return (
    <p className="aboutme-text" data-aos="zoom-in">
      {props.children}
    </p>
  );
};

export default AboutMeText;
