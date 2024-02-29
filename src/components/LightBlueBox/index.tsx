interface LightBlueBoxProps {
  position: string;
  children?: React.ReactNode;
}

export const LightBlueBox = (props: LightBlueBoxProps) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ...(props.position === "right" ? { right: "0" } : { left: "0" }),
        zIndex: 0,
        backgroundColor: "#2c9fc3",
        width: "25vw",
      }}
    >
      {props.children}
    </div>
  );
};
