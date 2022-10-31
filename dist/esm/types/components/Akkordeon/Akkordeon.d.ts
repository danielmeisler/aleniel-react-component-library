/// <reference types="react" />
import "./Akkordeon.css";
export interface AkkordeonProps {
    title: string;
    content: string;
}
declare const Akkordeon: (props: AkkordeonProps) => JSX.Element;
export default Akkordeon;
