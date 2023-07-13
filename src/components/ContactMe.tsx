import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "./Box";
import MainPageComponent from "./MainPageComponent";

export default function ContactMe() {
  return (
    <MainPageComponent title="Contact me">
      <div
        data-aos="fade-down"
        className="d-flex justify-content-between align-items-center w-50 pt-3 pb-3"
      >
        <div>
          <h5>Email</h5>
          <a href="mailto:nmphuc1806@gmail.com" className="email">
            <p>nmphuc1806@gmail.com</p>
          </a>
          <h5>Mobile phone</h5>
          <p>+1 279-300-9785</p>
        </div>
        <div>
          <div className="tech-icons-container">
            <a href="https://facebook.com/pdteggman" target="_blank">
              <img
                src="/icon/social-media/facebook.svg"
                className="tech-icon"
                alt="Facebook"
                title="Facebook"
              />
            </a>
            <a href="https://instagram.com/benny_ng08" target="_blank">
              <img
                src="/icon/social-media/instagram.svg"
                className="tech-icon"
                alt="Instagram"
                title="Instagram"
              />
            </a>
            <a href="https://github.com/pdt1806" target="_blank">
              <img
                src="/icon/social-media/github.svg"
                className="tech-icon"
                alt="GitHub"
                title="GitHub"
              />
            </a>
            <a href="https://reddit.com/user/pdteggman" target="_blank">
              <img
                src="/icon/social-media/reddit.svg"
                className="tech-icon"
                alt="Reddit"
                title="Reddit"
              />
            </a>
            <a
              href="https://www.quora.com/profile/Ph%C3%BAc-in-Another-World"
              target="_blank"
            >
              <img
                src="/icon/social-media/quora.svg"
                className="tech-icon"
                alt="Quora"
                title="Quora"
              />
            </a>
            <a href="https://twitter.com/pdteggman" target="_blank">
              <img
                src="/icon/social-media/twitter.svg"
                className="tech-icon"
                alt="Twitter"
                title="Twitter"
              />
            </a>
            <a href="https://steamcommunity.com/id/pdteggman" target="_blank">
              <img
                src="/icon/social-media/steam.svg"
                className="tech-icon"
                alt="Steam"
                title="Steam"
              />
            </a>
          </div>
        </div>
      </div>
    </MainPageComponent>
  );
}
