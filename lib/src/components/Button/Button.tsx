import Cookies from 'js-cookie';
import styles from './Button.module.css';
import React, { FunctionComponent } from 'react';

const Button: FunctionComponent<ButtonProps> = ({ label, theme }) => {
  let curTheme = '';

  if (theme === undefined) {
    curTheme = Cookies.get('theme')!;
  }

  if (theme === 'dark' || curTheme === 'dark') {
    return (<button className={ `${styles.AlenielButtonDark}` }>{ label }</button>);
  }

  return (<button className={ `${styles.AlenielButtonLight}` }>{ label }</button>);
};

export interface ButtonProps {
  label: string;
  theme?: string;
}

export { Button };
