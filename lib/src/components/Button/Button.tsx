import styles from './Button.css';
import React, { FunctionComponent } from 'react';

const Button: FunctionComponent<ButtonProps> = ({ label }) => (
  <button className={ `${styles.AlenielButton}` }>{ label }</button>
);

export interface ButtonProps {
  label: string;
}

export { Button };
