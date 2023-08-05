import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
interface BoxProps {
  title: string;
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  return (
    <div
      className="mt-4 pt-5 mb-4 pb-5 mt-sm-3 pt-sm-4 mb-sm-3 pb-sm-4"
      style={{ textAlign: "right" }}
    >
      <h2 className="mb-3" style={{ fontWeight: "bold" }}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
}
