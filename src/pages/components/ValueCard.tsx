import "aos/dist/aos.css";

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
      className={`d-flex flex-column align-items-center pt-5 pb-4 ${color}`}
      data-aos="flip-left"
      data-aos-offset="200"
    >
      <h2 style={{ fontWeight: "bold" }} className="mb-4">
        {props.title}
      </h2>
      <img
        loading="lazy"
        src={props.img}
        alt="value"
        style={{
          width: "60%",
          height: "auto",
          pointerEvents: "none",
          minHeight: "65px",
          minWidth: "65px",
        }}
      />
    </div>
  );
};

export default ValueCard;
