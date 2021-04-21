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

import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nResources } from './resources'
import { I18nOptions } from './types'

export const i18nInitOptions: InitOptions = {
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  missingKeyHandler: (languages: string[], ns: string, key: string) => {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        `Missing i18n key (${languages.join(', ')}): "${key}" in ${ns}`
      )
    }
  },
  react: {
    useSuspense: false,
  },
  resources: i18nResources,
  saveMissing: true,
}

export const i18nInit = (initOptions: Partial<InitOptions>) => {
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({ ...i18nInitOptions, ...initOptions })
}

export const i18nUpdateResources = ({
  lng,
  resources = i18nResources,
}: Pick<InitOptions, 'lng' | 'resources'>) => {
  if (!i18next.isInitialized) {
    i18nInit({ lng, resources })
  } else if (resources) {
    Object.keys(resources).forEach((lng: string) => {
      const allNamespaces = resources[lng]
      Object.keys(allNamespaces).forEach((ns: string) => {
        i18next.addResourceBundle(lng, ns, allNamespaces[ns])
      })
    })
  }
  if (lng && lng !== i18next.language) {
    i18next.changeLanguage(lng)
  }
}

export const i18nUpdateGetResources = async ({
  locale = 'en',
  getLocaleResource,
}: I18nOptions) => {
  if (getLocaleResource) {
    const localeResource = await getLocaleResource(locale)
    const mergedResources = {
      ...i18nResources,
      [locale]: { ...i18nResources[locale], ...localeResource },
    }
    i18nUpdateResources({
      lng: locale,
      resources: mergedResources,
    })
  }
}
