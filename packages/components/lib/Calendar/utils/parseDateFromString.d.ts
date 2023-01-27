/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { DateFormats } from './formatDateString';
export declare const formatYear: (date: Date) => number;
export declare const parseDateFromString: (value: string, locale?: Locale, format?: DateFormats | string) => Date | false;
