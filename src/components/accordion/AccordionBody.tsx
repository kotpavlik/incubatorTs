import React from "react";

type AccordionBodyType = {
  body: string;
};

const AccordionBody = (props: AccordionBodyType) => {
  if (props.body === "Menu : ") {
    return (
      <ul>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Wine</li>
      </ul>
    );
  }
  return (
    <ul>
      <li>Misha</li>
      <li>Dima</li>
      <li>Grisha</li>
    </ul>
  );
};

export default AccordionBody;
