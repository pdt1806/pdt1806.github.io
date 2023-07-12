import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "./Box";
import MainPageComponent from "./MainPageComponent";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <MainPageComponent title="About me">
      <div data-aos="fade-down" className="d-flex justify-content-between w-50">
        <Box title="Education">
          <h5>11/2022 - Now</h5>
          <p>Antelope High School</p>
        </Box>
        <Box title="Certificates - Degrees">
          <p>None</p>
        </Box>
      </div>
      <hr className="w-75 mx-auto" />
    </MainPageComponent>
  );
}

