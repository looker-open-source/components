"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' полн.',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'назад',
    'from now': 'спустя',
    'is any time': 'любое значение времени',
    'is before': 'до даты',
    'is day': 'между {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'с {{dateTimeStart}} до {{dateTimeEnd}}',
    'is in month year': 'в {{month}} {{year}}',
    'is in the last': 'в последнем {{describeInterval}}',
    'is in the year year': 'в {{year}} году',
    'is interval ago': '{{interval}} назад',
    'is intervalStart intervalType for intervalEnd': '{{intervalStart}} {{intervalType}} для {{intervalEnd}}',
    'is not null': 'не является нулевым значением',
    'is on dateTime': 'приходится на дату {{dateTime}}',
    'is on or after': 'в указанную дату или после нее',
    'is previous unitLabel': 'в предыдущем {{unitLabel}}',
    'is type unitLabel': 'является {{type}} {{unitLabel}}',
    next: 'далее',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} сейчас',
    "this": 'текущий',
    'this startInterval to endInterval': 'от {{startInterval}} до {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'любое значение'
  },
  describe_is_item: {
    'is not value': 'не имеет значения {{value}}',
    'is value': 'имеет значение {{value}}'
  },
  describe_location: {
    'coords1 to coords2': 'от {{coords1}} до {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} от {{lat}}, {{lon}}',
    'is anywhere': 'находится где-либо',
    'is not null': 'не является нулевым значением',
    'is null': 'является нулевым значением',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'в диапазоне {{range}}',
    'is not in range range': 'не входит в диапазон {{range}}'
  },
  describe_string: {
    blank: 'не содержит данные',
    'contains value': 'содержит {{value}}',
    'does not contain value': 'не содержит {{value}}',
    'does not end with value': 'не заканчивается на {{value}}',
    'does not start with value': 'не начинается с {{value}}',
    'ends with value': 'заканчивается на {{value}}',
    'starts with value': 'начинается с {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'фут(а/ов)',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль(и)'
  },
  get_months: {
    April: 'Апрель',
    August: 'Август',
    December: 'Декабрь',
    February: 'Февраль',
    January: 'Январь',
    July: 'Июль',
    June: 'Июнь',
    March: 'Март',
    May: 'Май',
    November: 'Ноябрь',
    October: 'Октябрь',
    September: 'Сентябрь'
  },
  get_unit_label: {
    'complete day': 'полн. дн.',
    'complete days': 'полн. дн.',
    'complete fiscal quarter': 'полн. финанс. кварт.',
    'complete fiscal quarters': 'полн. финанс. кварт.',
    'complete fiscal year': 'полн. финанс. год',
    'complete fiscal years': 'полн. финанс. год(а)/лет',
    'complete hour': 'полн. ч',
    'complete hours': 'полн. ч',
    'complete minute': 'полн. мин',
    'complete minutes': 'полн. мин',
    'complete month': 'полн. мес.',
    'complete months': 'полн. мес.',
    'complete quarter': 'полн. кварт.',
    'complete quarters': 'полн. кварт.',
    'complete second': 'полн. сек',
    'complete seconds': 'полн. сек',
    'complete week': 'полн. нед.',
    'complete weeks': 'полн. нед.',
    'complete year': 'полн. год',
    'complete years': 'полн. год(а)/лет',
    day: 'день',
    days: 'д',
    'fiscal quarter': 'финансовый квартал',
    'fiscal quarters': 'финанс. кварт.',
    'fiscal year': 'финансовый год',
    'fiscal years': 'финанс. год(а)/лет',
    hour: 'час',
    hours: 'ч',
    minute: 'минута',
    minutes: 'мин',
    month: 'мес.',
    months: 'мес.',
    quarter: 'квартал',
    quarters: 'кварт.',
    second: 'секунда',
    seconds: 'сек.',
    week: 'неделя',
    weeks: 'нед.',
    year: 'год',
    years: 'год(а)/лет'
  },
  join_or: {
    'a or b': '{{a}} или {{b}}'
  },
  summary: {
    'Value required': 'Необходимо ввести значение'
  }
};
var ruRU = (0, _i18n.mergeLocaleObjects)([], 'ru-RU', resources);
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map