import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

export default function Introduction() {
  return (
    <>
      <div
        className="d-flex p-2 mt-4 w-75 mx-auto justify-content-center align-items-center"
        id="introduction"
      >
        <div>
          <h1
            className="mb-4 highlight title"
            data-aos-duration="1000"
            data-aos="fade-down"
            data-aos-offset="0"
          >
            This is Benny Nguyen
          </h1>
          <div
            data-aos-duration="1000"
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-offset="0"
          >
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
              significant amount of knowledge of different tools and frameworks.
              I can also create simple 2D games.
            </p>
            <p className="mb-5">
              I believe I am a fast learner and can adapt to new environments
              quickly.
            </p>
          </div>
        </div>
        <img
          src="/images/me.jpg"
          alt="Me"
          className="img-fluid ms-5 me-5"
          style={{ width: "450px" }}
          data-aos-duration="1500"
          data-aos="fade-down"
        />
      </div>
      <hr className="w-75 mx-auto" />
    </>
  );
}
