import React from "react";
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

type AccordionType = {
  title: string;
  collapsed: boolean;
};

const Accordion = (props: AccordionType) => {
  if (props.collapsed !== true) {
    return (
      <div>
        <AccordionTitle menu={props.title} />
      </div>
    );
  }
  return (
    <div>
      <AccordionTitle menu={props.title} />
      <AccordionBody body={props.title} />
    </div>
  );
};

export default Accordion;
