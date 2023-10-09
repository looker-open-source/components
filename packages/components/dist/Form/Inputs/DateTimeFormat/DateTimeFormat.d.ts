/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { Locale } from 'date-fns';
import type { DateFormats, DateTimeOptions } from '../../../Calendar/utils';
export declare type DateTimeFormatProps = {
    children?: Date;
    format?: DateFormats | string;
    /**
     * Locale object from date-fns.
     * @example
     * import ko from 'date-fns/locale/ko'
     */
    locale?: Locale;
    timeZone?: string;
};
declare type DateTimeFormatExtensionProps = DateTimeFormatProps & DateTimeOptions;
export declare const DateTimeFormat: ({ children, date, format, locale, time, timeZone, }: DateTimeFormatExtensionProps) => JSX.Element;
export {};
