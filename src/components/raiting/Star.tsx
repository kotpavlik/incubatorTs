import React from "react";
import style from "./Star.module.css";

type StarType = {
  selected: boolean;
};

const Star = (props: StarType) => {
  return props.selected ? (
    <span className={style.star}> star </span>
  ) : (
    <span> star </span>
  );
};

export default Star;
