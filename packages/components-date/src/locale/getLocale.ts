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

import arSA from 'date-fns/locale/ar-SA'
import cs from 'date-fns/locale/cs'
import da from 'date-fns/locale/da'
import de from 'date-fns/locale/de'
import enUS from 'date-fns/locale/en-US'
import es from 'date-fns/locale/es'
import fi from 'date-fns/locale/fi'
import frCA from 'date-fns/locale/fr-CA'
import fr from 'date-fns/locale/fr'
import he from 'date-fns/locale/he'
import hi from 'date-fns/locale/hi'
import it from 'date-fns/locale/it'
import ja from 'date-fns/locale/ja'
import ko from 'date-fns/locale/ko'
import lt from 'date-fns/locale/lt'
import nb from 'date-fns/locale/nb'
import nl from 'date-fns/locale/nl'
import pl from 'date-fns/locale/pl'
import ptBR from 'date-fns/locale/pt-BR'
import pt from 'date-fns/locale/pt'
import ru from 'date-fns/locale/ru'
import sv from 'date-fns/locale/sv'
import th from 'date-fns/locale/th'
import tr from 'date-fns/locale/tr'
import uk from 'date-fns/locale/uk'
import zhCN from 'date-fns/locale/zh-CN'
import zhTW from 'date-fns/locale/zh-TW'

export const dateFnLocaleMap = {
  'ar-SA': arSA,
  'cs-CZ': cs,
  'da-DK': da,
  'de-DE': de,
  en: enUS,
  'es-ES': es,
  'fi-FI': fi,
  'fr-CA': frCA,
  'fr-FR': fr,
  'he-IL': he,
  'hi-IN': hi,
  'it-IT': it,
  'ja-JP': ja,
  'ko-KR': ko,
  'lt-LT': lt,
  'nb-NO': nb,
  'nl-NL': nl,
  'pl-PL': pl,
  'pt-BR': ptBR,
  'pt-PT': pt,
  'ru-RU': ru,
  'sv-SE': sv,
  'th-TH': th,
  'tr-TR': tr,
  'uk-UA': uk,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
} as const

export type LocaleCodes = keyof typeof dateFnLocaleMap

const isLocaleCode = (str: string): str is LocaleCodes => {
  return str in dateFnLocaleMap
}

/**
 * Get date-fns locale from locale string
 * If possible, import locale directly from date-fns to save bundle size
 */
export const getLocale = (locale: string) => {
  return isLocaleCode(locale) ? dateFnLocaleMap[locale] : enUS
}
