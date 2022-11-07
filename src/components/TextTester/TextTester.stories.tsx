import React from 'react';
import type { Story } from "@ladle/react";
import { TextTester } from '..';

export const Default: Story<{
  welcomeText: string;
  language: 'de-DE' | 'en-US';
}> = ({ welcomeText, language }) => <TextTester welcomeText={welcomeText} language={language} />

Default.args = {
  welcomeText: "Hallo",
  language: 'de-DE'
};
