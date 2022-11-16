import styles from './Link.module.css';
import React, { FunctionComponent } from 'react';

type LinkProps = {
  label: string;
} & (
  { smoothScrollToId: string } |
  { mailTo: string } |
  { tel: string } |
  { alertMessage: string } |
  { externalLink: string }
);

const Link: FunctionComponent<LinkProps> = ({ label }, { smoothScrollToId, mailTo, tel, alertMessage, externalLink }) => {
  let link: string;
  let LinkComponent;

  if (smoothScrollToId) {
    link = `#${smoothScrollToId}`;
  } else if (mailTo) {
    link = `mailto:${mailTo}`;
  } else if (tel) {
    link = `tel:${tel}`;
  } else if (alertMessage) {
    link = `javascript:alert('${alertMessage}')`;
  }

  if (externalLink) {
    LinkComponent = <a className={ `${styles.Link}` } href={ externalLink } rel='noopener noreferrer' target='_blank'> {label} </a>;
  }

  if (!externalLink) {
    LinkComponent = <a className={ `${styles.Link}` } href={ link }> {label} </a>;
  }

  return (
    LinkComponent
  );
};

export { Link };
