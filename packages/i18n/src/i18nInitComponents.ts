/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import i18next from 'i18next'
import enDate from 'date-fns/locale/en-US'
import type { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import type { I18nStateWithDates } from './types'
import { i18nInitOptions, i18nUpdate } from './i18nInit'

export const i18nInitOptionsComponents: InitOptions = {
  ...i18nInitOptions,
  react: {
    useSuspense: false,
  },
}

// Set and get the current date locale, defaults to English/US
let dateLocale: Locale = enDate
const setDateLocale = (_dateLocale?: Locale) => {
  if (_dateLocale) {
    dateLocale = _dateLocale
  }
}
/**
 * @returns the current date-fns locale module (defaults to en-US)
 */
export const getDateLocale = () => {
  return dateLocale
}

/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInitComponents({
  locale,
  resources,
  dateLocale,
}: Partial<I18nStateWithDates>) {
  setDateLocale(dateLocale)
  if (i18next.isInitialized) {
    i18nUpdate({ locale, resources })
    return i18next
  } else {
    return i18next.use(initReactI18next).init({
      ...i18nInitOptionsComponents,
      lng: locale,
      resources,
    })
  }
}
