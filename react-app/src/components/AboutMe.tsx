import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function AboutMe() {
  return (
    <div className="d-flex p-2 w-75 mx-auto justify-content-center mt-5 align-items-center">
      <div>
        <h1 className="mb-3">This is Benny Nguyen!</h1>
        <p>
          An ordinary high school student who loves computers, soccer,{" "}
          <strong>Anime and Japanese music.</strong>
        </p>
        <p>
          I am strong at Front-end development with a significant amount of
          knowledge of different tools and frameworks. I am also a fast learner
          and can adapt to new environments quickly.
        </p>
      </div>
      <img
        src="/me.jpg"
        alt="Me"
        className="img-fluid ms-5 me-5"
        style={{ width: "500px" }}
      />
    </div>
  );
}

export default AboutMe;
