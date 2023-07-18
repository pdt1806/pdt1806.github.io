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
      id="worksbox"
    >
      <img
        src={props.image}
        alt={props.title}
        className="mb-3"
        style={{ borderRadius: "10px" }}
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
      {props.link !== "" ? (
        <a href={props.link} target="_blank" className="anchor">
          <h3 className="highlight mb-3">{props.title}</h3>
        </a>
      ) : (
        <h3 className="highlight mb-3">{props.title}</h3>
      )}
      <p className="text-center">{props.description}</p>
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
