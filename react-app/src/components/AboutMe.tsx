import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MainPageComponent from "./MainPageComponent";

export default function AboutMe() {
  return (
    <MainPageComponent title="About me">
      <div className="d-flex justify-content-between">
        <Box title="Education">
          <h6>11/2022 - 05/2026</h6>
          <p>Antelope High School</p>
        </Box>
        <Box title="I can use">
          <h6>11/2022 - 05/2026</h6>
          <p>Antelope High School</p>
        </Box>
        <Box title="Certificates - Degrees">
          <p>None</p>
        </Box>
      </div>
    </MainPageComponent>
  );
}

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

function Box(props: BoxProps) {
  return (
    <div className="m-5">
      <h2 className="highlight mb-3">{props.title}</h2>
      {props.children}
    </div>
  );
}
