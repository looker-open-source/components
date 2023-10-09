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

import dateLocale from 'date-fns/locale/pt-BR';
import { ptBR as componentsLocale } from '@looker/components';
import { ptBR as filterexpressionsLocale } from '@looker/filter-expressions';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AddRemoveButtons: {
    Add: 'Adicionar',
    Remove: 'Remover',
  },
  before_after_units: {
    'days ago': 'dias atrás',
    'days from now': 'dias a partir de agora',
    'fiscal quarter from now': 'trimestre fiscal a partir de agora',
    'fiscal quarters ago': 'trimestres fiscais atrás',
    'fiscal years ago': 'anos fiscais atrás',
    'fiscal years from now': 'anos fiscais a partir de agora',
    'hours ago': 'horas atrás',
    'hours from now': 'horas a partir de agora',
    'minutes ago': 'minutos atrás',
    'minutes from now': 'minutos a partir de agora',
    'months ago': 'meses atrás',
    'months from now': 'meses a partir de agora',
    now: 'agora',
    'quarters ago': 'trimestres atrás',
    'quarters from now': 'trimestres a partir de agora',
    'seconds ago': 'segundos atrás',
    'seconds from now': 'segundos a partir de agora',
    'weeks ago': 'semanas atrás',
    'weeks from now': 'semanas a partir de agora',
    'years ago': 'anos atrás',
    'years from now': 'anos a partir de agora',
  },
  BeforeAfter: {
    absolute: '(absoluto)',
    relative: '(relativo)',
  },
  Between: {
    AND: 'E',
  },
  date_units: {
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
  DateRange: {
    'until (before)': 'até (antes)',
  },
  get_date_filter_options: {
    is: 'é',
    'is any time': 'é em qualquer horário',
    'is before': 'é anterior a',
    'is in range': 'está dentro do intervalo',
    'is in the last': 'ocorreu no último',
    'is in the month': 'ocorreu no mês',
    'is in the year': 'é no ano',
    'is next': 'é o próximo',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'is on or after': 'em ou após',
    'is on the day': 'é no dia',
    'is previous': 'é o anterior',
    'is this': 'reconhece',
  },
  get_filter_options: {
    'matches advanced': 'correspondências (avançado)',
  },
  get_location_filter_options: {
    Box: 'Caixa',
    Circle: 'Círculo',
    Location: 'Local',
    feet: 'pés',
    'is anywhere': 'está em qualquer lugar',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    kilometers: 'quilômetros',
    meters: 'quadrados',
    miles: 'milhas',
  },
  get_number_filter_options: {
    exclusive: '(exclusivo)',
    inclusive: '[inclusivo]',
    is: 'é',
    'is between': 'está entre',
    'is greater': 'é >',
    'is greater equal': 'é >=',
    'is less': 'é <',
    'is less equal': 'é <=',
    'is not': 'não é',
    'is not between': 'não está entre',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'left exclusive': '(exclui itens à esquerda)',
    'right exclusive': '(exclui itens à direita)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Últimos 14 dias',
    'Last 180 Days': 'Últimos 180 dias',
    'Last 28 Days': 'Últimos 28 dias',
    'Last 30 Days': 'Últimos 30 dias',
    'Last 365 Days': 'Últimos 365 dias',
    'Last 7 Days': 'Últimos sete dias',
    'Last 90 Days': 'Últimos 90 dias',
    'Previous Month': 'Mês anterior',
    'Previous Quarter': 'Trimestre anterior',
    'Previous Week': 'Semana anterior',
    'Previous Year': 'Ano anterior',
    'This Month': 'Este mês',
    'This Quarter': 'Este trimestre',
    'This Week': 'Esta semana',
    'This Year': 'Este ano',
    Today: 'Hoje',
    'Year To Date': 'Acumulado no ano',
    Yesterday: 'Ontem',
  },
  get_string_filter_options: {
    contains: 'contém',
    'doesnt contain': 'não contém',
    'doesnt end with': 'não termina com',
    'doesnt start with': 'não começa com',
    'ends with': 'termina com',
    is: 'é',
    'is blank': 'está em branco',
    'is not': 'não é',
    'is not blank': 'não está em branco',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'starts with': 'começa com',
  },
  get_tier_filter_options: {
    is: 'é',
    'is any value': 'é qualquer valor',
    'is not': 'não é',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'correspondências de um atributo do usuário',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NoMatchingFields: {
    'No Matching Fields': 'Nenhum campo correspondente',
    'Try Something Else':
      'Tente usar outro termo de pesquisa ou recomece e abra qualquer Explore para procurar campos disponíveis.',
  },
  NumberFilter: {
    'any value': 'qualquer valor',
  },
  OperatorLabel: {
    AND: 'E',
    OR: 'OU',
  },
  past_units: {
    'complete days': 'dias concluídos',
    'complete fiscal quarters': 'trimestres fiscais completos',
    'complete fiscal years': 'anos fiscais completos',
    'complete hours': 'horas concluídas',
    'complete minutes': 'minutos concluídos',
    'complete months': 'meses concluídos',
    'complete quarters': 'trimestres concluídos',
    'complete seconds': 'segundos concluídos',
    'complete weeks': 'semanas concluídas',
    'complete years': 'anos concluídos',
  },
  RadioGroup: {
    'any value': 'qualquer valor',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Remover tudo',
    Remove: 'Remover',
    Toggle: 'Alternar',
  },
  Relative: {
    ago: 'atrás',
    'from now': 'a partir de agora',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Escolha um período',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizado',
    Presets: 'Predefinições',
  },
  RelativeTimeframePresets: {
    More: 'Mais',
  },
  use_filters_errors: {
    'Invalid value': 'Valor inválido',
    'No value is set for your user attribute':
      'Nenhum valor foi definido para o atributo do usuário',
    'Selection required': 'Seleção obrigatória',
  },
  use_option_filtering: {
    'No values': 'Nenhum valor',
    'No values match': 'Nenhum valor corresponde',
  },
  use_placeholder: {
    'any value': 'qualquer valor',
  },
  use_suggestable: {
    'Error loading suggestions': 'Erro ao carregar sugestões',
  },
  use_validation_message: {
    'Value required': 'Valor obrigatório',
  },
  UserAttributes: {
    placeholder: 'Selecionar…',
  },
};

export const ptBR = mergeLocaleObjects(
  [componentsLocale, filterexpressionsLocale],
  'pt-BR',
  resources,
  dateLocale
);
