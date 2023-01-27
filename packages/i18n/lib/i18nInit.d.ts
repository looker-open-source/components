/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { InitOptions } from 'i18next';
import type { I18nState } from './types';
export declare const i18nInitOptions: InitOptions;
export declare const i18nUpdate: ({ resources, locale }: Partial<I18nState>) => void;
export declare function i18nInit(options: I18nState): Promise<import("i18next").i18n>;
