/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import i18next from 'i18next'
import type { InitOptions } from 'i18next'
import type { I18nState } from './types'

export const i18nInitOptions: InitOptions = {
  fallbackLng: 'en',
  initImmediate: false,
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
