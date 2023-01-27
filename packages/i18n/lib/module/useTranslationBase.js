

import i18next from 'i18next';
import { useTranslation as useTranslationOrig } from 'react-i18next';
import { i18nInitComponents } from './i18nInitComponents';
const enResourcesMissing = en => {
  const nameSpaceArr = en.resources && Object.keys(en.resources);
  return nameSpaceArr === null || nameSpaceArr === void 0 ? void 0 : nameSpaceArr.some(ns => !i18next.hasResourceBundle('en', ns));
};

export const useTranslationBase = (en, ns, options) => {
  const isEn = !i18next.language || i18next.language === 'en';
  if (isEn && enResourcesMissing(en)) {
    i18nInitComponents(en);
  }
  return useTranslationOrig(ns, options);
};
//# sourceMappingURL=useTranslationBase.js.map