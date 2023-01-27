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
    ' complete': ' completo',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'atrás',
    'from now': 'a partir de agora',
    'is any time': 'é qualquer momento',
    'is before': 'está antes de',
    'is day': 'é {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'é a partir de {{dateTimeStart}} até {{dateTimeEnd}}',
    'is in month year': 'é em {{month}} de {{year}}',
    'is in the last': 'é no último intervalo de {{describeInterval}}',
    'is in the year year': 'é no ano de {{year}}',
    'is interval ago': 'é {{interval}} atrás',
    'is intervalStart intervalType for intervalEnd':
      'é {{intervalStart}} {{intervalType}} para {{intervalEnd}}',
    'is not null': 'não é nulo',
    'is on dateTime': 'é em {{dateTime}}',
    'is on or after': 'está em ou depois de',
    'is previous unitLabel': 'é a unidade {{unitLabel}} anterior',
    'is type unitLabel': 'é {{type}} {{unitLabel}}',
    next: 'próximo',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} agora',
    this: 'este',
    'this startInterval to endInterval': '{{startInterval}} a {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'qualquer valor',
  },
  describe_is_item: {
    'is not value': 'não é {{value}}',
    'is value': 'é {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} para {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} de {{lat}}, {{lon}}',
    'is anywhere': 'tem qualquer valor',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°L',
    'lon degrees west': '{{lon}}°O',
  },
  describe_number: {
    'is in range range': 'está no intervalo {{range}}',
    'is not in range range': 'não está no intervalo {{range}}',
  },
  describe_string: {
    blank: 'em branco',
    'contains value': 'contém {{value}}',
    'does not contain value': 'não contém {{value}}',
    'does not end with value': 'não termina com {{value}}',
    'does not start with value': 'não começa com {{value}}',
    'ends with value': 'termina com {{value}}',
    'starts with value': 'começa com {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'pés',
    kilometers: 'quilômetros',
    meters: 'metros',
    miles: 'milhas',
  },
  get_months: {
    April: 'Abril',
    August: 'Agosto',
    December: 'Dezembro',
    February: 'Fevereiro',
    January: 'Janeiro',
    July: 'Julho',
    June: 'Junho',
    March: 'Março',
    May: 'Maio',
    November: 'Novembro',
    October: 'Outubro',
    September: 'Setembro',
  },
  get_unit_label: {
    'complete day': 'dia completo',
    'complete days': 'dias completos',
    'complete fiscal quarter': 'trimestre fiscal completo',
    'complete fiscal quarters': 'trimestres fiscais completos',
    'complete fiscal year': 'ano fiscal completo',
    'complete fiscal years': 'anos fiscais completos',
    'complete hour': 'hora completa',
    'complete hours': 'horas completas',
    'complete minute': 'minuto completo',
    'complete minutes': 'minutos completos',
    'complete month': 'mês completo',
    'complete months': 'meses completos',
    'complete quarter': 'trimestre completo',
    'complete quarters': 'trimestres completos',
    'complete second': 'segundo completo',
    'complete seconds': 'segundos completos',
    'complete week': 'semana completa',
    'complete weeks': 'semanas completas',
    'complete year': 'ano completo',
    'complete years': 'anos completos',
    day: 'dia',
    days: 'dias',
    'fiscal quarter': 'trimestre fiscal',
    'fiscal quarters': 'trimestres fiscais',
    'fiscal year': 'ano fiscal',
    'fiscal years': 'anos fiscais',
    hour: 'hora',
    hours: 'horas',
    minute: 'minuto',
    minutes: 'minutos',
    month: 'mês',
    months: 'meses',
    quarter: 'trimestre',
    quarters: 'trimestres',
    second: 'segundo',
    seconds: 'segundos',
    week: 'semana',
    weeks: 'semanas',
    year: 'ano',
    years: 'anos',
  },
  join_or: {
    'a or b': '{{a}} ou {{b}}',
  },
  summary: {
    'Value required': 'Valor necessário',
  },
}

export const ptBR = mergeLocaleObjects([], 'pt-BR', resources)
