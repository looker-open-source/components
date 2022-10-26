import { i18nInitComponents } from '@looker/i18n';
import merge from 'lodash/merge';
import { en } from '../locales';
export async function i18nInit({
  locale = 'en',
  resources,
  dateLocale
} = en) {
  const mergedResources = merge({}, resources, en.resources);
  return i18nInitComponents({
    dateLocale,
    locale,
    resources: mergedResources
  });
}
//# sourceMappingURL=i18n.js.map