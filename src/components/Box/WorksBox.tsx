import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../../App.css";

interface BoxProps {
  title: string;
  description: string;
  image: string;
  link: string;
  source: string;
  erg: boolean;
}

export default function WorksBox(props: BoxProps) {
  return (
    <div
      className="d-flex flex-column mt-5 mb-5 align-items-center"
      style={{ width: "45%" }}
      data-aos="flip-left"
    >
      <img
        src={props.image}
        alt={props.title}
        className="mb-3"
        style={{ height: "300px", borderRadius: "10px" }}
      />
      {props.erg ? (
        <img
          src="/images/works/ERG-brand-black.png"
          alt="Egg Recreates Games"
          style={{ height: "40px" }}
          className="mb-3"
        />
      ) : (
        <></>
      )}
      <a href={props.link} target="_blank" className="anchor">
        <h3 className="highlight mb-3">{props.title}</h3>
      </a>
      <p className="text-center" style={{ width: "80%" }}>
        {props.description}
      </p>
      {props.source !== "" ? (
        <a href={props.source} target="_blank" className="anchor">
          Source code
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
