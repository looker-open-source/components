/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import i18next from 'i18next'
import { useTranslation as useTranslationOrig } from 'react-i18next'
import type { Namespace, UseTranslationOptions } from 'react-i18next'
import { i18nInitComponents } from './i18nInitComponents'
import type { I18nStateWithDates } from './types'

// Check whether all namespaces in the en locale are already loaded to the i18next instance
const enResourcesMissing = (en: Partial<I18nStateWithDates>) => {
  const nameSpaceArr = en.resources && Object.keys(en.resources)
  return nameSpaceArr?.some(ns => !i18next.hasResourceBundle('en', ns))
}

/**
 * A base hook that each package can use to create its own implementation of useTranslation.
 * @param en the package-specific fallback translations (English) are loaded to the i18next instance.
 * The remaining arguments and the response follow useTranslation from react-i18next
 */
export const useTranslationBase = <N extends Namespace>(
  en: Partial<I18nStateWithDates>,
  ns?: N,
  options?: UseTranslationOptions
) => {
  const isEn = !i18next.language || i18next.language === 'en'
  if (isEn && enResourcesMissing(en)) {
    i18nInitComponents(en)
  }
  return useTranslationOrig(ns, options)
}
