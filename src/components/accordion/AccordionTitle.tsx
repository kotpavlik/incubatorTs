import React from "react";

type AccordionTitletype = {
  menu: string;
};

const AccordionTitle = (props: AccordionTitletype) => {
  return <h3> {props.menu} </h3>;
};

export default AccordionTitle;
