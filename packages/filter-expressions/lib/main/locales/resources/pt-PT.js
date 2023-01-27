"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptPT = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' concluído',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'há',
    'from now': 'daqui a',
    'is any time': 'é em qualquer altura',
    'is before': 'é antes de',
    'is day': 'é {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'é de {{dateTimeStart}} até {{dateTimeEnd}}',
    'is in month year': 'é em {{month}} {{year}}',
    'is in the last': 'é no último {{describeInterval}}',
    'is in the year year': 'é no ano {{year}}',
    'is interval ago': 'é há {{interval}}',
    'is intervalStart intervalType for intervalEnd': 'é {{intervalStart}} {{intervalType}} até {{intervalEnd}}',
    'is not null': 'não é nulo',
    'is on dateTime': 'é a {{dateTime}}',
    'is on or after': 'é a ou depois de',
    'is previous unitLabel': 'é {{unitLabel}} anterior',
    'is type unitLabel': 'é {{type}} {{unitLabel}}',
    next: 'seguinte',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} agora',
    "this": 'este',
    'this startInterval to endInterval': 'este {{startInterval}} até {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'qualquer valor'
  },
  describe_is_item: {
    'is not value': 'não é {{value}}',
    'is value': 'é {{value}}'
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
    'lon degrees west': '{{lon}}° O'
  },
  describe_number: {
    'is in range range': 'está no intervalo {{range}}',
    'is not in range range': 'não está no intervalo {{range}}'
  },
  describe_string: {
    blank: 'vazio',
    'contains value': 'contém {{value}}',
    'does not contain value': 'não contém {{value}}',
    'does not end with value': 'não acaba em {{value}}',
    'does not start with value': 'não começa por {{value}}',
    'ends with value': 'acaba em {{value}}',
    'starts with value': 'começa por {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'pés',
    kilometers: 'quilómetros',
    meters: 'metros',
    miles: 'milhas'
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
    September: 'Setembro'
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
    years: 'anos'
  },
  join_or: {
    'a or b': '{{a}} ou {{b}}'
  },
  summary: {
    'Value required': 'É necessário um valor'
  }
};
var ptPT = (0, _i18n.mergeLocaleObjects)([], 'pt-PT', resources);
exports.ptPT = ptPT;
//# sourceMappingURL=pt-PT.js.map