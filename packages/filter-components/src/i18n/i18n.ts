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
import { i18nResources } from '@looker/filter-expressions'
import type { Locale } from 'date-fns'
import i18next from 'i18next'
import merge from 'lodash/merge'
import { initReactI18next } from 'react-i18next'
import _availableLocales from '../locales/available_locales'
import en from './locales/en'
import type { FilterLocale } from './types'

export const availableLocales = _availableLocales

let dateLocale: Locale
const setDateLocale = (_dateLocale: Locale) => {
  dateLocale = _dateLocale
}
export const getDateLocale = () => {
  return dateLocale
}

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

/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInit(options: Partial<FilterLocale> = en) {
  const { dateLocale = en.dateLocale, locale = 'en', resources = {} } = options

  setDateLocale(dateLocale)

  const mergedResources = merge(resources, en.resources, i18nResources)

  await initOrUpdate({ locale, resources: mergedResources })
  return i18next
}
