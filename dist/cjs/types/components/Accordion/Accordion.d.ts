/// <reference types="react" />
import "./Accordion.css";
export interface AccordionProps {
    title: string;
    content: string;
}
declare const Accordion: (props: AccordionProps) => JSX.Element;
export default Accordion;
