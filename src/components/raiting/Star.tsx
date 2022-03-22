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
  debugger;
  if (props.selected === true) {
    return <span style={selectedColor}> star </span>;
  } else {
    return <span> star </span>;
  }
};

export default Star;
