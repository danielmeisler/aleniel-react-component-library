import React, { useState } from "react";
import "./Akkordeon.css";

export interface AkkordeonProps {
  title: string,
  content: string
}

const Akkordeon = (props: AkkordeonProps) => {
const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{props.content}</div>}
    </div>
  );
};

export default Akkordeon;