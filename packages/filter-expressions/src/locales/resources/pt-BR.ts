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

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  describe_date: {
    ' complete': ' concluído',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'atrás',
    'from now': 'a partir de agora',
    'is any time': 'é em qualquer horário',
    'is before': 'é anterior a',
    'is day': 'é {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'é de {{dateTimeStart}} até {{dateTimeEnd}}',
    'is in month year': 'é em {{month}} de {{year}}',
    'is in the last': 'está no último {{describeInterval}}',
    'is in the year year': 'está no ano {{year}}',
    'is interval ago': 'há {{interval}}',
    'is intervalStart intervalType for intervalEnd':
      'é {{intervalStart}} {{intervalType}} por {{intervalEnd}}',
    'is not null': 'não é nulo',
    'is on dateTime': 'é em {{dateTime}}',
    'is on or after': 'em ou após',
    'is previous unitLabel': 'é anterior a {{unitLabel}}',
    'is type unitLabel': 'é {{type}} {{unitLabel}}',
    next: 'próxima',
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
    'coords1 to coords2': '{{coords1}} a {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} de {{lat}}, {{lon}}',
    'is anywhere': 'está em qualquer lugar',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°L',
    'lon degrees west': '{{lon}}°O',
  },
  describe_number: {
    'is in range range': 'está dentro do intervalo {{range}}',
    'is not in range range': 'está fora do intervalo {{range}}',
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
    meters: 'quadrados',
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
    May: 'Mai',
    November: 'Novembro',
    October: 'Outubro',
    September: 'Setembro',
  },
  get_unit_label: {
    'complete day': 'dia completo',
    'complete days': 'dias concluídos',
    'complete fiscal quarter': 'trimestre fiscal completo',
    'complete fiscal quarters': 'trimestres fiscais completos',
    'complete fiscal year': 'ano fiscal completo',
    'complete fiscal years': 'anos fiscais completos',
    'complete hour': 'hora completa',
    'complete hours': 'horas concluídas',
    'complete minute': 'minuto completo',
    'complete minutes': 'minutos concluídos',
    'complete month': 'mês completo',
    'complete months': 'meses concluídos',
    'complete quarter': 'trimestre completo',
    'complete quarters': 'trimestres concluídos',
    'complete second': 'segundo completo',
    'complete seconds': 'segundos concluídos',
    'complete week': 'semana completa',
    'complete weeks': 'semanas concluídas',
    'complete year': 'ano completo',
    'complete years': 'anos concluídos',
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
    'Value required': 'Valor obrigatório',
  },
};

export const ptBR = mergeLocaleObjects([], 'pt-BR', resources);
