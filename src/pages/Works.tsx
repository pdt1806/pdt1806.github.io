import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";
import WorksContainer from "./components/Box/WorksContainer";

export default function Works() {
  return (
    <>
      <h1
        className="section-title mt-5"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Works
      </h1>
      <div
        className="vstack d-flex align-items-center justify-content-center h-100"
        id="works"
      >
        <img
          src="/images/components/works-bg.png"
          className="background-component"
          style={{
            height: "100%",
            maxWidth: "99%",
            zIndex: "0",
          }}
        />

        <WorksContainer />
      </div>
    </>
  );
}
