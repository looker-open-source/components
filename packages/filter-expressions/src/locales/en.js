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
export default {
  describe_date: {
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
    'is interval ago': 'is {{interval}} ago',
    'is in the year year': 'is in the year {{year}}',
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
    'complete days': 'complete days',
    'complete fiscal quarters': 'complete fiscal quarters',
    'complete fiscal years': 'complete fiscal years',
    'complete hours': 'complete hours',
    'complete minutes': 'complete minutes',
    'complete months': 'complete months',
    'complete quarters': 'complete quarters',
    'complete seconds': 'complete seconds',
    'complete weeks': 'complete weeks',
    'complete years': 'complete years',
    days: 'days',
    'fiscal quarters': 'fiscal quarters',
    'fiscal years': 'fiscal years',
    hours: 'hours',
    minutes: 'minutes',
    months: 'months',
    quarters: 'quarters',
    seconds: 'seconds',
    weeks: 'weeks',
    years: 'years',
  },
  summary: {
    'Value required': 'Value required',
  },
}
