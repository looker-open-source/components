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
    ' complete': ' completa',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'fa',
    'from now': 'da ora',
    'is any time': 'è in qualsiasi momento',
    'is before': 'è prima di',
    'is day': 'è {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'è dal giorno {{dateTimeStart}} fino al giorno {{dateTimeEnd}}',
    'is in month year': 'è a {{month}} {{year}}',
    'is in the last': 'è nell’ultimo {{describeInterval}}',
    'is in the year year': "è nell'anno {{year}}",
    'is interval ago': 'è {{interval}} fa',
    'is intervalStart intervalType for intervalEnd':
      'è {{intervalStart}} {{intervalType}} per {{intervalEnd}}',
    'is not null': 'non è zero',
    'is on dateTime': 'è il giorno {{dateTime}}',
    'is on or after': 'è il o dopo il',
    'is previous unitLabel': 'è precedente {{unitLabel}}',
    'is type unitLabel': 'è {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} ora',
    'this startInterval to endInterval':
      'questo {{startInterval}} fino a {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Aprile',
    August: 'Agosto',
    December: 'Dicembre',
    February: 'Febbraio',
    January: 'Gennaio',
    July: 'Luglio',
    June: 'Giugno',
    March: 'Marzo',
    May: 'Maggio',
    November: 'Novembre',
    October: 'Ottobre',
    September: 'Settembre',
  },
  get_unit_label: {
    'complete day': 'giorno completo',
    'complete days': 'giorni completi',
    'complete fiscal quarter': 'trimestre fiscale completo',
    'complete fiscal quarters': 'trimestri fiscali completi',
    'complete fiscal year': 'anno fiscale completo',
    'complete fiscal years': 'anni fiscali completi',
    'complete hour': 'ora completa',
    'complete hours': 'ore complete',
    'complete minute': 'minuto completo',
    'complete minutes': 'minuti completi',
    'complete month': 'mese completo',
    'complete months': 'mesi completi',
    'complete quarter': 'trimestre completo',
    'complete quarters': 'trimestri completi',
    'complete second': 'secondo completo',
    'complete seconds': 'secondi completi',
    'complete week': 'settimana completa',
    'complete weeks': 'settimane complete',
    'complete year': 'anno completo',
    'complete years': 'anni completi',
    day: 'giorno',
    days: 'giorni',
    'fiscal quarter': 'trimestre fiscale',
    'fiscal quarters': 'trimestri fiscali',
    'fiscal year': 'anno fiscale',
    'fiscal years': 'anni fiscali',
    hour: 'ora',
    hours: 'ore',
    minute: 'minuto',
    minutes: 'minuti',
    month: 'mese',
    months: 'mesi',
    quarter: 'trimestre',
    quarters: 'trimestri',
    second: 'secondo',
    seconds: 'secondi',
    week: 'settimana',
    weeks: 'settimane',
    year: 'anno',
    years: 'anni',
  },
  summary: {
    'Value required': 'Valore obbligatorio',
  },
}

export const itIT: I18nState = {
  locale: 'it-IT',
  resources: { 'it-IT': resources },
}
