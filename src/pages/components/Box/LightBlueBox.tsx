interface LightBlueBoxProps {
  position: string;
  children?: React.ReactNode;
}

export const LightBlueBox = (props: LightBlueBoxProps) => {
  return (
    <div
      className="h-100 light-blue-box d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "absolute",
        ...(props.position === "right" ? { right: "0" } : { left: "0" }),
      }}
    >
      {props.children}
    </div>
  );
};
