/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { i18nUpdate } from '@looker/components'
import type { I18nState } from '@looker/filter-expressions'
import enDate from 'date-fns/locale/en-US'
import i18next from 'i18next'
import merge from 'lodash/merge'
import { initReactI18next } from 'react-i18next'
import { en } from '../locales'

export const initOrUpdate = async ({ locale, resources }: I18nState) => {
  if (i18next.isInitialized) {
    i18nUpdate({ locale, resources })
    return i18next
  } else {
    return i18next.use(initReactI18next).init({
      nsSeparator: false,
      keySeparator: false,
      fallbackLng: 'en',
      lng: locale,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      // add optional resources from args
      resources,
      react: { useSuspense: false },
    })
  }
}

// Set and get the current date locale, defaults to English/US
let dateLocale: Locale = enDate
const setDateLocale = (_dateLocale: Locale) => {
  dateLocale = _dateLocale
}
export const getDateLocale = () => {
  return dateLocale
}

export type I18nStateWithDates = I18nState & {
  /**
   * Locale from date-fns
   */
  dateLocale: Locale
}

/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInit({
  locale = 'en',
  resources,
  dateLocale,
}: I18nStateWithDates = en) {
  setDateLocale(dateLocale)
  // Merge with English in case there are translations missing
  // from the resources passed in
  const mergedResources = merge(resources, en.resources)

  await initOrUpdate({ locale, resources: mergedResources })
  return i18next
}
