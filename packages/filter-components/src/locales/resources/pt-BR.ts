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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/pt-BR'
import type { I18nStateWithDates } from '../../utils'
import { ptBR as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Adicionar',
    Remove: 'Remover',
  },
  BeforeAfter: {
    absolute: '(absoluto)',
    relative: '(relativo)',
  },
  Between: {
    AND: 'E',
  },
  date_units: {
    days: 'dias',
    'fiscal quarters': 'trimestres fiscais',
    'fiscal years': 'anos fiscais',
    hours: 'horas',
    minutes: 'minutos',
    months: 'meses',
    quarters: 'trimestres',
    seconds: 'segundos',
    weeks: 'semanas',
    years: 'anos',
  },
  get_date_filter_options: {
    is: 'é',
    'is any time': 'é qualquer momento',
    'is before': 'está antes de',
    'is in range': 'está no intervalo',
    'is in the last': 'é no último',
    'is in the month': 'é no mês',
    'is in the year': 'está no ano',
    'is next': 'é próximo',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'is on or after': 'está em ou depois de',
    'is on the day': 'está no dia',
    'is previous': 'é anterior',
    'is this': 'é isso',
  },
  get_filter_options: {
    'matches advanced': 'corresponde (avançado)',
  },
  get_location_filter_options: {
    Box: 'Caixa',
    Circle: 'Círculo',
    Location: 'Localização',
    feet: 'pés',
    'is anywhere': 'tem qualquer valor',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    kilometers: 'quilômetros',
    meters: 'metros',
    miles: 'milhas',
  },
  get_number_filter_options: {
    exclusive: '(aberto)',
    inclusive: '[fechado]',
    is: 'é',
    'is between': 'está entre',
    'is greater': 'é > que',
    'is greater equal': 'é > ou igual a',
    'is less': 'é < que',
    'is less equal': 'é < ou igual a',
    'is not': 'não é',
    'is not between': 'não está entre',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'left exclusive': '(semiaberto]',
    'right exclusive': '[semifechado)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Últimos 14 dias',
    'Last 180 Days': 'Últimos 180 dias',
    'Last 28 Days': 'Últimos 28 dias',
    'Last 30 Days': 'Últimos 30 dias',
    'Last 365 Days': 'Últimos 365 dias',
    'Last 7 Days': 'Últimos 7 dias',
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
    'Year To Date': 'Ano atual',
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
    'matches a user attribute': 'corresponde a um atributo de usuário',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'qualquer valor',
  },
  OperatorLabel: {
    AND: 'E',
    OR: 'OU',
  },
  past_units: {
    'complete days': 'dias completos',
    'complete fiscal quarters': 'trimestres fiscais completos',
    'complete fiscal years': 'anos fiscais completos',
    'complete hours': 'horas completas',
    'complete minutes': 'minutos completos',
    'complete months': 'meses completos',
    'complete quarters': 'trimestres completos',
    'complete seconds': 'segundos completos',
    'complete weeks': 'semanas completas',
    'complete years': 'anos completos',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Limpar tudo',
    Remove: 'Remover',
    Toggle: 'Ativar',
  },
  Relative: {
    ago: 'atrás',
    'from now': 'a partir de agora',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Escolha um período de tempo',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalização',
    Presets: 'Predefinições',
  },
  RelativeTimeframePresets: {
    More: 'Mais',
  },
  use_option_filtering: {
    'No values': 'Nenhum valor',
    'No values match': 'Nenhum valor correspondente',
  },
  use_placeholder: {
    'any value': 'qualquer valor',
  },
  use_suggestable: {
    'Error loading suggestions': 'Erro ao carregar sugestões',
  },
  use_validation_message: {
    'Value required': 'Valor necessário',
  },
}

export const ptBR: I18nStateWithDates = {
  dateLocale,
  locale: 'pt-BR',
  resources: { 'pt-BR': merge(resources, expressionLocale.resources['pt-BR']) },
}
