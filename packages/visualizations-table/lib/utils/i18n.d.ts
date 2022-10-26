import type { I18nState as _I18nState } from '@looker/i18n';
export declare type I18nState = _I18nState;
/**
 * Directly initialize the localization instance
 */
export declare function i18nInit(options?: I18nState): Promise<import("i18next").i18n>;
