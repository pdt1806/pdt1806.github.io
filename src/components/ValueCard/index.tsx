import "aos/dist/aos.css";
import "./index.css";

interface ValueCardProps {
  title: string;
  img: string;
}

const ValueCard = (props: ValueCardProps) => {
  var color;
  switch (props.title) {
    case "Determination":
      color = "red";
      break;
    case "Thoughtful":
      color = "green";
      break;
    case "Collaborative":
      color = "blue";
      break;
    case "Discipline":
      color = "yellow";
      break;
  }
  return (
    <div
      id="value-card"
      className={`${color}`}
      data-aos="flip-left"
      data-aos-offset="200"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "4.5vh",
        paddingBottom: "4.5vh",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "4vh" }}>{props.title}</h2>
      <img
        loading="lazy"
        src={props.img}
        alt="value"
        style={{
          width: "60%",
          height: "auto",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default ValueCard;
