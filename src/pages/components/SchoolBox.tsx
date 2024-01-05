import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface SchoolBoxProps {
  title: string;
  time: string;
}

const SchoolBox = (props: SchoolBoxProps) => {
  return (
    <div className="school-box" data-aos="fade-right">
      <p>{props.time}</p>
      <p style={{ fontWeight: "bold" }}>{props.title}</p>
    </div>
  );
};

export default SchoolBox;
