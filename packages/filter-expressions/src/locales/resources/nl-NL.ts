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
    ago: 'geleden',
    'from now': 'vanaf nu',
    'is any time': 'is elk tijdstip',
    'is before': 'is voor',
    'is day': 'is {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'is van {{dateTimeStart}} tot {{dateTimeEnd}}',
    'is in month year': 'is in {{month}} {{year}}',
    'is in the last': 'is in de laatste {{describeInterval}}',
    'is in the year year': 'is in het jaar {{year}}',
    'is interval ago': 'is {{interval}} geleden',
    'is intervalStart intervalType for intervalEnd':
      'is {{intervalStart}} {{intervalType}} voor {{intervalEnd}}',
    'is not null': 'is geldig',
    'is on dateTime': 'is op/om {{dateTime}}',
    'is on or after': 'is op of na',
    'is previous unitLabel': 'is een {{unitLabel}} eerder',
    'is type unitLabel': 'is {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nu',
    'this startInterval to endInterval':
      'deze {{startInterval}} tot {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'April',
    August: 'Augustus',
    December: 'December',
    February: 'Februari',
    January: 'Januari',
    July: 'Juli',
    June: 'Juni',
    March: 'Maart',
    May: 'Mei',
    November: 'November',
    October: 'Oktober',
    September: 'September',
  },
  get_unit_label: {
    'complete days': 'hele dagen',
    'complete fiscal quarters': 'hele fiscale kwartalen',
    'complete fiscal years': 'hele fiscale jaren',
    'complete hours': 'hele uren',
    'complete minutes': 'hele minuten',
    'complete months': 'hele maanden',
    'complete quarters': 'hele kwartalen',
    'complete seconds': 'hele seconden',
    'complete weeks': 'hele weken',
    'complete years': 'hele jaren',
    days: 'dagen',
    'fiscal quarters': 'fiscale kwartalen',
    'fiscal years': 'fiscale jaren',
    hours: 'uren',
    minutes: 'minuten',
    months: 'maanden',
    quarters: 'kwartalen',
    seconds: 'seconden',
    weeks: 'weken',
    years: 'jaren',
  },
  summary: {
    'Value required': 'Waarde is vereist',
  },
}

export const nlNL: I18nState = {
  locale: 'nl-NL',
  resources: { 'nl-NL': resources },
}
