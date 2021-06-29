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
import {
  i18nUpdate,
  i18nResources as componentsResources,
} from '@looker/components'
import type { I18nState } from '@looker/filter-expressions'
import { i18nResources as expressionResources } from '@looker/filter-expressions'
import i18next from 'i18next'
import merge from 'lodash/merge'
import { initReactI18next } from 'react-i18next'
import _availableLocales from '../locales/available_locales'
import deDE from '../locales/de-DE'
import en from '../locales/en'
import esES from '../locales/es-ES'
import frFR from '../locales/fr-FR'
import itIT from '../locales/it-IT'
import jaJP from '../locales/ja-JP'
import koKR from '../locales/ko-KR'
import nlNL from '../locales/nl-NL'
import plPL from '../locales/pl-PL'
import ptBR from '../locales/pt-BR'
import ptPT from '../locales/pt-PT'
import ruRU from '../locales/ru-RU'
import svSE from '../locales/sv-SE'
import trTR from '../locales/tr-TR'
import zhCN from '../locales/zh-CN'
import zhTW from '../locales/zh-TW'

export const availableLocales = _availableLocales

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

// Include filter-expression translations in filter-components translations
export const i18nResources = merge(componentsResources, expressionResources, {
  'de-DE': deDE,
  en,
  'es-ES': esES,
  'fr-FR': frFR,
  'it-IT': itIT,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'nl-NL': nlNL,
  'pl-PL': plPL,
  'pt-BR': ptBR,
  'pt-PT': ptPT,
  'ru-RU': ruRU,
  'sv-SE': svSE,
  'tr-TR': trTR,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
})

/**
 * Directly initialize the localization instance
 * (not needed if using ComponentsProvider)
 */
export async function i18nInit({
  locale = 'en',
  resources,
}: Partial<I18nState> = {}) {
  await initOrUpdate({ locale, resources: merge(i18nResources, resources) })
  return i18next
}
