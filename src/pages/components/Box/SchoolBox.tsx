import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

interface SchoolBoxProps {
  title: string;
  time: string;
}

const SchoolBox = (props: SchoolBoxProps) => {
  return (
    <div className="school-box mt-xl-5 mb-xl-5" data-aos="fade-right">
      <p>{props.time}</p>
      <p style={{ fontWeight: "bold" }}>{props.title}</p>
    </div>
  );
};

export default SchoolBox;
