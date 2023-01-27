/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  describe_date: {
    ' complete': ' fuldført',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'siden',
    'from now': 'fra nu',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is day': 'er {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'er fra {{dateTimeStart}} indtil {{dateTimeEnd}}',
    'is in month year': 'er om {{month}} {{year}}',
    'is in the last': 'er inden for den/det seneste {{describeInterval}}',
    'is in the year year': 'er i år {{year}}',
    'is interval ago': 'er {{interval}} siden',
    'is intervalStart intervalType for intervalEnd':
      'er {{intervalStart}} {{intervalType}} for {{intervalEnd}}',
    'is not null': 'er ikke null',
    'is on dateTime': 'er den {{dateTime}}',
    'is on or after': 'er på eller efter',
    'is previous unitLabel': 'er tidligere {{unitLabel}}',
    'is type unitLabel': 'er {{type}} {{unitLabel}}',
    next: 'næste',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nu',
    this: 'denne',
    'this startInterval to endInterval':
      'dette {{startInterval}} til {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'enhver værdi',
  },
  describe_is_item: {
    'is not value': 'er ikke {{value}}',
    'is value': 'er {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} til {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} fra {{lat}}, {{lon}}',
    'is anywhere': 'er hvor som helst',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°Ø',
    'lon degrees west': '{{lon}}°V',
  },
  describe_number: {
    'is in range range': 'er inden for området {{range}}',
    'is not in range range': 'er ikke inden for området {{range}}',
  },
  describe_string: {
    blank: 'tom',
    'contains value': 'indeholder {{value}}',
    'does not contain value': 'indeholder ikke {{value}}',
    'does not end with value': 'slutter ikke med {{value}}',
    'does not start with value': 'starter ikke med {{value}}',
    'ends with value': 'slutter med {{value}}',
    'starts with value': 'starter med {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'fod',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles',
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'December',
    February: 'Februar',
    January: 'Januar',
    July: 'Juli',
    June: 'Juni',
    March: 'Marts',
    May: 'Maj',
    November: 'November',
    October: 'Oktober',
    September: 'September',
  },
  get_unit_label: {
    'complete day': 'fuldført dag',
    'complete days': 'hele dage',
    'complete fiscal quarter': 'helt regnskabskvartal',
    'complete fiscal quarters': 'hele regnskabskvartaler',
    'complete fiscal year': 'helt regnskabsår',
    'complete fiscal years': 'hele regnskabsår',
    'complete hour': 'hel time',
    'complete hours': 'hele timer',
    'complete minute': 'helt minut',
    'complete minutes': 'hele minutter',
    'complete month': 'hel måned',
    'complete months': 'hele måneder',
    'complete quarter': 'helt kvartal',
    'complete quarters': 'hele kvartaler',
    'complete second': 'helt sekund',
    'complete seconds': 'hele sekunder',
    'complete week': 'hel uge',
    'complete weeks': 'hele uger',
    'complete year': 'helt år',
    'complete years': 'hele år',
    day: 'dag',
    days: 'dage',
    'fiscal quarter': 'regnskabskvartal',
    'fiscal quarters': 'regnskabskvartaler',
    'fiscal year': 'regnskabsår',
    'fiscal years': 'regnskabsår',
    hour: 'time',
    hours: 'timer',
    minute: 'minut',
    minutes: 'minutter',
    month: 'måned',
    months: 'måneder',
    quarter: 'kvartal',
    quarters: 'kvartaler',
    second: 'sekund',
    seconds: 'sekunder',
    week: 'uge',
    weeks: 'uger',
    year: 'år',
    years: 'år',
  },
  join_or: {
    'a or b': '{{a}} eller {{b}}',
  },
  summary: {
    'Value required': 'Værdi kræves',
  },
}

export const daDK = mergeLocaleObjects([], 'da-DK', resources)
