import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "./Box";
import MainPageComponent from "./MainPageComponent";

export default function AboutMe() {
  return (
    <MainPageComponent title="About me">
      <div className="d-flex justify-content-between w-50">
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

