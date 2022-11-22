import React from 'react';
import type { Story } from '@ladle/react';
import { Link } from '..';

export const SmoothScrollToId: Story<{
  label: string;
  content: string;
}> = ({ label, content}) => <Link label={label} smoothScrollToId={content}/>

SmoothScrollToId.args = {
  label: 'ScrollToId',
  content: 'testId'
};


export const MailTo: Story<{
  label: string;
  content: string;
}> = ({ label, content}) => <Link label={label} mailTo={content}/>

MailTo.args = {
  label: 'Mail me!',
  content: 'test@gmail.com'
};


export const TelTo: Story<{
  label: string;
  content: string;
}> = ({ label, content}) => <Link label={label} tel={content}/>

TelTo.args = {
  label: 'Call me!',
  content: '0123456789'
};


export const ExternalLink: Story<{
  label: string;
  content: string;
}> = ({ label, content}) => <Link label={label} externalLink={content}/>

ExternalLink.args = {
  label: 'Google',
  content: 'https://www.google.com'
};