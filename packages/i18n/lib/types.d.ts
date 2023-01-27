/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Locale } from 'date-fns';
import type { Resource } from 'i18next';
export declare type I18nState = {
    /**
     * A dictionary of namespaces containing key value pairs of translations
     */
    resources: Resource;
    /**
     * The current locale value
     */
    locale: string;
};
export declare type I18nStateWithDates = I18nState & {
    /**
     * Locale from date-fns
     */
    dateLocale?: Locale;
};
