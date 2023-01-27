/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { Namespace, UseTranslationOptions } from 'react-i18next';
import type { I18nStateWithDates } from './types';
/**
 * A base hook that each package can use to create its own implementation of useTranslation.
 * @param en the package-specific fallback translations (English) are loaded to the i18next instance.
 * The remaining arguments and the response follow useTranslation from react-i18next
 */
export declare const useTranslationBase: <N extends Namespace<string>>(en: Partial<I18nStateWithDates>, ns?: N | undefined, options?: UseTranslationOptions | undefined) => import("react-i18next").UseTranslationResponse<N>;
