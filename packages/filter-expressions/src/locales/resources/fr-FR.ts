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
    ago: ' ',
    'from now': 'à partir de maintenant',
    'is any time': "est n'importe quelle date",
    'is before': 'est antérieur à',
    'is day': 'est {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      "a lieu du {{dateTimeStart}} jusqu'au {{dateTimeEnd}}",
    'is in month year': 'se situe en {{month}} {{year}}',
    'is in the last': 'se situe dans les derniers {{describeInterval}}',
    'is interval ago': 'est il y a {{interval}}',
    'is in the year year': "se situe dans l'année {{year}}",
    'is intervalStart intervalType for intervalEnd':
      'est {{intervalStart}} {{intervalType}} pour {{intervalEnd}}',
    'is not null': "n'est pas nul",
    'is on dateTime': 'tombe le {{dateTime}}',
    'is on or after': 'tombe le ou après',
    'is previous unitLabel': 'est avant {{unitLabel}}',
    'is type unitLabel': 'est {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} maintenant',
    'this startInterval to endInterval':
      "ce {{startInterval}} jusqu'au {{endInterval}}",
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'Avril',
    August: 'Août',
    December: 'Décembre',
    February: 'Février',
    January: 'Janvier',
    July: 'Juillet',
    June: 'Juin',
    March: 'Mars',
    May: 'Mai',
    November: 'Novembre',
    October: 'Octobre',
    September: 'Septembre',
  },
  get_unit_label: {
    'complete days': 'jours complets',
    'complete fiscal quarters': 'trimestres fiscaux complets',
    'complete fiscal years': 'années fiscales complètes',
    'complete hours': 'heures complètes',
    'complete minutes': 'minutes complètes',
    'complete months': 'mois complets',
    'complete quarters': 'trimestres complets',
    'complete seconds': 'secondes complètes',
    'complete weeks': 'semaines complètes',
    'complete years': 'années complètes',
    days: 'jours',
    'fiscal quarters': 'trimestres fiscaux',
    'fiscal years': 'années fiscales',
    hours: 'heures',
    minutes: 'minutes',
    months: 'mois',
    quarters: 'trimestres',
    seconds: 'secondes',
    weeks: 'semaines',
    years: 'années',
  },
  summary: {
    'Value required': 'Valeur obligatoire',
  },
}

export const frFR: I18nState = {
  locale: 'fr-FR',
  resources: { 'fr-FR': resources },
}
