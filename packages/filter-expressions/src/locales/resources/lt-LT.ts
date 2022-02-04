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
    ' complete': ' praėję',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'prieš',
    'from now': 'nuo dabar',
    'is any time': 'yra bet kuriuo metu',
    'is before': 'yra prieš',
    'is day': 'yra {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'yra nuo {{dateTimeStart}} iki {{dateTimeEnd}}',
    'is in month year': 'yra {{year}} {{month}}',
    'is in the last': 'yra praeityje: {{describeInterval}}',
    'is in the year year': 'yra {{year}} m.',
    'is interval ago': 'yra prieš {{interval}}',
    'is intervalStart intervalType for intervalEnd':
      'yra {{intervalStart}} {{intervalType}}, {{intervalEnd}}',
    'is not null': 'nėra nulis',
    'is on dateTime': 'yra {{dateTime}}',
    'is on or after': 'yra tada ar po',
    'is previous unitLabel': 'yra ankstesnis (-ė) {{unitLabel}}',
    'is type unitLabel': 'yra {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} dabar',
    'this startInterval to endInterval':
      'šis {{startInterval}} iki {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Balandis',
    August: 'Rugpjūtis',
    December: 'Gruodis',
    February: 'Vasaris',
    January: 'Sausis',
    July: 'Liepa',
    June: 'Birželis',
    March: 'Kovas',
    May: 'Geg.',
    November: 'Lapkritis',
    October: 'Spalis',
    September: 'Rugsėjis',
  },
  get_unit_label: {
    'complete day': 'praėjusi diena',
    'complete days': 'praėjusios dienos',
    'complete fiscal quarter': 'praėjęs finansinis ketvirtis',
    'complete fiscal quarters': 'praėję finansiniai ketvirčiai',
    'complete fiscal year': 'praėję finansiniai metai',
    'complete fiscal years': 'praėję finansiniai metai',
    'complete hour': 'praėjusi valanda',
    'complete hours': 'praėjusios valandos',
    'complete minute': 'praėjusi minutė',
    'complete minutes': 'praėjusios minutės',
    'complete month': 'praėjęs mėnuo',
    'complete months': 'praėję mėnesiai',
    'complete quarter': 'praėjęs ketvirtis',
    'complete quarters': 'praėję ketvirčiai',
    'complete second': 'praėjusi sekundė',
    'complete seconds': 'praėjusios sekundės',
    'complete week': 'praėjusi savaitė',
    'complete weeks': 'praėjusios savaitės',
    'complete year': 'praėję metai',
    'complete years': 'praėję metai',
    day: 'd.',
    days: 'dienos',
    'fiscal quarter': 'finansinis ketvirtis',
    'fiscal quarters': 'finansiniai ketvirčiai',
    'fiscal year': 'finansiniai metai',
    'fiscal years': 'finansiniai metai',
    hour: 'val.',
    hours: 'valandos',
    minute: 'min.',
    minutes: 'minutės',
    month: 'mėnuo',
    months: 'mėnesiai',
    quarter: 'ketvirtis',
    quarters: 'ketvirčiai',
    second: 'sek.',
    seconds: 'sekundės',
    week: 'savaitė',
    weeks: 'savaitės',
    year: 'metai',
    years: 'metai',
  },
  summary: {
    'Value required': 'Būtina užpildyti',
  },
}

export const ltLT: I18nState = {
  locale: 'lt-LT',
  resources: { 'lt-LT': resources },
}
