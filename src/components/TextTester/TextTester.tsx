import React, { FunctionComponent } from 'react';

interface TextTesterProps {
  welcomeText: string;
  language: 'de-DE' | 'en-US';
}

export const TextTester: FunctionComponent<TextTesterProps> = ({ welcomeText, language = 'de-DE' }) => {
  const daysDe = [ 'Mo', 'Di', 'Mi' ];
  const daysEn = [ 'Mon', 'Tues', 'Wed' ];

  return (
    <React.Fragment>
      <h1>{welcomeText}</h1>

      {
        language === 'de-DE' &&
        daysDe.map(day => (
          <div key={ day }> { day } </div>
        ))
      }

      {
        language === 'en-US' &&
        daysEn.map(day => (
          <div key={ day }> { day } </div>
        ))
      }

    </React.Fragment>
  );
};

