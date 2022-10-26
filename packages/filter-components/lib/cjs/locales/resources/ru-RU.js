"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ru = _interopRequireDefault(require("date-fns/locale/ru"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Добавить',
    Remove: 'Удалить'
  },
  before_after_units: {
    'days ago': 'дн. назад',
    'days from now': 'дн. спустя',
    'fiscal quarter from now': 'финанс. кварт. спустя',
    'fiscal quarters ago': 'финанс. кварт. назад',
    'fiscal years ago': 'финанс. год(а)/лет назад',
    'fiscal years from now': 'финанс. год(а)/лет спустя',
    'hours ago': 'ч назад',
    'hours from now': 'ч спустя',
    'minutes ago': 'мин назад',
    'minutes from now': 'мин спустя',
    'months ago': 'мес. назад',
    'months from now': 'мес. спустя',
    now: 'сейчас',
    'quarters ago': 'кварт. назад',
    'quarters from now': 'кварт. спустя',
    'seconds ago': 'сек. назад',
    'seconds from now': 'сек. спустя',
    'weeks ago': 'нед. назад',
    'weeks from now': 'нед. спустя',
    'years ago': 'год(а)/лет назад',
    'years from now': 'год(а)/лет спустя'
  },
  BeforeAfter: {
    absolute: '(абсолютное значение)',
    relative: '(относительное значение)'
  },
  Between: {
    AND: 'И'
  },
  date_units: {
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
    month: 'месяц',
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
  DateRange: {
    'until (before)': 'до даты (не включая дату)'
  },
  get_date_filter_options: {
    is: 'является',
    'is any time': 'любое значение времени',
    'is before': 'до даты',
    'is in range': 'входит в диапазон',
    'is in the last': 'в последнем',
    'is in the month': 'в месяце',
    'is in the year': 'в году',
    'is next': 'в следующем',
    'is not null': 'не является нулевым значением',
    'is null': 'является нулевым значением',
    'is on or after': 'в указанную дату или после нее',
    'is on the day': 'в указанную дату',
    'is previous': 'в предыдущем',
    'is this': 'в этом'
  },
  get_filter_options: {
    'matches advanced': 'совпадает с (расширенная настройка)'
  },
  get_location_filter_options: {
    Box: 'Прямоугольник',
    Circle: 'Круг',
    Location: 'Расположение',
    feet: 'фут(а/ов)',
    'is anywhere': 'находится где-либо',
    'is not null': 'не является нулевым значением',
    'is null': 'является нулевым значением',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль(и)'
  },
  get_number_filter_options: {
    exclusive: '(не включая значения)',
    inclusive: '[включая значения]',
    is: 'является',
    'is between': 'между',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': 'не является',
    'is not between': 'не между',
    'is not null': 'не является нулевым значением',
    'is null': 'является нулевым значением',
    'left exclusive': '(не включая значение слева]',
    'right exclusive': '[не включая значение справа)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'За последние 14 дней',
    'Last 180 Days': 'За последние 180 дней',
    'Last 28 Days': 'За последние 28 дней',
    'Last 30 Days': 'За последние 30 дней',
    'Last 365 Days': 'За последние 365 дней',
    'Last 7 Days': 'За последние 7 дней',
    'Last 90 Days': 'За последние 90 дней',
    'Previous Month': 'За прошлый месяц',
    'Previous Quarter': 'За прошлый квартал',
    'Previous Week': 'За прошлую неделю',
    'Previous Year': 'За прошлый год',
    'This Month': 'За этот месяц',
    'This Quarter': 'За этот квартал',
    'This Week': 'За эту неделю',
    'This Year': 'За этот год',
    Today: 'Сегодня',
    'Year To Date': 'С начала года до текущей даты',
    Yesterday: 'Вчера'
  },
  get_string_filter_options: {
    contains: 'содержит',
    'doesnt contain': 'не содержит',
    'doesnt end with': 'не заканчивается на',
    'doesnt start with': 'не начинается с',
    'ends with': 'заканчивается на',
    is: 'является',
    'is blank': 'не содержит данные',
    'is not': 'не является',
    'is not blank': 'содержит данные',
    'is not null': 'не является нулевым значением',
    'is null': 'является нулевым значением',
    'starts with': 'начинается с'
  },
  get_tier_filter_options: {
    is: 'является',
    'is any value': 'любое значение',
    'is not': 'не является'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'совпадает со свойством пользователя'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'любое значение'
  },
  OperatorLabel: {
    AND: 'И',
    OR: 'ИЛИ'
  },
  past_units: {
    'complete days': 'полн. дн.',
    'complete fiscal quarters': 'полн. финанс. кварт.',
    'complete fiscal years': 'полн. финанс. год(а)/лет',
    'complete hours': 'полн. ч',
    'complete minutes': 'полн. мин',
    'complete months': 'полн. мес.',
    'complete quarters': 'полн. кварт.',
    'complete seconds': 'полн. сек',
    'complete weeks': 'полн. нед.',
    'complete years': 'полн. год(а)/лет'
  },
  RadioGroup: {
    'any value': 'любое значение'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Очистить все',
    Remove: 'Удалить',
    Toggle: 'Переключить'
  },
  Relative: {
    ago: 'назад',
    'from now': 'спустя'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Выберите период времени'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Пользовательская настройка',
    Presets: 'Шаблоны'
  },
  RelativeTimeframePresets: {
    More: 'Еще'
  },
  use_filters_errors: {
    'Invalid value': 'Недопустимое значение',
    'No value is set for your user attribute': 'Значение пользовательского атрибута не задано',
    'Selection required': 'Требуется выбрать'
  },
  use_option_filtering: {
    'No values': 'Нет значений',
    'No values match': 'Нет совпадающих значений'
  },
  use_placeholder: {
    'any value': 'любое значение'
  },
  use_suggestable: {
    'Error loading suggestions': 'Ошибка загрузки предложений'
  },
  use_validation_message: {
    'Value required': 'Необходимо ввести значение'
  }
};
var ruRU = {
  dateLocale: _ru["default"],
  locale: 'ru-RU',
  resources: {
    'ru-RU': (0, _merge["default"])({}, resources, _filterExpressions.ruRU.resources['ru-RU'], _components.ruRU.resources['ru-RU'])
  }
};
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map