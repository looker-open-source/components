

export const mergeLocaleObjects = (locales, localeString, translations, dateLocale) => {
  const translationsArr = locales.map(locale => locale.resources[localeString]);
  const mergedTranslations = Object.assign({}, ...translationsArr, translations);
  const dateLocaleObject = dateLocale ? {
    dateLocale
  } : {};
  return Object.assign({
    locale: localeString
  }, dateLocaleObject, ...locales, {
    resources: {
      [localeString]: mergedTranslations
    }
  });
};
//# sourceMappingURL=mergeLocaleObjects.js.map