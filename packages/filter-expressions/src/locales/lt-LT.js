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
    ago: 'prieš',
    'from now': 'nuo dabar',
    'is any time': 'yra bet kuriuo metu',
    'is before': 'yra prieš',
    'is day': 'yra {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'yra nuo {{dateTimeStart}} iki {{dateTimeEnd}}',
    'is in month year': 'yra {{year}} {{month}}',
    'is in the last': 'yra praeityje: {{describeInterval}}',
    'is interval ago': 'yra prieš {{interval}}',
    'is in the year year': 'yra {{year}} m.',
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
    'complete days': 'praėjusios dienos',
    'complete fiscal quarters': 'praėję finansiniai ketvirčiai',
    'complete fiscal years': 'praėję finansiniai metai',
    'complete hours': 'praėjusios valandos',
    'complete minutes': 'praėjusios minutės',
    'complete months': 'praėję mėnesiai',
    'complete quarters': 'praėję ketvirčiai',
    'complete seconds': 'praėjusios sekundės',
    'complete weeks': 'praėjusios savaitės',
    'complete years': 'praėję metai',
    days: 'dienos',
    'fiscal quarters': 'finansiniai ketvirčiai',
    'fiscal years': 'finansiniai metai',
    hours: 'valandos',
    minutes: 'minutės',
    months: 'mėnesiai',
    quarters: 'ketvirčiai',
    seconds: 'sekundės',
    weeks: 'savaitės',
    years: 'metai',
  },
  summary: {
    'Value required': 'Būtina užpildyti',
  },
}
