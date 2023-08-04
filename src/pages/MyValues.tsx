import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import ValueCard from "./components/Box/ValueCard";

export default function MyValues() {
  return (
    <div className="vstack gap-3 d-flex justify-content-center h-100">
      <img
        src="/images/components/my-values-bg.png"
        className="background-component"
        style={{ right: 0 }}
      />
      <h1
        className="section-title me-5"
        style={{ position: "absolute", right: "0" }}
      >
        My Values
      </h1>
      <div className="ms-5">
        <div className="d-flex">
          <ValueCard
            title="Determination"
            img="images/components/value-1.png"
          />
          <ValueCard title="Thinking" img="images/components/value-2.png" />
        </div>
        <div className="d-flex">
          <ValueCard
            title="Collaborative"
            img="images/components/value-3.png"
          />
          <ValueCard title="Discipline" img="images/components/value-4.png" />
        </div>
      </div>
    </div>
  );
}
