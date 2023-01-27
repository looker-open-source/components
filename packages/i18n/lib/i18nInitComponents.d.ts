/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { InitOptions } from 'i18next';
import type { I18nStateWithDates } from './types';
export declare const i18nInitOptionsComponents: InitOptions;
/**
 * @returns the current date-fns locale module (defaults to en-US)
 */
export declare const getDateLocale: () => Locale;
/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export declare function i18nInitComponents({ locale, resources, dateLocale, }: Partial<I18nStateWithDates>): Promise<import("i18next").i18n | import("i18next").TFunction>;
