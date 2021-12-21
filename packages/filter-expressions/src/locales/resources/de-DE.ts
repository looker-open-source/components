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
    ago: 'her',
    'from now': 'ab jetzt',
    'is any time': 'ist jederzeit',
    'is before': 'ist vor dem',
    'is day': 'ist {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'ist vom {{dateTimeStart}} bis zum {{dateTimeEnd}}',
    'is in month year': 'ist in {{month}} {{year}}',
    'is in the last': 'ist in den letzten {{describeInterval}}',
    'is in the year year': 'ist im Jahr {{year}}',
    'is interval ago': 'ist {{interval}} her',
    'is intervalStart intervalType for intervalEnd':
      'ist {{intervalStart}} {{intervalType}} für {{intervalEnd}}',
    'is not null': 'ist nicht null',
    'is on dateTime': 'ist am {{dateTime}}',
    'is on or after': 'ist am oder nach dem',
    'is previous unitLabel': 'ist vorherige/r/s {{unitLabel}}',
    'is type unitLabel': 'ist {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} jetzt',
    'this startInterval to endInterval':
      'diese/r/s {{startInterval}} bis {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'Dezember',
    February: 'Februar',
    January: 'Januar',
    July: 'Juli',
    June: 'Juni',
    March: 'März',
    May: 'Mai',
    November: 'November',
    October: 'Oktober',
    September: 'September',
  },
  get_unit_label: {
    'complete days': 'vollständige Tage',
    'complete fiscal quarters': 'vollständige Geschäftsquartale',
    'complete fiscal years': 'vollständige Geschäftsjahre',
    'complete hours': 'vollständige Stunden',
    'complete minutes': 'vollständige Minuten',
    'complete months': 'vollständige Monate',
    'complete quarters': 'vollständige Quartale',
    'complete seconds': 'vollständige Sekunden',
    'complete weeks': 'vollständige Wochen',
    'complete years': 'vollständige Jahre',
    days: 'Tage',
    'fiscal quarters': 'Geschäftsquartale',
    'fiscal years': 'Geschäftsjahre',
    hours: 'Stunden',
    minutes: 'Minuten',
    months: 'Monate',
    quarters: 'Quartale',
    seconds: 'Sekunden',
    weeks: 'Wochen',
    years: 'Jahre',
  },
  summary: {
    'Value required': 'Wert erforderlich',
  },
}

export const deDE: I18nState = {
  locale: 'de-DE',
  resources: { 'de-DE': resources },
}
