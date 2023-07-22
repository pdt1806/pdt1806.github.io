import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "../App.css";

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainPageComponent = (props: Props) => {
  return (
    <div className="d-flex flex-column align-items-center p-2 mx-auto mt-5 pt-5">
      <h1 className="mb-3 highlight section-title">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default MainPageComponent;
