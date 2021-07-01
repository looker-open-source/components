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
import type { Resource } from 'i18next'
import i18next from 'i18next'
import merge from 'lodash/merge'
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

export const i18nResources = {
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
}

export interface I18nState {
  /**
   * A dictionary of namespaces containing key value pairs of translations
   */
  resources: Resource
  /**
   * The current locale value
   */
  locale: string
}

/**
 * Directly initialize the localization instance
 */
export const i18nInit = async ({
  resources,
  locale = 'en',
}: Partial<I18nState> = {}) => {
  await i18next.init({
    nsSeparator: false,
    keySeparator: false,
    fallbackLng: 'en',
    lng: locale,
    interpolation: {
      escapeValue: false,
    },
    // add optional resources from args
    resources: merge(i18nResources, resources),
  })
  return i18next
}
