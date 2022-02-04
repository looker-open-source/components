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
    ' complete': ' complete',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'ago',
    'from now': 'from now',
    'is any time': 'is any time',
    'is before': 'is before',
    'is day': 'is {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'is from {{dateTimeStart}} until {{dateTimeEnd}}',
    'is in month year': 'is in {{month}} {{year}}',
    'is in the last': 'is in the last {{describeInterval}}',
    'is in the year year': 'is in the year {{year}}',
    'is interval ago': 'is {{interval}} ago',
    'is intervalStart intervalType for intervalEnd':
      'is {{intervalStart}} {{intervalType}} for {{intervalEnd}}',
    'is not null': 'is not null',
    'is on dateTime': 'is on {{dateTime}}',
    'is on or after': 'is on or after',
    'is previous unitLabel': 'is previous {{unitLabel}}',
    'is type unitLabel': 'is {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} now',
    'this startInterval to endInterval':
      'this {{startInterval}} to {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'December',
    February: 'February',
    January: 'January',
    July: 'July',
    June: 'June',
    March: 'March',
    May: 'May',
    November: 'November',
    October: 'October',
    September: 'September',
  },
  get_unit_label: {
    'complete day': 'complete day',
    'complete days': 'complete days',
    'complete fiscal quarter': 'complete fiscal quarter',
    'complete fiscal quarters': 'complete fiscal quarters',
    'complete fiscal year': 'complete fiscal year',
    'complete fiscal years': 'complete fiscal years',
    'complete hour': 'complete hour',
    'complete hours': 'complete hours',
    'complete minute': 'complete minute',
    'complete minutes': 'complete minutes',
    'complete month': 'complete month',
    'complete months': 'complete months',
    'complete quarter': 'complete quarter',
    'complete quarters': 'complete quarters',
    'complete second': 'complete second',
    'complete seconds': 'complete seconds',
    'complete week': 'complete week',
    'complete weeks': 'complete weeks',
    'complete year': 'complete year',
    'complete years': 'complete years',
    day: 'day',
    days: 'days',
    'fiscal quarter': 'fiscal quarter',
    'fiscal quarters': 'fiscal quarters',
    'fiscal year': 'fiscal year',
    'fiscal years': 'fiscal years',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    month: 'month',
    months: 'months',
    quarter: 'quarter',
    quarters: 'quarters',
    second: 'second',
    seconds: 'seconds',
    week: 'week',
    weeks: 'weeks',
    year: 'year',
    years: 'years',
  },
  summary: {
    'Value required': 'Value required',
  },
}

export const en: I18nState = {
  locale: 'en',
  resources: { en: resources },
}
