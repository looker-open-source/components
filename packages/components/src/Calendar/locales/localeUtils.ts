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

import { LocaleUtils } from 'react-day-picker'
import { LocaleCodes } from '../../utils/i18n'
import { ko } from './ko'
import { en } from './en'
import { ar } from './ar'
import { de } from './de'
import { es } from './es'
import { fr } from './fr'
import { it } from './it'
import { ja } from './ja'
import { nl } from './nl'
import { pl } from './pl'
import { ptBr } from './pt-br'
import { pt } from './pt'
import { ru } from './ru'
import { sv } from './sv'
import { tr } from './tr'
import { zhCn } from './zh-cn'
import { zhTw } from './zh-tw'

export interface LocaleSettings {
  weekdays: string[]
  weekdaysShort: string[]
  months: string[]
  firstDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  localizeYear: (year: number) => string
}

const locales: { [key in LocaleCodes]: LocaleSettings } = {
  ar,
  de,
  en,
  es,
  fr,
  it,
  ja,
  ko,
  nl,
  pl,
  pt,
  'pt-br': ptBr,
  ru,
  sv,
  tr,
  'zh-cn': zhCn,
  'zh-tw': zhTw,
}

function formatDay(d: Date, localeCode = 'en' as LocaleCodes) {
  const locale = locales[localeCode]
  return `${locale.weekdays[d.getDay()]}, ${d.getDate()} ${
    locale.months[d.getMonth()]
  } ${d.getFullYear()}`
}

function formatMonthTitle(d: Date, localeCode = 'en' as LocaleCodes) {
  const locale = locales[localeCode]
  const monthTitle = `${locale.months[d.getMonth()]} ${locale.localizeYear(
    d.getFullYear()
  )}`
  return monthTitle
}

function formatWeekdayShort(i: number, localeCode: LocaleCodes) {
  const locale = locales[localeCode]
  return locale.weekdaysShort[i]
}

function formatWeekdayLong(i: number, localeCode: LocaleCodes) {
  return locales[localeCode].weekdaysShort[i]
}

function getFirstDayOfWeek(localeCode: LocaleCodes) {
  return locales[localeCode].firstDay
}

export const localeUtils = {
  ...LocaleUtils,
  formatDay,
  formatMonthTitle,
  formatWeekdayLong,
  formatWeekdayShort,
  getFirstDayOfWeek,
}
