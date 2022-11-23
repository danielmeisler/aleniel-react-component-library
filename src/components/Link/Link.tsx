import styles from './Link.module.css';
import React, { FunctionComponent } from 'react';

type LinkProps = {
  label?: string;
} & (
  { smoothScrollToId: string } |
  { mailTo: string } |
  { tel: string } |
  { externalLink: string } |
  { internalLink: string }
);

/**
 * A simple link component that should make it easier to use and supports CSR/SSR.
 *
 * @param label
 * The label on the component. If you don't use it the attribute becomes visible. As example if you want to use a phone number.
 * This label is the only visible part of the component, so you should make it recognizable which of the following attributes you use.
 *
 * You need to use only one of the following attributes:
 * @param externalLink
 * Opens a new tab with the rel='noopener noreferrer' attribute.
 * Use an available link to a website. Example: "https://google.com"
 * @param internalLink
 * Switches between pages inside an application without reloading.
 * Use an existent path of one of your pages. Uses the a-tag href prefix /.
 * @param smoothScrollToId
 * Anchor Tag which scrools smoothly to the same ID.
 * Use an existent id from your components. Uses the a-tag href prefix #.
 * @param mailTo
 * One click to write an e-mail.
 * Put the recipient email address in. Uses the a-tag href prefix mailto.
 * @param tel
 * One click to call someone.
 * Put the recipient phone number in. Uses the a-tag href prefix tel.
 */

const Link: FunctionComponent<LinkProps> = ({ label, ...props }) => {
  let href: string;
  let LinkComponent = <a> Error: Missing attribute! </a>;

  if ('smoothScrollToId' in props && !(props.smoothScrollToId === '')) {
    href = `#${props.smoothScrollToId}`;
    LinkComponent = <a className={ `${styles.Link}` } href={ href }> &#10150; { label ?? props.smoothScrollToId } </a>;
  }

  if ('mailTo' in props && !(props.mailTo === '')) {
    href = `mailto:${props.mailTo}`;
    LinkComponent = <a className={ `${styles.Link}` } href={ href }> &#9993; {label ?? props.mailTo} </a>;
  }

  if ('tel' in props && !(props.tel === '')) {
    href = `tel:${props.tel}`;
    LinkComponent = <a className={ `${styles.Link}` } href={ href }> &#9743; {label ?? props.tel} </a>;
  }

  if ('internalLink' in props && !(props.internalLink === '')) {
    href = `/${props.internalLink}`;
    LinkComponent = <a className={ `${styles.Link}` } href={ href }> &#10151; { label ?? props.internalLink } </a>;
  }

  if ('externalLink' in props && !(props.externalLink === '')) {
    href = props.externalLink;
    LinkComponent = <a className={ `${styles.Link}` } href={ props.externalLink } rel='noopener noreferrer' target='_blank'> &#10138; {label ?? props.externalLink} </a>;
  }

  return (
    LinkComponent
  );
};

export { Link };
