/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { I18nState } from '../../utils'

const resources = {
  describe_date: {
    ' complete': ' tamamla',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'önce',
    'from now': 'sonra',
    'is any time': 'herhangi bir zaman',
    'is before': 'şu tarihten önce:',
    'is day': '{{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'şu tarihten: {{dateTimeStart}} şu tarihe kadar: {{dateTimeEnd}}',
    'is in month year': '{{month}}{{year}} tarihinde',
    'is in the last': 'geçmiş şu sürede: {{describeInterval}}',
    'is in the year year': 'şu yılda: {{year}}',
    'is interval ago': '{{interval}} önce',
    'is intervalStart intervalType for intervalEnd':
      '{{intervalEnd}} için {{intervalStart}} {{intervalType}}',
    'is not null': 'değer içeriyor',
    'is on dateTime': 'şu tarihte: {{dateTime}}',
    'is on or after': 'şu tarihte veya şu tarihten sonra:',
    'is previous unitLabel': 'önceki {{unitLabel}}',
    'is type unitLabel': '{{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} şimdi',
    'this startInterval to endInterval':
      'bu {{startInterval}} - {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Nisan',
    August: 'Ağustos',
    December: 'Aralık',
    February: 'Şubat',
    January: 'Ocak',
    July: 'Temmuz',
    June: 'Haziran',
    March: 'Mart',
    May: 'May',
    November: 'Kasım',
    October: 'Ekim',
    September: 'Eylül',
  },
  get_unit_label: {
    'complete day': 'tam gün',
    'complete days': 'tam gün',
    'complete fiscal quarter': 'tam mali çeyrek',
    'complete fiscal quarters': 'tam mali çeyrek',
    'complete fiscal year': 'tam mali yıl',
    'complete fiscal years': 'tam mali yıl',
    'complete hour': 'tam saat',
    'complete hours': 'tam saat',
    'complete minute': 'tam dakika',
    'complete minutes': 'tam dakika',
    'complete month': 'tam ay',
    'complete months': 'tam ay',
    'complete quarter': 'tam çeyrek',
    'complete quarters': 'tam çeyrek',
    'complete second': 'tam saniye',
    'complete seconds': 'tam saniye',
    'complete week': 'tam hafta',
    'complete weeks': 'tam hafta',
    'complete year': 'tam yıl',
    'complete years': 'tam yıl',
    day: 'gün',
    days: 'gün',
    'fiscal quarter': 'mali çeyrek',
    'fiscal quarters': 'mali çeyrek',
    'fiscal year': 'mali yıl',
    'fiscal years': 'mali yıl',
    hour: 'saat',
    hours: 'saat',
    minute: 'dakika',
    minutes: 'dakika',
    month: 'ay',
    months: 'ay',
    quarter: 'çeyrek',
    quarters: 'çeyrek',
    second: 'saniye',
    seconds: 'saniye',
    week: 'hafta',
    weeks: 'hafta',
    year: 'yıl',
    years: 'yıl',
  },
  summary: {
    'Value required': 'Değer gerekli',
  },
}

export const trTR: I18nState = {
  locale: 'tr-TR',
  resources: { 'tr-TR': resources },
}