"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptBR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Adicionar',
    Remove: 'Remover'
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
    'years from now': 'anos a partir de agora'
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
    'is this': 'é isso'
  },
  get_filter_options: {
    'matches advanced': 'corresponde (avançado)'
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
    miles: 'milhas'
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
    'right exclusive': '[semifechado)'
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
    Yesterday: 'Ontem'
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
    'starts with': 'começa com'
  },
  get_tier_filter_options: {
    is: 'é',
    'is any value': 'é qualquer valor',
    'is not': 'não é'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'corresponde a um atributo de usuário'
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
    Toggle: 'Ativar'
  },
  Relative: {
    ago: 'atrás',
    'from now': 'a partir de agora'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Escolha um período de tempo'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalização',
    Presets: 'Predefinições'
  },
  RelativeTimeframePresets: {
    More: 'Mais'
  },
  use_filters_errors: {
    'Invalid value': 'Valor inválido',
    'No value is set for your user attribute': 'Não há um valor definido para o seu atributo de usuário',
    'Selection required': 'Seleção obrigatória'
  },
  use_option_filtering: {
    'No values': 'Nenhum valor',
    'No values match': 'Nenhum valor correspondente'
  },
  use_placeholder: {
    'any value': 'qualquer valor'
  },
  use_suggestable: {
    'Error loading suggestions': 'Erro ao carregar sugestões'
  },
  use_validation_message: {
    'Value required': 'Valor necessário'
  }
};
var ptBR = {
  dateLocale: _ptBR["default"],
  locale: 'pt-BR',
  resources: {
    'pt-BR': (0, _merge["default"])({}, resources, _filterExpressions.ptBR.resources['pt-BR'], _components.ptBR.resources['pt-BR'])
  }
};
exports.ptBR = ptBR;
//# sourceMappingURL=pt-BR.js.map