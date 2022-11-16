import React from 'react';
import type { Story } from '@ladle/react';
import { Link } from '..';

export const Default: Story<{
  label: string;
  smoothScrollToId?: string;
  mailTo?: string;
  tel?: string;
  alertMessage?: string;
  externalLink?: string;
}> = ({ label, smoothScrollToId, mailTo, tel, alertMessage, externalLink }) => <Link label={label} mailTo={mailTo} tel={tel} smoothScrollToId={smoothScrollToId} alertMessage={alertMessage} externalLink={externalLink}/>

Default.args = {
  label: 'Google',
  smoothScrollToId: '',
  mailTo: 'daniel_meisler@web.de',
  tel: '',
  alertMessage: '',
  externalLink: 'https://www.google.com',
};

