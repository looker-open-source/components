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

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  describe_date: {
    ' complete': ' zakończono',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'temu',
    'from now': 'od teraz',
    'is any time': 'jest w dowolnym momencie',
    'is before': 'jest wcześniej niż',
    'is day': 'przypada na {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'przypada na okres od {{dateTimeStart}} do {{dateTimeEnd}}',
    'is in month year': 'przypada na {{month}} {{year}}',
    'is in the last': 'przypada na ostatni {{describeInterval}}',
    'is in the year year': 'jest w roku {{year}}',
    'is interval ago': 'przypada {{interval}} temu',
    'is intervalStart intervalType for intervalEnd':
      'to {{intervalStart}} {{intervalType}} dla {{intervalEnd}}',
    'is not null': 'nie ma wartości null',
    'is on dateTime': 'przypada {{dateTime}}',
    'is on or after': 'przypada nie wcześniej niż',
    'is previous unitLabel': 'przypada na poprzedni {{unitLabel}}',
    'is type unitLabel': 'jest {{type}} {{unitLabel}}',
    next: 'dalej',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} teraz',
    this: 'to',
    'this startInterval to endInterval':
      'ten {{startInterval}} do {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'dowolna wartość',
  },
  describe_is_item: {
    'is not value': 'nie jest {{value}}',
    'is value': 'jest {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} do {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} od {{lat}}, {{lon}}',
    'is anywhere': 'jest w dowolnym miejscu',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': 'mieści się w zakresie {{range}}',
    'is not in range range': 'nie mieści się w zakresie {{range}}',
  },
  describe_string: {
    blank: 'pusty',
    'contains value': 'zawiera {{value}}',
    'does not contain value': 'nie zawiera {{value}}',
    'does not end with value': 'nie kończy się na {{value}}',
    'does not start with value': 'nie rozpoczyna się od {{value}}',
    'ends with value': 'kończy się na {{value}}',
    'starts with value': 'rozpoczyna się od {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'ft',
    kilometers: 'km',
    meters: 'm',
    miles: 'mi',
  },
  get_months: {
    April: 'Kwiecień',
    August: 'Sierpień',
    December: 'Grudzień',
    February: 'Luty',
    January: 'Styczeń',
    July: 'Lipiec',
    June: 'Czerwiec',
    March: 'Marzec',
    May: 'Maj',
    November: 'Listopad',
    October: 'Październik',
    September: 'Wrzesień',
  },
  get_unit_label: {
    'complete day': 'pełny dzień',
    'complete days': 'pełne dni',
    'complete fiscal quarter': 'pełny kwartał fiskalny',
    'complete fiscal quarters': 'pełne kwartały podatkowe',
    'complete fiscal year': 'pełny rok fiskalny',
    'complete fiscal years': 'pełne lata podatkowe',
    'complete hour': 'pełna godzina',
    'complete hours': 'pełne godziny',
    'complete minute': 'pełna minuta',
    'complete minutes': 'pełne minuty',
    'complete month': 'pełny miesiąc',
    'complete months': 'pełne miesiące',
    'complete quarter': 'pełny kwartał',
    'complete quarters': 'pełne kwartały',
    'complete second': 'pełna sekunda',
    'complete seconds': 'pełne sekundy',
    'complete week': 'pełny tydzień',
    'complete weeks': 'pełne tygodnie',
    'complete year': 'pełny rok',
    'complete years': 'pełne lata',
    day: 'dzień',
    days: 'dni',
    'fiscal quarter': 'kwartał fiskalny',
    'fiscal quarters': 'kwartały podatkowe',
    'fiscal year': 'rok fiskalny',
    'fiscal years': 'lata podatkowe',
    hour: 'godzina',
    hours: 'godziny',
    minute: 'minuta',
    minutes: 'minuty',
    month: 'miesiąc',
    months: 'miesiące',
    quarter: 'kwartał',
    quarters: 'kwartały',
    second: 'sekunda',
    seconds: 'sekundy',
    week: 'tydzień',
    weeks: 'tygodnie',
    year: 'rok',
    years: 'lata',
  },
  join_or: {
    'a or b': '{{a}} lub {{b}}',
  },
  summary: {
    'Value required': 'Wartość jest wymagana',
  },
};

export const plPL = mergeLocaleObjects([], 'pl-PL', resources);
