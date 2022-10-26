import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className='AlenielButton'>{props.label}</button>;
};

export default Button;