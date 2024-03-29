/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Locale } from 'date-fns';
import type { Resource } from 'i18next';
import type { I18nStateWithDates } from './types';

/**
 * For use in a package's individual locale files,
 * to merge in imported locale objects from other dependencies
 * @param locales the list of locale objects from dependencies
 * @param localeString e.g. 'en' or 'ja-JP'
 * @param translations the namespaced translations object for the current package
 * @param dateLocale the date-fns locale object, if used
 * @returns a merged locale object that may have dateLocale
 */
export const mergeLocaleObjects = (
  locales: I18nStateWithDates[],
  localeString: string,
  translations: Resource,
  dateLocale?: Locale
): I18nStateWithDates => {
  const translationsArr = locales.map(locale => locale.resources[localeString]);
  // Merge all namespaced translations into one object
  const mergedTranslations = Object.assign(
    {},
    ...translationsArr,
    translations
  );
  const dateLocaleObject = dateLocale ? { dateLocale } : {};
  return Object.assign({ locale: localeString }, dateLocaleObject, ...locales, {
    // Overwrite resources with the merged resources
    resources: { [localeString]: mergedTranslations },
  });
};
