import type { I18nStateWithDates as _I18nStateWithDates } from '@looker/i18n';
export declare type I18nStateWithDates = _I18nStateWithDates;
/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export declare function i18nInit({ locale, resources, dateLocale, }?: I18nStateWithDates): Promise<import("i18next").TFunction | import("i18next").i18n>;
