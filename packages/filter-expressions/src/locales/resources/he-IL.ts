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
import type { I18nState } from '../../utils'

const resources = {
  describe_date: {
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'לשעבר',
    'from now': 'מעתה',
    'is any time': 'מועד כלשהו',
    'is before': 'לפני',
    'is day': 'הוא {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'הוא מ-{{dateTimeStart}} עד {{dateTimeEnd}}',
    'is in month year': 'הוא ב-{{month}} {{year}}',
    'is in the last': 'האחרון {{describeInterval}}',
    'is in the year year': 'הוא בשנת {{year}}',
    'is interval ago': 'הוא ב {{interval}} שעבר',
    'is intervalStart intervalType for intervalEnd':
      'ב {{intervalStart}} {{intervalType}} ל {{intervalEnd}}',
    'is not null': 'אינו Null',
    'is on dateTime': 'הוא ב-{{dateTime}}',
    'is on or after': 'אחרי או ב-',
    'is previous unitLabel': 'קדם ל {{unitLabel}}',
    'is type unitLabel': 'ב {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} כעת',
    'this startInterval to endInterval':
      'הזה {{startInterval}} ל {{endInterval}}',
    'value complete unitLabel': '{{value}} {{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'אפריל',
    August: 'אוגוסט',
    December: 'דצמבר',
    February: 'פברואר',
    January: 'ינואר',
    July: 'יולי',
    June: 'יוני',
    March: 'מרץ',
    May: 'מאי',
    November: 'נובמבר',
    October: 'אוקטובר',
    September: 'ספטמבר',
  },
  get_unit_label: {
    'complete days': 'ימים מלאים',
    'complete fiscal quarters': 'רבעונים פיסקליים מלאים',
    'complete fiscal years': 'שנים פיסקליות מלאות',
    'complete hours': 'שעות מלאות',
    'complete minutes': 'דקות מלאות',
    'complete months': 'חודשים מלאים',
    'complete quarters': 'רבעונים מלאים',
    'complete seconds': 'שניות מלאות',
    'complete weeks': 'שבועות מלאים',
    'complete years': 'שנים מלאות',
    days: 'ימים',
    'fiscal quarters': 'רבעונים פיסקליים',
    'fiscal years': 'שנים פיסקליות',
    hours: 'שעות',
    minutes: 'דקות',
    months: 'חודשים',
    quarters: 'רבעונים',
    seconds: 'שניות',
    weeks: 'שבועות',
    years: 'שנים',
  },
  summary: {
    'Value required': 'נדרש ערך',
  },
}

export const heIL: I18nState = {
  locale: 'he-IL',
  resources: { 'he-IL': resources },
}
