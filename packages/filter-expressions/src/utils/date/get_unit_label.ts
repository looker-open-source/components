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
import i18next from 'i18next'

const getPlural = (unit: string) => {
  const t = i18next.t.bind(i18next)
  const pluralUnits: { [key: string]: string } = {
    'fiscal year': t('fiscal years', { ns: 'get_unit_label' }),
    year: t('years', { ns: 'get_unit_label' }),
    'fiscal quarter': t('fiscal quarters', { ns: 'get_unit_label' }),
    quarter: t('quarters', { ns: 'get_unit_label' }),
    month: t('months', { ns: 'get_unit_label' }),
    week: t('weeks', { ns: 'get_unit_label' }),
    day: t('days', { ns: 'get_unit_label' }),
    hour: t('hours', { ns: 'get_unit_label' }),
    minute: t('minutes', { ns: 'get_unit_label' }),
    second: t('seconds', { ns: 'get_unit_label' }),
    'complete fiscal year': t('complete fiscal years', {
      ns: 'get_unit_label',
    }),
    'complete year': t('complete years', { ns: 'get_unit_label' }),
    'complete fiscal quarter': t('complete fiscal quarters', {
      ns: 'get_unit_label',
    }),
    'complete quarter': t('complete quarters', {
      ns: 'get_unit_label',
    }),
    'complete month': t('complete months', { ns: 'get_unit_label' }),
    'complete week': t('complete weeks', { ns: 'get_unit_label' }),
    'complete day': t('complete days', { ns: 'get_unit_label' }),
    'complete hour': t('complete hours', { ns: 'get_unit_label' }),
    'complete minute': t('complete minutes', { ns: 'get_unit_label' }),
    'complete second': t('complete seconds', { ns: 'get_unit_label' }),
  }
  return pluralUnits[unit] || unit
}

export const getUnitLabel = (unit: string, value = 1) =>
  value !== 1 ? getPlural(unit) : unit
