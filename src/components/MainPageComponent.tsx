import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainPageComponent = (props: Props) => {
  return (
    <div className="d-flex flex-column align-items-center pt-5 p-2 mx-auto mt-5">
      <h1 className="mb-3 highlight section-title">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default MainPageComponent;
