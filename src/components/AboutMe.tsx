import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Box from "./Box";
import MainPageComponent from "./MainPageComponent";


export default function AboutMe() {
  return (
    <MainPageComponent title="About me">
      <div
        data-aos="fade-down"
        className="d-flex justify-content-between align-items-center"
      >
        <Box title="Education">
          <h5>11/2022 - Now</h5>
          <p>Antelope High School</p>
          <h5>09/2021 - 10/2022</h5>
          <p>Tran Quoc Toan 1 Middle School, Vietnam</p>
          <h5>08/2014 - 05/2021</h5>
          <p>The Asian International School, Vietnam</p>
        </Box>
      </div>
      <hr className="w-75 mx-auto" />
    </MainPageComponent>
  );
}
