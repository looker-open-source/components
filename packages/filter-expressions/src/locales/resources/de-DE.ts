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
    ' complete': ' abgeschlossen',
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
    next: 'nächste(r/s)',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} jetzt',
    this: 'diese(r/s)',
    'this startInterval to endInterval':
      'diese/r/s {{startInterval}} bis {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'beliebiger Wert',
  },
  describe_is_item: {
    'is not value': 'ist nicht {{value}}',
    'is value': 'ist {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} bis {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} von {{lat}}, {{lon}}',
    'is anywhere': 'ist überall',
    'is not null': 'ist nicht null',
    'is null': 'ist null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°O',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': 'befindet sich im Bereich {{range}}',
    'is not in range range': 'befindet sich nicht im Bereich {{range}}',
  },
  describe_string: {
    blank: 'leer',
    'contains value': 'enthält {{value}}',
    'does not contain value': 'enthält nicht {{value}}',
    'does not end with value': 'endet nicht mit {{value}}',
    'does not start with value': 'beginnt nicht mit {{value}}',
    'ends with value': 'endet mit {{value}}',
    'starts with value': 'beginnt mit {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'Fuß',
    kilometers: 'Kilometer',
    meters: 'Meter',
    miles: 'Meilen',
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
    'complete day': 'vollständiger Tag',
    'complete days': 'vollständige Tage',
    'complete fiscal quarter': 'vollständiges Geschäftsquartal',
    'complete fiscal quarters': 'vollständige Geschäftsquartale',
    'complete fiscal year': 'vollständiges Geschäftsjahr',
    'complete fiscal years': 'vollständige Geschäftsjahre',
    'complete hour': 'vollständige Stunde',
    'complete hours': 'vollständige Stunden',
    'complete minute': 'vollständige Minute',
    'complete minutes': 'vollständige Minuten',
    'complete month': 'vollständiger Monat',
    'complete months': 'vollständige Monate',
    'complete quarter': 'vollständiges Quartal',
    'complete quarters': 'vollständige Quartale',
    'complete second': 'vollständige Sekunde',
    'complete seconds': 'vollständige Sekunden',
    'complete week': 'vollständige Woche',
    'complete weeks': 'vollständige Wochen',
    'complete year': 'vollständiges Jahr',
    'complete years': 'vollständige Jahre',
    day: 'Tag',
    days: 'Tage',
    'fiscal quarter': 'Geschäftsquartal',
    'fiscal quarters': 'Geschäftsquartale',
    'fiscal year': 'Geschäftsjahr',
    'fiscal years': 'Geschäftsjahre',
    hour: 'Stunde',
    hours: 'Stunden',
    minute: 'Minute',
    minutes: 'Minuten',
    month: 'Monat',
    months: 'Monate',
    quarter: 'Quartal',
    quarters: 'Quartale',
    second: 'Sekunde',
    seconds: 'Sekunden',
    week: 'Woche',
    weeks: 'Wochen',
    year: 'Jahr',
    years: 'Jahre',
  },
  join_or: {
    'a or b': '{{a}} oder {{b}}',
  },
  summary: {
    'Value required': 'Wert erforderlich',
  },
}

export const deDE = mergeLocaleObjects([], 'de-DE', resources)
