import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  return (
    <div className="m-5">
      <h2 className="highlight mb-3">{props.title}</h2>
      {props.children}
    </div>
  );
}