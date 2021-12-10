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
    ago: 'v minulosti',
    'from now': 'od této chvíle',
    'is any time': 'je kdykoliv',
    'is before': 'je před',
    'is day': 'je {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'je od {{dateTimeStart}} do {{dateTimeEnd}}',
    'is in month year': 'je v {{month}} {{year}}',
    'is in the last': 'je v minulém intervalu {{describeInterval}}',
    'is interval ago': 'je před intervalem {{interval}}',
    'is in the year year': 'je v roce {{year}}',
    'is intervalStart intervalType for intervalEnd':
      'je {{intervalStart}} {{intervalType}} pro {{intervalEnd}}',
    'is not null': 'není prázdné',
    'is on dateTime': 'je {{dateTime}}',
    'is on or after': 'je přesně nebo po',
    'is previous unitLabel': 'je předchozí {{unitLabel}}',
    'is type unitLabel': 'je {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nyní',
    'this startInterval to endInterval':
      'tento {{startInterval}} do {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Duben',
    August: 'Srpen',
    December: 'Prosinec',
    February: 'Únor',
    January: 'Leden',
    July: 'Červenec',
    June: 'Červen',
    March: 'Březen',
    May: 'Květen',
    November: 'Listopad',
    October: 'Říjen',
    September: 'Září',
  },
  get_unit_label: {
    'complete days': 'celé dny',
    'complete fiscal quarters': 'celá fiskální čtvrtletí',
    'complete fiscal years': 'celé fiskální roky',
    'complete hours': 'celé hodiny',
    'complete minutes': 'celé minuty',
    'complete months': 'celé měsíce',
    'complete quarters': 'celá čtvrtletí',
    'complete seconds': 'celé sekundy',
    'complete weeks': 'celé týdny',
    'complete years': 'celé roky',
    days: 'dny/ů',
    'fiscal quarters': 'fiskální čtvrtletí',
    'fiscal years': 'fiskální roky',
    hours: 'hodin(y)',
    minutes: 'minut(y)',
    months: 'měsíce/ů',
    quarters: 'čtvrtletí',
    seconds: 'sekund(y)',
    weeks: 'týdny/ů',
    years: 'roky/ů',
  },
  summary: {
    'Value required': 'Hodnota je povinná',
  },
}

export const csCZ: I18nState = {
  locale: 'cs-CZ',
  resources: { 'cs-CZ': resources },
}
