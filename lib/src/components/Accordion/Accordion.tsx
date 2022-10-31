import React, { useState } from "react";
import "./Accordion.css";

export interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
}

const Accordion = (props: AccordionProps) => {
  const [isActive, setIsActive] = useState(props.isOpen);
  return (
    <div className='accordianContainer'>
      <div className='accordionHeader' onClick={() => { setIsActive(!isActive) }} > {props.title}
        <div>{isActive ? '-' : '+'}</div>
      </div>
      { isActive && <div className='accordionBody'> {props.content} </div> }
    </div>
  )
};

export default Accordion;