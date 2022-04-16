import React from "react";

type AccordionTitletype = {
  menu: string;
  collapsed: boolean;
  id:number;
  setAccordion:(bool:boolean,id:number)=>void;

};

const AccordionTitle = (props: AccordionTitletype) => {
  const setAccordion = () => {
    props.setAccordion(!props.collapsed,props.id);
  };

  return <h3 onClick={setAccordion}> {props.menu} </h3>;
};

export default AccordionTitle;
