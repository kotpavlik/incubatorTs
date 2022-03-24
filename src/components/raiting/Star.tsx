import React from "react";

const selectedColor = {
  color: "#ff4dd8",
  fontSize: "20px",
  fontWeight: "bold",
  textShadow: "#4dffffaa 1px 0 10px",
};

type StarType = {
  selected: boolean;
};

const Star = (props: StarType) => {
  return props.selected ? (
    <span style={selectedColor}> star </span>
  ) : (
    <span> star </span>
  );
};

export default Star;
