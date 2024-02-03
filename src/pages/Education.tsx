import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import SchoolBox from "./components/SchoolBox";

const Education: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1280);
  const outerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    const updateBackgroundHeight = () => {
      if (outerDivRef.current) {
        const height = outerDivRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--bg-height-education",
          `${height}px`
        );
      }
    };

    window.addEventListener("resize", () => {
      handleResize();
      updateBackgroundHeight();
    });

    updateBackgroundHeight();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const schoolsList = [
    {
      time: "11/2022 - Now",
      title: "Antelope High School, CA",
    },
    {
      time: "9/2021 - 10/2022",
      title: "Tran Quoc Toan 1 Secondary School, Vietnam",
    },
    {
      time: "8/2014 - 5/2021",
      title: "The Asian International School, Vietnam",
    },
  ];

  return (
    <>
      <div className="vstack gap-2" ref={outerDivRef}>
        {!isMobile && (
          <img
            loading="lazy"
            src="/images/components/education-bg.webp"
            className="background-component"
            alt="education-bg"
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
            {schoolsList.map((school) => (
              <SchoolBox
                key={school.title}
                time={school.time}
                title={school.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
