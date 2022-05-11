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
    ' complete': ' concluído',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'há',
    'from now': 'daqui a',
    'is any time': 'é em qualquer altura',
    'is before': 'é antes de',
    'is day': 'é {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'é de {{dateTimeStart}} até {{dateTimeEnd}}',
    'is in month year': 'é em {{month}} {{year}}',
    'is in the last': 'é no último {{describeInterval}}',
    'is in the year year': 'é no ano {{year}}',
    'is interval ago': 'é há {{interval}}',
    'is intervalStart intervalType for intervalEnd':
      'é {{intervalStart}} {{intervalType}} até {{intervalEnd}}',
    'is not null': 'não é nulo',
    'is on dateTime': 'é a {{dateTime}}',
    'is on or after': 'é a ou depois de',
    'is previous unitLabel': 'é {{unitLabel}} anterior',
    'is type unitLabel': 'é {{type}} {{unitLabel}}',
    next: 'seguinte',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} agora',
    this: 'este',
    'this startInterval to endInterval':
      'este {{startInterval}} até {{endInterval}}',
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
    'coords1 to coords2': '{{coords1}} até {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} de {{lat}}, {{lon}}',
    'is anywhere': 'está em qualquer lado',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'lat degrees north': '{{lat}}° N',
    'lat degrees south': '{{lat}}° S',
    'lon degrees east': '{{lon}}° E',
    'lon degrees west': '{{lon}}° O',
  },
  describe_number: {
    'is in range range': 'está no intervalo {{range}}',
    'is not in range range': 'não está no intervalo {{range}}',
  },
  describe_string: {
    blank: 'vazio',
    'contains value': 'contém {{value}}',
    'does not contain value': 'não contém {{value}}',
    'does not end with value': 'não acaba em {{value}}',
    'does not start with value': 'não começa por {{value}}',
    'ends with value': 'acaba em {{value}}',
    'starts with value': 'começa por {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'pés',
    kilometers: 'quilómetros',
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
    'Value required': 'É necessário um valor',
  },
}

export const ptBR: I18nState = {
  locale: 'pt-BR',
  resources: { 'pt-BR': resources },
}
