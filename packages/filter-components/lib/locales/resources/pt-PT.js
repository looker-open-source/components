import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/pt';
import { ptPT as expressionLocale } from '@looker/filter-expressions';
import { ptPT as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'Adicionar',
    Remove: 'Remover'
  },
  before_after_units: {
    'days ago': 'há dias',
    'days from now': 'daqui a dias',
    'fiscal quarter from now': 'trimestre fiscal a partir de agora',
    'fiscal quarters ago': 'há trimestres fiscais',
    'fiscal years ago': 'há anos fiscais',
    'fiscal years from now': 'daqui a anos fiscais',
    'hours ago': 'há horas',
    'hours from now': 'daqui a horas',
    'minutes ago': 'há minutos',
    'minutes from now': 'daqui a minutos',
    'months ago': 'há meses',
    'months from now': 'daqui a meses',
    now: 'agora',
    'quarters ago': 'há trimestres',
    'quarters from now': 'daqui a trimestres',
    'seconds ago': 'há segundos',
    'seconds from now': 'daqui a segundos',
    'weeks ago': 'há semanas',
    'weeks from now': 'daqui a semanas',
    'years ago': 'há anos',
    'years from now': 'daqui a anos'
  },
  BeforeAfter: {
    absolute: '(absoluto)',
    relative: '(relativo)'
  },
  Between: {
    AND: 'E'
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
    years: 'anos'
  },
  DateRange: {
    'until (before)': 'até (antes)'
  },
  get_date_filter_options: {
    is: 'é',
    'is any time': 'é em qualquer altura',
    'is before': 'é antes de',
    'is in range': 'está no intervalo',
    'is in the last': 'é no último',
    'is in the month': 'é no mês',
    'is in the year': 'é no ano',
    'is next': 'é a seguir',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'is on or after': 'é a ou depois de',
    'is on the day': 'é no dia',
    'is previous': 'é anterior',
    'is this': 'é isto'
  },
  get_filter_options: {
    'matches advanced': 'correspondências (avançado)'
  },
  get_location_filter_options: {
    Box: 'Caixa',
    Circle: 'Círculo',
    Location: 'Localização',
    feet: 'pés',
    'is anywhere': 'está em qualquer lado',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    kilometers: 'quilómetros',
    meters: 'metros',
    miles: 'milhas'
  },
  get_number_filter_options: {
    exclusive: '(excluindo)',
    inclusive: '[incluindo]',
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
    'left exclusive': '(esquerda excluída)',
    'right exclusive': '(direita excluída)'
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
    'Year To Date': 'Ano até à data',
    Yesterday: 'Ontem'
  },
  get_string_filter_options: {
    contains: 'contém',
    'doesnt contain': 'não contém',
    'doesnt end with': 'não acaba em',
    'doesnt start with': 'não começa por',
    'ends with': 'acaba em',
    is: 'é',
    'is blank': 'está vazio',
    'is not': 'não é',
    'is not blank': 'não está vazio',
    'is not null': 'não é nulo',
    'is null': 'é nulo',
    'starts with': 'começa por'
  },
  get_tier_filter_options: {
    is: 'é',
    'is any value': 'é qualquer valor',
    'is not': 'não é'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'corresponde a um atributo de utilizador'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'qualquer valor'
  },
  OperatorLabel: {
    AND: 'E',
    OR: 'OU'
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
    'complete years': 'anos completos'
  },
  RadioGroup: {
    'any value': 'qualquer valor'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Limpar tudo',
    Remove: 'Remover',
    Toggle: 'Ativar e desativar'
  },
  Relative: {
    ago: 'há',
    'from now': 'daqui a'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Escolha um período de tempo'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizar',
    Presets: 'Predefinições'
  },
  RelativeTimeframePresets: {
    More: 'Mais'
  },
  use_filters_errors: {
    'Invalid value': 'Valor inválido',
    'No value is set for your user attribute': 'Não foi definido nenhum valor para o seu atributo de utilizador',
    'Selection required': 'É obrigatório indicar uma seleção'
  },
  use_option_filtering: {
    'No values': 'Não há valores',
    'No values match': 'Não há valores correspondentes'
  },
  use_placeholder: {
    'any value': 'qualquer valor'
  },
  use_suggestable: {
    'Error loading suggestions': 'Erro ao carregar as sugestões'
  },
  use_validation_message: {
    'Value required': 'É necessário um valor'
  }
};
export const ptPT = {
  dateLocale,
  locale: 'pt-PT',
  resources: {
    'pt-PT': merge({}, resources, expressionLocale.resources['pt-PT'], componentsLocale.resources['pt-PT'])
  }
};
//# sourceMappingURL=pt-PT.js.map