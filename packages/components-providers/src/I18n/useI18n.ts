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

import type { InitOptions, Resource } from 'i18next'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useEffect } from 'react'
import { i18nResources } from './resources'

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

export const i18nInit = async (initOptions = i18nInitOptions) =>
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(initOptions)

export interface UseI18nProps {
  /**
   * @default en
   */
  locale?: string
  resources?: Resource
}

export const i18nUpdate = ({ resources, locale }: UseI18nProps) => {
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

export const useI18n = ({
  locale = 'en',
  resources = i18nResources,
}: UseI18nProps) => {
  if (!i18next.isInitialized) {
    i18nInit({ ...i18nInitOptions, lng: locale, resources }).catch(err =>
      // eslint-disable-next-line no-console
      console.error(err)
    )
  }

  useEffect(() => {
    const update = () => i18nUpdate({ locale, resources })
    if (i18next.isInitialized) {
      update()
    } else {
      i18next.on('initialized', update)
    }
    return () => {
      i18next.off('initialized', update)
    }
  }, [locale, resources])
}
