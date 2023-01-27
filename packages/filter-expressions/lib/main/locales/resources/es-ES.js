"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esES = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' completado',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'antes',
    'from now': 'a partir de ahora',
    'is any time': 'es cualquier hora',
    'is before': 'es antes de',
    'is day': 'es {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'es de {{dateTimeStart}} a {{dateTimeEnd}}',
    'is in month year': 'es en {{month}} de {{year}}',
    'is in the last': 'es en el {{describeInterval}} pasado',
    'is in the year year': 'es en el año {{year}}',
    'is interval ago': 'es hace {{interval}}',
    'is intervalStart intervalType for intervalEnd': 'es en {{intervalType}} de {{intervalStart}} a {{intervalEnd}}',
    'is not null': 'no es nulo',
    'is on dateTime': 'es el {{dateTime}}',
    'is on or after': 'es el día o después de',
    'is previous unitLabel': 'es en {{unitLabel}} anterior',
    'is type unitLabel': 'es en {{type}} {{unitLabel}}',
    next: 'siguiente',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} ahora',
    "this": 'este/a',
    'this startInterval to endInterval': 'de {{startInterval}} a {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'cualquier valor'
  },
  describe_is_item: {
    'is not value': 'no es {{value}}',
    'is value': 'es {{value}}'
  },
  describe_location: {
    'coords1 to coords2': 'De {{coords1}} a {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} desde {{lat}}, {{lon}}',
    'is anywhere': 'está en cualquier lugar',
    'is not null': 'no es nulo',
    'is null': 'es nulo',
    'lat degrees north': '{{lat}} N',
    'lat degrees south': '{{lat}} S',
    'lon degrees east': '{{lon}} E',
    'lon degrees west': '{{lon}} O'
  },
  describe_number: {
    'is in range range': 'está dentro del intervalo {{range}}',
    'is not in range range': 'no está dentro del intervalo {{range}}'
  },
  describe_string: {
    blank: 'en blanco',
    'contains value': 'contiene {{value}}',
    'does not contain value': 'no contiene {{value}}',
    'does not end with value': 'no termina con {{value}}',
    'does not start with value': 'no empieza con {{value}}',
    'ends with value': 'termina con {{value}}',
    'starts with value': 'empieza con {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'pies',
    kilometers: 'kilómetros',
    meters: 'metros',
    miles: 'millas'
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
    September: 'Septiembre'
  },
  get_unit_label: {
    'complete day': 'día completo',
    'complete days': 'días completos',
    'complete fiscal quarter': 'trimestre fiscal completo',
    'complete fiscal quarters': 'trimestres fiscales completos',
    'complete fiscal year': 'año fiscal completo',
    'complete fiscal years': 'años fiscales completos',
    'complete hour': 'hora completa',
    'complete hours': 'horas completas',
    'complete minute': 'minuto completo',
    'complete minutes': 'minutos completos',
    'complete month': 'mes completo',
    'complete months': 'meses completos',
    'complete quarter': 'trimestre completo',
    'complete quarters': 'trimestres completos',
    'complete second': 'segundo completo',
    'complete seconds': 'segundos completos',
    'complete week': 'semana completa',
    'complete weeks': 'semanas completas',
    'complete year': 'año completo',
    'complete years': 'años completos',
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
  join_or: {
    'a or b': '{{a}} o {{b}}'
  },
  summary: {
    'Value required': 'Se requiere un valor.'
  }
};
var esES = (0, _i18n.mergeLocaleObjects)([], 'es-ES', resources);
exports.esES = esES;
//# sourceMappingURL=es-ES.js.map