/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import i18next, { InitOptions, Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useEffect, useState } from 'react'
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

export const useI18n = ({
  locale = 'en',
  resources = i18nResources,
}: UseI18nProps) => {
  const [isInitialized, setInitialized] = useState(i18next.isInitialized)
  if (!isInitialized) {
    i18nInit({ ...i18nInitOptions, lng: locale, resources })
  }

  useEffect(() => {
    const handleInitialized = () => {
      setInitialized(true)
    }
    if (!isInitialized) {
      i18next.on('initialized', handleInitialized)
    } else {
      if (resources) {
        Object.keys(resources).forEach((lng: string) => {
          const allNs = resources[lng]
          Object.keys(allNs).forEach((ns: string) => {
            i18next.addResourceBundle(lng, ns, allNs[ns])
          })
        })
      }
      if (locale && locale !== i18next.language) {
        i18next.changeLanguage(locale)
      }
    }
    return () => {
      i18next.off('initialized', handleInitialized)
    }
  }, [locale, resources, isInitialized])

  return isInitialized
}
