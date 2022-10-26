import { i18nInitComponents } from '@looker/i18n';
import i18next from 'i18next';
import { useEffect } from 'react';
export const useI18n = ({
  dateLocale,
  locale,
  resources
}) => {
  if (!i18next.isInitialized) {
    i18nInitComponents({
      dateLocale,
      locale,
      resources
    });
  }

  useEffect(() => {
    const update = () => i18nInitComponents({
      dateLocale,
      locale,
      resources
    });

    if (i18next.isInitialized) {
      update();
    } else {
      i18next.on('initialized', update);
    }

    return () => {
      i18next.off('initialized', update);
    };
  }, [dateLocale, locale, resources]);
};
//# sourceMappingURL=useI18n.js.map