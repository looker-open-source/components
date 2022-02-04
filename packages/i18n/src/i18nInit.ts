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
import type { InitOptions } from 'i18next'
import type { I18nState } from './types'

export const i18nInitOptions: InitOptions = {
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: 'en',
  missingKeyHandler: (languages: string[], ns: string, key: string) => {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        `Missing i18n key (${languages.join(', ')}): "${key}" in ${ns}`
      )
    }
  },
  nsSeparator: false,
  saveMissing: true,
}

export const i18nUpdate = ({ resources, locale }: Partial<I18nState>) => {
  if (resources) {
    Object.keys(resources).forEach((lng: string) => {
      const allNamespaces = resources[lng]
      Object.keys(allNamespaces).forEach((ns: string) => {
        i18next.addResourceBundle(lng, ns, allNamespaces[ns])
      })
    })
  }
  if (locale && locale !== i18next.language) {
    i18next.changeLanguage(locale)
  }
}

export async function i18nInit(options: I18nState) {
  if (i18next.isInitialized) {
    i18nUpdate(options)
  }
  i18next.init({
    ...i18nInitOptions,
    lng: options.locale,
    // add optional resources from args
    resources: options.resources,
  })
  return i18next
}
