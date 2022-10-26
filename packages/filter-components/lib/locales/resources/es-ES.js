import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/es';
import { esES as expressionLocale } from '@looker/filter-expressions';
import { esES as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'Añadir',
    Remove: 'Quitar'
  },
  before_after_units: {
    'days ago': 'días atrás',
    'days from now': 'días a partir de ahora',
    'fiscal quarter from now': 'trimestre fiscal a partir de ahora',
    'fiscal quarters ago': 'trimestres fiscales atrás',
    'fiscal years ago': 'años fiscales atrás',
    'fiscal years from now': 'años fiscales a partir de ahora',
    'hours ago': 'horas atrás',
    'hours from now': 'horas a partir de ahora',
    'minutes ago': 'minutos atrás',
    'minutes from now': 'minutos a partir de ahora',
    'months ago': 'meses atrás',
    'months from now': 'meses a partir de ahora',
    now: 'ahora',
    'quarters ago': 'trimestres atrás',
    'quarters from now': 'trimestres a partir de ahora',
    'seconds ago': 'segundos atrás',
    'seconds from now': 'segundos a partir de ahora',
    'weeks ago': 'semanas atrás',
    'weeks from now': 'semanas a partir de ahora',
    'years ago': 'años atrás',
    'years from now': 'años a partir de ahora'
  },
  BeforeAfter: {
    absolute: '(absoluto)',
    relative: '(relativo)'
  },
  Between: {
    AND: 'Y'
  },
  date_units: {
    day: 'día',
    days: 'días',
    'fiscal quarter': 'trimestre fiscal',
    'fiscal quarters': 'trimestres fiscales',
    'fiscal year': 'año fiscal',
    'fiscal years': 'años fiscales',
    hour: 'hora',
    hours: 'horas',
    minute: 'minuto',
    minutes: 'minutos',
    month: 'mes',
    months: 'meses',
    quarter: 'trimestre',
    quarters: 'trimestres',
    second: 'segundo',
    seconds: 'segundos',
    week: 'semana',
    weeks: 'semanas',
    year: 'año',
    years: 'años'
  },
  DateRange: {
    'until (before)': 'hasta (antes)'
  },
  get_date_filter_options: {
    is: 'es',
    'is any time': 'es cualquier hora',
    'is before': 'es antes de',
    'is in range': 'está dentro del intervalo',
    'is in the last': 'es en el pasado',
    'is in the month': 'es en el mes',
    'is in the year': 'es en el año',
    'is next': 'es el siguiente',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'is on or after': 'es el día o después de',
    'is on the day': 'es el día',
    'is previous': 'es el anterior',
    'is this': 'es este'
  },
  get_filter_options: {
    'matches advanced': 'coincide (avanzado)'
  },
  get_location_filter_options: {
    Box: 'Caja',
    Circle: 'Círculo',
    Location: 'Ubicación',
    feet: 'pies',
    'is anywhere': 'está en cualquier lugar',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    kilometers: 'kilómetros',
    meters: 'metros',
    miles: 'millas'
  },
  get_number_filter_options: {
    exclusive: '(exclusive)',
    inclusive: '[inclusive]',
    is: 'es',
    'is between': 'está entre',
    'is greater': 'es >',
    'is greater equal': 'es >=',
    'is less': 'es <',
    'is less equal': 'es <=',
    'is not': 'no es',
    'is not between': 'no está entre',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'left exclusive': '(izquierda exclusive]',
    'right exclusive': '[derecha exclusive)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Últimos 14 días',
    'Last 180 Days': 'Últimos 180 días',
    'Last 28 Days': 'Últimos 28 días',
    'Last 30 Days': 'Últimos 30 días',
    'Last 365 Days': 'Últimos 365 días',
    'Last 7 Days': 'Últimos 7 días',
    'Last 90 Days': 'Últimos 90 días',
    'Previous Month': 'Mes anterior',
    'Previous Quarter': 'Trimestre anterior',
    'Previous Week': 'Semana anterior',
    'Previous Year': 'Año anterior',
    'This Month': 'Este mes',
    'This Quarter': 'Este trimestre',
    'This Week': 'Esta semana',
    'This Year': 'Este año',
    Today: 'Hoy',
    'Year To Date': 'Año a la fecha',
    Yesterday: 'Ayer'
  },
  get_string_filter_options: {
    contains: 'contiene',
    'doesnt contain': 'no contiene',
    'doesnt end with': 'no termina con',
    'doesnt start with': 'no empieza con',
    'ends with': 'termina con',
    is: 'es',
    'is blank': 'está en blanco',
    'is not': 'no es',
    'is not blank': 'no está en blanco',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'starts with': 'empieza con'
  },
  get_tier_filter_options: {
    is: 'es',
    'is any value': 'es cualquier valor',
    'is not': 'no es'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'coincide con un atributo de usuario'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'cualquier valor'
  },
  OperatorLabel: {
    AND: 'Y',
    OR: 'O'
  },
  past_units: {
    'complete days': 'días completos',
    'complete fiscal quarters': 'trimestres fiscales completos',
    'complete fiscal years': 'años fiscales completos',
    'complete hours': 'horas completas',
    'complete minutes': 'minutos completos',
    'complete months': 'meses completos',
    'complete quarters': 'trimestres completos',
    'complete seconds': 'segundos completos',
    'complete weeks': 'semanas completas',
    'complete years': 'años completos'
  },
  RadioGroup: {
    'any value': 'cualquier valor'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Borrar todo',
    Remove: 'Quitar',
    Toggle: 'Alternar'
  },
  Relative: {
    ago: 'antes',
    'from now': 'a partir de ahora'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Elija el intervalo temporal'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Personalizado',
    Presets: 'Valores preestablecidos'
  },
  RelativeTimeframePresets: {
    More: 'Más'
  },
  use_filters_errors: {
    'Invalid value': 'Valor no válido',
    'No value is set for your user attribute': 'No se estableció ningún valor para su atributo de usuario',
    'Selection required': 'Se requiere una selección'
  },
  use_option_filtering: {
    'No values': 'Ningún valor',
    'No values match': 'Ningún valor coincide'
  },
  use_placeholder: {
    'any value': 'cualquier valor'
  },
  use_suggestable: {
    'Error loading suggestions': 'Error al cargar las sugerencias'
  },
  use_validation_message: {
    'Value required': 'Se requiere un valor.'
  }
};
export const esES = {
  dateLocale,
  locale: 'es-ES',
  resources: {
    'es-ES': merge({}, resources, expressionLocale.resources['es-ES'], componentsLocale.resources['es-ES'])
  }
};
//# sourceMappingURL=es-ES.js.map