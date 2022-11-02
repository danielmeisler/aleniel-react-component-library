import styles from './Accordion.css';
import React, { FunctionComponent, useState } from 'react';

const Accordion: FunctionComponent<AccordionProps> = ({ title, content, isOpen }) => {
  const [ isActive, setIsActive ] = useState(isOpen);

  return (
    <div className={ `${styles.accordionContainer}` }>
      <div
        className={ `${styles.accordionHeader}` } onClick={ (): void => {
          setIsActive(!isActive);
        } }
      > {title}
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className={ `${styles.accordionBody}` }> {content} </div>}
    </div>
  );
};

export interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
}

export { Accordion };
