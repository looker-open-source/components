/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
