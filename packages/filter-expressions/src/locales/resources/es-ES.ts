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
    ago: 'antes',
    'from now': 'a partir de ahora',
    'is any time': 'es cualquier hora',
    'is before': 'es antes de',
    'is day': 'es {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'es de {{dateTimeStart}} a {{dateTimeEnd}}',
    'is in month year': 'es en {{month}} de {{year}}',
    'is in the last': 'es en {{describeInterval}} anterior',
    'is interval ago': 'es en {{interval}} antes',
    'is in the year year': 'es en el año {{year}}',
    'is intervalStart intervalType for intervalEnd':
      'es en {{intervalType}} de {{intervalStart}} a {{intervalEnd}}',
    'is not null': 'no es nulo',
    'is on dateTime': 'es el {{dateTime}}',
    'is on or after': 'es el día o después de',
    'is previous unitLabel': 'es en {{unitLabel}} anterior',
    'is type unitLabel': 'es en {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} ahora',
    'this startInterval to endInterval':
      'de {{startInterval}} a {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Abril',
    August: 'Agosto',
    December: 'Diciembre',
    February: 'Febrero',
    January: 'Enero',
    July: 'Julio',
    June: 'Junio',
    March: 'Marzo',
    May: 'Mayo',
    November: 'Noviembre',
    October: 'Octubre',
    September: 'Septiembre',
  },
  get_unit_label: {
    'complete days': 'días completos',
    'complete fiscal quarters': 'trimestres fiscales completos',
    'complete fiscal years': 'años fiscales completos',
    'complete hours': 'horas completas',
    'complete minutes': 'minutos completos',
    'complete months': 'meses completos',
    'complete quarters': 'trimestres completos',
    'complete seconds': 'segundos completos',
    'complete weeks': 'semanas completas',
    'complete years': 'años completos',
    days: 'días',
    'fiscal quarters': 'trimestres fiscales',
    'fiscal years': 'años fiscales',
    hours: 'horas',
    minutes: 'minutos',
    months: 'meses',
    quarters: 'trimestres',
    seconds: 'segundos',
    weeks: 'semanas',
    years: 'años',
  },
  summary: {
    'Value required': 'Se requiere un valor.',
  },
}

export const esES: I18nState = {
  locale: 'es-ES',
  resources: { 'es-ES': resources },
}
