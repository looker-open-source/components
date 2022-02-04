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
    ' complete': ' ukończono',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'temu',
    'from now': 'od teraz',
    'is any time': 'jest dowolnym czasem',
    'is before': 'jest przed',
    'is day': 'jest {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'jest od {{dateTimeStart}} do {{dateTimeEnd}}',
    'is in month year': 'mieści się w zakresie {{month}} {{year}}',
    'is in the last': 'miało miejsce w ciągu ostatnich {{describeInterval}}',
    'is in the year year': 'jest w roku {{year}}',
    'is interval ago': 'to {{interval}} temu',
    'is intervalStart intervalType for intervalEnd':
      'jest {{intervalStart}} {{intervalType}} dla {{intervalEnd}}',
    'is not null': 'nie ma wartości null',
    'is on dateTime': 'jest w dniu {{dateTime}}',
    'is on or after': 'jest w danym terminie lub po',
    'is previous unitLabel': 'jest poprzednim {{unitLabel}}',
    'is type unitLabel': 'jest {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} teraz',
    'this startInterval to endInterval':
      'ten {{startInterval}} do {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
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
    'complete days': 'pełnych dni',
    'complete fiscal quarter': 'pełny kwartał fiskalny',
    'complete fiscal quarters': 'pełnych kw. fiskalnych',
    'complete fiscal year': 'pełny rok fiskalny',
    'complete fiscal years': 'pełne lata fiskalne/pełnych lat fiskalnych',
    'complete hour': 'pełna godzina',
    'complete hours': 'pełnych godz.',
    'complete minute': 'pełna minuta',
    'complete minutes': 'pełnych min',
    'complete month': 'pełny miesiąc',
    'complete months': 'pełnych mies.',
    'complete quarter': 'pełny kwartał',
    'complete quarters': 'pełnych kw.',
    'complete second': 'pełna sekunda',
    'complete seconds': 'pełnych sek.',
    'complete week': 'pełny tydzień',
    'complete weeks': 'pełnych tyg.',
    'complete year': 'pełny rok',
    'complete years': 'pełne lata/pełnych lat',
    day: 'dzień',
    days: 'dni',
    'fiscal quarter': 'kwartał fiskalny',
    'fiscal quarters': 'kw. fiskalne',
    'fiscal year': 'rok fiskalny',
    'fiscal years': 'lata fiskalne/lat fiskalnych',
    hour: 'godzina',
    hours: 'godz.',
    minute: 'minuta',
    minutes: 'min',
    month: 'miesiąc',
    months: 'mies.',
    quarter: 'kwartał',
    quarters: 'kw.',
    second: 'sekunda',
    seconds: 'sek.',
    week: 'tydzień',
    weeks: 'tyg.',
    year: 'rok',
    years: 'lat/lata',
  },
  summary: {
    'Value required': 'Wartość jest wymagana',
  },
}

export const plPL: I18nState = {
  locale: 'pl-PL',
  resources: { 'pl-PL': resources },
}
