/* eslint-disable import/no-unassigned-import */
import { useTranslation } from 'react-i18next';
import React, { FunctionComponent } from 'react';
import '../../translations/i18n';

export const TextTester2: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <h1>Header</h1>

      <p>
        {t('text:hello')}
      </p>
      <p>
        {i18n.language}
      </p>
    </React.Fragment>
  );
};
