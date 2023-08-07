import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import "../App.css";
import SchoolBox from "./components/Box/SchoolBox";

const Education = () => {
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
      <div className="vstack gap-2">
        {!isMobile && (
          <img
            src="/images/components/education-bg.png"
            className="background-component"
            style={{ right: 0 }}
          />
        )}
        <div
          className="pt-5"
          style={{
            paddingLeft: isMobile ? "0" : "5rem",
          }}
        >
          <h1
            className="section-title"
            style={{ marginBottom: isMobile ? "3rem" : "" }}
          >
            Education
          </h1>
          <div className="school-box-section">
            <div>
              <SchoolBox
                time="11/2022 - Now"
                title="Antelope High School, CA"
              />
            </div>
            <div>
              <SchoolBox
                time="9/2021 - 10/2022"
                title="Tran Quoc Toan 1 Middle School, Vietnam"
              />
            </div>
            <div>
              <SchoolBox
                time="8/2014 - 5/2021"
                title="The Asian International School, Vietnam"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
