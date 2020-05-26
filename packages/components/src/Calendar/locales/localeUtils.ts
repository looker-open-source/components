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

export interface LocaleSettings {
  weekdays: string[]
  weekdaysShort: string[]
  months: string[]
  firstDay: 0 | 1
}

const WEEKDAYS_LONG = {
  en: en.weekdays,
  ko: ko.weekdays,
}
const WEEKDAYS_SHORT = {
  en: en.weekdaysShort,
  ko: ko.weekdaysShort,
}
const MONTHS = {
  en: en.months,
  ko: ko.months,
}

const FIRST_DAY = {
  en: en.firstDay,
  ko: ko.firstDay,
}

function formatDay(d: any, locale = 'en' as LocaleCodes) {
  return `${WEEKDAYS_LONG[locale][d.getDay()]}, ${d.getDate()} ${
    MONTHS[locale][d.getMonth()]
  } ${d.getFullYear()}`
}

function formatMonthTitle(d: any, locale = 'en' as LocaleCodes) {
  return `${MONTHS[locale][d.getMonth()]} ${d.getFullYear()}`
}

function formatWeekdayShort(i: number, locale: LocaleCodes) {
  return WEEKDAYS_SHORT[locale][i]
}

function formatWeekdayLong(i: number, locale: LocaleCodes) {
  return WEEKDAYS_SHORT[locale][i]
}

function getFirstDayOfWeek(locale: LocaleCodes) {
  return FIRST_DAY[locale]
}

export const localeUtils = {
  ...LocaleUtils,
  formatDay,
  formatMonthTitle,
  formatWeekdayLong,
  formatWeekdayShort,
  getFirstDayOfWeek,
}
