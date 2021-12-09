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
    ago: 'sedan',
    'from now': 'från nu',
    'is any time': 'är när som helst',
    'is before': 'är före',
    'is day': 'är {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'är från {{dateTimeStart}} till och med {{dateTimeEnd}}',
    'is in month year': 'är om {{month}} {{year}}',
    'is in the last': 'är under det sista {{describeInterval}}',
    'is interval ago': 'är {{interval}} sedan',
    'is in the year year': 'är under år {{year}}',
    'is intervalStart intervalType for intervalEnd':
      'är {{intervalStart}} {{intervalType}} för {{intervalEnd}}',
    'is not null': 'är inte null',
    'is on dateTime': 'är den {{dateTime}}',
    'is on or after': 'är på eller efter',
    'is previous unitLabel': 'är föregående {{unitLabel}}',
    'is type unitLabel': 'är {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nu',
    'this startInterval to endInterval':
      'detta {{startInterval}} till {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'April',
    August: 'Augusti',
    December: 'December',
    February: 'Februari',
    January: 'Januari',
    July: 'Juli',
    June: 'Juni',
    March: 'Mars',
    May: 'Maj',
    November: 'November',
    October: 'Oktober',
    September: 'September',
  },
  get_unit_label: {
    'complete days': 'hela dagar',
    'complete fiscal quarters': 'hela räkenskapskvartal',
    'complete fiscal years': 'hela räkenskapsår',
    'complete hours': 'hela timmar',
    'complete minutes': 'hela minuter',
    'complete months': 'hela månader',
    'complete quarters': 'hela kvartal',
    'complete seconds': 'hela sekunder',
    'complete weeks': 'hela veckor',
    'complete years': 'hela år',
    days: 'dagar',
    'fiscal quarters': 'räkenskapskvartal',
    'fiscal years': 'räkenskapsår',
    hours: 'timmar',
    minutes: 'minuter',
    months: 'månader',
    quarters: 'kvartal',
    seconds: 'sekunder',
    weeks: 'veckor',
    years: 'år',
  },
  summary: {
    'Value required': 'Värde krävs',
  },
}

export const svSE: I18nState = {
  locale: 'sv-SE',
  resources: { 'sv-SE': resources },
}
