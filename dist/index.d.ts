/// <reference types="react" />
interface AccordionProps {
    title: string;
    content: string;
}
declare const Accordion: (props: AccordionProps) => JSX.Element;

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

declare const Keyboard: () => JSX.Element;

export { Accordion, Button, Keyboard };
