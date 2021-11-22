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
    ago: 'siden',
    'from now': 'fra nå',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is day': 'er {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'er fra {{dateTimeStart}} til {{dateTimeEnd}}',
    'is in month year': 'er i {{month}} {{year}}',
    'is in the last': 'er i den siste {{describeInterval}}',
    'is interval ago': 'er {{interval}} siden',
    'is in the year year': 'er i år {{year}}',
    'is intervalStart intervalType for intervalEnd':
      'er {{intervalStart}} {{intervalType}} for {{intervalEnd}}',
    'is not null': 'er ikke null',
    'is on dateTime': 'er på {{dateTime}}',
    'is on or after': 'er på eller etter',
    'is previous unitLabel': 'er forrige {{unitLabel}}',
    'is type unitLabel': 'er {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nå',
    'this startInterval to endInterval':
      'denne {{startInterval}} til {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'Desember',
    February: 'Februar',
    January: 'Januar',
    July: 'Juli',
    June: 'Juni',
    March: 'Mars',
    May: 'Mai',
    November: 'November',
    October: 'Oktober',
    September: 'September',
  },
  get_unit_label: {
    'complete days': 'hele dager',
    'complete fiscal quarters': 'hele regnskapskvartaler',
    'complete fiscal years': 'hele regnskapsår',
    'complete hours': 'hele timer',
    'complete minutes': 'hele minutter',
    'complete months': 'hele måneder',
    'complete quarters': 'hele kvartaler',
    'complete seconds': 'hele sekunder',
    'complete weeks': 'hele uker',
    'complete years': 'hele år',
    days: 'dager',
    'fiscal quarters': 'regnskapskvartaler',
    'fiscal years': 'regnskapsår',
    hours: 'timer',
    minutes: 'minutter',
    months: 'måneder',
    quarters: 'kvartaler',
    seconds: 'sekunder',
    weeks: 'uker',
    years: 'år',
  },
  summary: {
    'Value required': 'Verdi må angis',
  },
}
