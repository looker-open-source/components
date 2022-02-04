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
    ' complete': ' valmis',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'sitten',
    'from now': 'tästä hetkestä',
    'is any time': 'on milloin tahansa',
    'is before': 'on ennen ajankohtaa',
    'is day': 'on {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'on ajankohdasta {{dateTimeStart}} ajankohtaan {{dateTimeEnd}}',
    'is in month year': 'on ajankohdassa {{month}} {{year}}',
    'is in the last': 'on viimeisten {{describeInterval}} joukossa',
    'is in the year year': 'on vuonna {{year}}',
    'is interval ago': 'on {{interval}} sitten',
    'is intervalStart intervalType for intervalEnd':
      'on {{intervalStart}} {{intervalType}} kohteelle {{intervalEnd}}',
    'is not null': 'ei ole nolla',
    'is on dateTime': 'on ajankohtana {{dateTime}}',
    'is on or after': 'on ajankohtana tai jälkeen ajankohdan',
    'is previous unitLabel': 'on aiempi {{unitLabel}}',
    'is type unitLabel': 'on {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nyt',
    'this startInterval to endInterval':
      'tämä {{startInterval}}–{{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Huhtikuu',
    August: 'Elokuu',
    December: 'Joulukuu',
    February: 'Helmikuu',
    January: 'Tammikuu',
    July: 'Heinäkuu',
    June: 'Kesäkuu',
    March: 'Maaliskuu',
    May: 'Touko',
    November: 'Marraskuu',
    October: 'Lokakuu',
    September: 'Syyskuu',
  },
  get_unit_label: {
    'complete day': 'kokonainen päivä',
    'complete days': 'kokonaista päivää',
    'complete fiscal quarter': 'kokonainen tilikauden vuosineljännes',
    'complete fiscal quarters': 'kokonaista tilikauden vuosineljännestä',
    'complete fiscal year': 'kokonainen tilivuosi',
    'complete fiscal years': 'kokonaista tilivuotta',
    'complete hour': 'kokonainen tunti',
    'complete hours': 'kokonaista tuntia',
    'complete minute': 'kokonainen minuutti',
    'complete minutes': 'kokonaista minuuttia',
    'complete month': 'kokonainen kuukausi',
    'complete months': 'kokonaista kuukautta',
    'complete quarter': 'kokonainen vuosineljännes',
    'complete quarters': 'kokonaista vuosineljännestä',
    'complete second': 'kokonainen sekunti',
    'complete seconds': 'kokonaista sekuntia',
    'complete week': 'kokonainen viikko',
    'complete weeks': 'kokonaista viikkoa',
    'complete year': 'kokonainen vuosi',
    'complete years': 'kokonaista vuotta',
    day: 'päivä',
    days: 'päivää',
    'fiscal quarter': 'tilikauden vuosineljännes',
    'fiscal quarters': 'tilikauden vuosineljännestä',
    'fiscal year': 'tilivuosi',
    'fiscal years': 'tilivuotta',
    hour: 'tunti',
    hours: 'tuntia',
    minute: 'minuutti',
    minutes: 'minuuttia',
    month: 'kuukausi',
    months: 'kuukautta',
    quarter: 'vuosineljännes',
    quarters: 'vuosineljännestä',
    second: 'sekunti',
    seconds: 'sekuntia',
    week: 'viikko',
    weeks: 'viikkoa',
    year: 'vuosi',
    years: 'vuotta',
  },
  summary: {
    'Value required': 'Arvo tarvitaan',
  },
}

export const fiFI: I18nState = {
  locale: 'fi-FI',
  resources: { 'fi-FI': resources },
}
