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
    ' complete': ' voltooid',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'geleden',
    'from now': 'vanaf nu',
    'is any time': 'alles',
    'is before': 'vóór datum',
    'is day': 'is {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'van {{dateTimeStart}} tot {{dateTimeEnd}}',
    'is in month year': 'is in {{month}} {{year}}',
    'is in the last': 'is in de afgelopen {{describeInterval}}',
    'is in the year year': 'specifiek jaar {{year}}',
    'is interval ago': 'is {{interval}} geleden',
    'is intervalStart intervalType for intervalEnd':
      'is {{intervalStart}} {{intervalType}} voor {{intervalEnd}}',
    'is not null': 'geldige datums',
    'is on dateTime': 'is op/om {{dateTime}}',
    'is on or after': 'op of na datum',
    'is previous unitLabel': 'is een {{unitLabel}} eerder',
    'is type unitLabel': 'is {{type}} {{unitLabel}}',
    next: 'volgende',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nu',
    this: 'deze',
    'this startInterval to endInterval':
      'deze {{startInterval}} tot {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'elke waarde',
  },
  describe_is_item: {
    'is not value': 'is niet {{value}}',
    'is value': 'is {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} tot {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} van {{lat}}, {{lon}}',
    'is anywhere': 'overal',
    'is not null': 'geldige datums',
    'is null': 'ongeldige datums',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°Z',
    'lon degrees east': '{{lon}}°O',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': 'datumbereik (van/tot) {{range}}',
    'is not in range range': 'buiten datumbereik (van/tot) {{range}}',
  },
  describe_string: {
    blank: 'leeg',
    'contains value': 'bevat {{value}}',
    'does not contain value': 'bevat geen {{value}}',
    'does not end with value': 'eindigt niet met {{value}}',
    'does not start with value': 'begint niet met {{value}}',
    'ends with value': 'eindigt met {{value}}',
    'starts with value': 'begint met {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'feet',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'mijl',
  },
  get_months: {
    April: 'april',
    August: 'augustus',
    December: 'december',
    February: 'februari',
    January: 'januari',
    July: 'juli',
    June: 'juni',
    March: 'maart',
    May: 'mei',
    November: 'november',
    October: 'oktober',
    September: 'september',
  },
  get_unit_label: {
    'complete day': 'hele dag',
    'complete days': 'hele dagen',
    'complete fiscal quarter': 'hele fiscale kwartaal',
    'complete fiscal quarters': 'hele fiscale kwartalen',
    'complete fiscal year': 'hele fiscale jaar',
    'complete fiscal years': 'hele fiscale jaren',
    'complete hour': 'hele uur',
    'complete hours': 'hele uren',
    'complete minute': 'hele minuut',
    'complete minutes': 'hele minuten',
    'complete month': 'hele maand',
    'complete months': 'hele maanden',
    'complete quarter': 'hele kwartaal',
    'complete quarters': 'hele kwartalen',
    'complete second': 'hele seconde',
    'complete seconds': 'hele seconden',
    'complete week': 'hele week',
    'complete weeks': 'hele weken',
    'complete year': 'hele jaar',
    'complete years': 'hele jaren',
    day: 'dag',
    days: 'dagen',
    'fiscal quarter': 'fiscaal kwartaal',
    'fiscal quarters': 'fiscale kwartalen',
    'fiscal year': 'fiscaal jaar',
    'fiscal years': 'fiscale jaren',
    hour: 'uur',
    hours: 'uren',
    minute: 'minuut',
    minutes: 'minuten',
    month: 'maand',
    months: 'maanden',
    quarter: 'kwartaal',
    quarters: 'kwartalen',
    second: 'seconde',
    seconds: 'seconden',
    week: 'week',
    weeks: 'weken',
    year: 'jaar',
    years: 'jaren',
  },
  join_or: {
    'a or b': '{{a}} of {{b}}',
  },
  summary: {
    'Value required': 'Waarde is vereist',
  },
}

export const nlNL = mergeLocaleObjects([], 'nl-NL', resources)
