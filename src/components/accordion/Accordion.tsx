import React from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

let AccordionArray = [
    {
        title: 'Menu : ',
        id: 1,
        collapsed: true
    },
    {
        title: 'Users : ',
        id: 2,
        collapsed: false
    }
];

const Accordion = () => {
    const [accordion, setAccordion] = React.useState(AccordionArray);
    const addCollapsed = (bool: boolean, id: number) => {
        setAccordion(accordion.map(item => {
            if (item.id === id) {
                item.collapsed = bool;
            }
            return item;
        }));
    }
    let AccordionCollapsed = accordion.map((e) => {
        if (e.collapsed !== true) {
            return (
                <div key={e.id}>
                    <AccordionTitle menu={e.title} setAccordion={addCollapsed} collapsed={e.collapsed} id={e.id}/>
                </div>
            );
        }
        return (
            <div key={e.id}>
                <AccordionTitle menu={e.title} setAccordion={addCollapsed} collapsed={e.collapsed} id={e.id}/>
                <AccordionBody body={e.title}/>
            </div>
        );
    })
    return (
        <div>{AccordionCollapsed}</div>
    )
};

export default Accordion;
