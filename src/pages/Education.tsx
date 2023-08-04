import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import SchoolBox from "./components/Box/SchoolBox";

const Education = () => {
  return (
    <>
      <EducationInfo />
    </>
  );
};

const EducationInfo = () => {
  return (
    <div className="vstack gap-2">
      <img
        src="/images/components/education-bg.png"
        className="background-component"
        style={{ right: 0 }}
      />
      <div className="ps-5 pt-5">
        <h1 className="section-title">Education</h1>
        <div>
          <SchoolBox time="11/2022 - Now" title="Antelope High School, CA" />
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
  );
};

export default Education;
