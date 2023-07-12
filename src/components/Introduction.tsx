import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Introduction() {
  return (
    <>
      <div className="pt-3" />
      <div className="d-flex p-2 pb-5 pt-5 w-75 mx-auto justify-content-center mt-5 align-items-center">
        <div>
          <h1 className="mb-4 highlight title">This is Benny Nguyen</h1>
          <p>
            An ordinary high school student who loves
            <span className="highlight">
              {" "}
              computers, soccer, Anime and Japanese music.
            </span>
          </p>
          <p>
            I am strong at
            <span className="highlight"> Front-end development</span> with a
            significant amount of knowledge of different tools and frameworks. I
            am also a fast learner and can adapt to new environments quickly.
          </p>
        </div>
        <img
          src="/me.jpg"
          alt="Me"
          className="img-fluid ms-5 me-5"
          style={{ width: "500px" }}
        />
      </div>
      <hr className="w-75 mx-auto" />
    </>
  );
}
