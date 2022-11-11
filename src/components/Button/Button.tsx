import styles from './Button.module.css';
import React, { FunctionComponent } from 'react';

/**
 * Button Component
 * @param label
 * isTypeOf string
 * used for the button's label.
 * @returns
 * returns Button jsx component
 */
const Button: FunctionComponent<ButtonProps> = ({ label }) => (
  <button className={ `${styles.AlenielButton}` }>{ label }</button>
);

export interface ButtonProps {
  label: string;
}

export { Button };
