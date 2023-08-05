import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../../../App.css";

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
    <>
      <img
        src={props.image}
        alt={props.title}
        className="mb-3"
        style={{ borderRadius: "10px", marginRight: "50px" }}
      />
      <div style={{ width: "60%" }}>
        {props.link !== "" ? (
          <a href={props.link} target="_blank" className="anchor">
            <h3 className="works-title mb-3">{props.title}</h3>
          </a>
        ) : (
          <h3 className="works-title mb-3">{props.title}</h3>
        )}
        <p>{props.description}</p>
        {props.source !== "" ? (
          <a href={props.source} target="_blank">
            <img
              src="/icon/tech/github.svg"
              title="Source Code"
              className="tech-icon"
              style={{ filter: "invert(1)", marginTop: "20px" }}
            />
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
