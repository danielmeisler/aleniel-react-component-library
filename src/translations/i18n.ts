import { de } from './de';
import { en } from './en';

import { initReactI18next } from 'react-i18next';
import * as i18n from 'i18next';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.
  use(initReactI18next).
  init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    }
  });

export { i18n };
