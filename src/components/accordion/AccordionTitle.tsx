import React from "react";
import s from './AccordionTitle.module.css'

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

  return <h3 className={s.accordionTitle} onClick={setAccordion}> {props.menu} </h3>;
};

export default AccordionTitle;
