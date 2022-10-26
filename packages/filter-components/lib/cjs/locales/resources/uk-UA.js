"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ukUA = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _uk = _interopRequireDefault(require("date-fns/locale/uk"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Додати',
    Remove: 'Вилучити'
  },
  before_after_units: {
    'days ago': 'днів тому',
    'days from now': 'днів відтепер',
    'fiscal quarter from now': 'фінансовий квартал відтепер',
    'fiscal quarters ago': 'фінансових кварталів тому',
    'fiscal years ago': 'фінансових років тому',
    'fiscal years from now': 'фінансових років відтепер',
    'hours ago': 'годин тому',
    'hours from now': 'годин відтепер',
    'minutes ago': 'хвилин тому',
    'minutes from now': 'хвилин відтепер',
    'months ago': 'місяців тому',
    'months from now': 'місяців відтепер',
    now: 'зараз',
    'quarters ago': 'кварталів тому',
    'quarters from now': 'кварталів відтепер',
    'seconds ago': 'секунд тому',
    'seconds from now': 'секунд відтепер',
    'weeks ago': 'тижнів тому',
    'weeks from now': 'тижнів відтепер',
    'years ago': 'років тому',
    'years from now': 'років відтепер'
  },
  BeforeAfter: {
    absolute: '(абсолютне значення)',
    relative: '(відносне значення)'
  },
  Between: {
    AND: 'І'
  },
  date_units: {
    day: 'день',
    days: 'дн',
    'fiscal quarter': 'фінансовий квартал',
    'fiscal quarters': 'фінансових кварталів',
    'fiscal year': 'фінансовий рік',
    'fiscal years': 'фінансових років',
    hour: 'година',
    hours: 'год',
    minute: 'хвилина',
    minutes: 'хв',
    month: 'місяць',
    months: 'міс.',
    quarter: 'квартал',
    quarters: 'кварт.',
    second: 'секунда',
    seconds: 'сек',
    week: 'тиждень',
    weeks: 'тижн',
    year: 'рік',
    years: 'р.'
  },
  DateRange: {
    'until (before)': 'до (не включно)'
  },
  get_date_filter_options: {
    is: 'є',
    'is any time': 'є будь-яким часом',
    'is before': 'раніше',
    'is in range': 'у діапазоні',
    'is in the last': 'за останні',
    'is in the month': 'станом на місяць',
    'is in the year': 'станом на рік',
    'is next': 'у наступний',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'is on or after': 'не раніше',
    'is on the day': 'станом на день',
    'is previous': 'у попередній',
    'is this': 'у цей'
  },
  get_filter_options: {
    'matches advanced': 'збігається (додатково)'
  },
  get_location_filter_options: {
    Box: 'Прямокутник',
    Circle: 'Коло',
    Location: 'Розташування',
    feet: 'футів',
    'is anywhere': 'будь-де',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль'
  },
  get_number_filter_options: {
    exclusive: '(без меж)',
    inclusive: '[з межами]',
    is: 'є',
    'is between': 'у діапазоні',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': 'не є',
    'is not between': 'поза діапазоном',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'left exclusive': '(з лівою межею]',
    'right exclusive': '[з правою межею)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'За останні 14 днів',
    'Last 180 Days': 'За останні 180 днів',
    'Last 28 Days': 'За останні 28 днів',
    'Last 30 Days': 'За останні 30 днів',
    'Last 365 Days': 'За останні 365 днів',
    'Last 7 Days': 'За останні 7 днів',
    'Last 90 Days': 'За останні 90 днів',
    'Previous Month': 'За минулий місяць',
    'Previous Quarter': 'За минулий квартал',
    'Previous Week': 'За минулий тиждень',
    'Previous Year': 'За минулий рік',
    'This Month': 'За цей місяць',
    'This Quarter': 'За цей квартал',
    'This Week': 'За цей тиждень',
    'This Year': 'За цей рік',
    Today: 'Сьогодні',
    'Year To Date': 'З початку року до поточної дати',
    Yesterday: 'Вчора'
  },
  get_string_filter_options: {
    contains: 'містить',
    'doesnt contain': 'не містить',
    'doesnt end with': 'не закінчується на',
    'doesnt start with': 'не починається з',
    'ends with': 'закінчується на',
    is: 'є',
    'is blank': 'пусте',
    'is not': 'не є',
    'is not blank': 'не пусте',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'starts with': 'починається з'
  },
  get_tier_filter_options: {
    is: 'є',
    'is any value': 'є будь-яким значенням',
    'is not': 'не є'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'збігається з атрибутом користувача'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'будь-яке значення'
  },
  OperatorLabel: {
    AND: 'І',
    OR: 'АБО'
  },
  past_units: {
    'complete days': 'повних днів',
    'complete fiscal quarters': 'повних фінансових кварталів',
    'complete fiscal years': 'повних фінансових років',
    'complete hours': 'повних годин',
    'complete minutes': 'повних хвилин',
    'complete months': 'повних місяців',
    'complete quarters': 'повних кварталів',
    'complete seconds': 'повних секунд',
    'complete weeks': 'повних тижнів',
    'complete years': 'повних років'
  },
  RadioGroup: {
    'any value': 'будь-яке значення'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Очистити все',
    Remove: 'Вилучити',
    Toggle: 'Перемкнути'
  },
  Relative: {
    ago: 'тому',
    'from now': 'відтепер'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Виберіть проміжок часу'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Настроюване',
    Presets: 'Заготовки'
  },
  RelativeTimeframePresets: {
    More: 'Ще'
  },
  use_filters_errors: {
    'Invalid value': 'Недійсне значення',
    'No value is set for your user attribute': 'Значення для атрибута користувача не вказано',
    'Selection required': 'Обов’язково виберіть елемент'
  },
  use_option_filtering: {
    'No values': 'Немає значень',
    'No values match': 'Немає значень, що збігаються'
  },
  use_placeholder: {
    'any value': 'будь-яке значення'
  },
  use_suggestable: {
    'Error loading suggestions': 'Помилка завантаження пропозицій'
  },
  use_validation_message: {
    'Value required': 'Потрібно ввести значення'
  }
};
var ukUA = {
  dateLocale: _uk["default"],
  locale: 'uk-UA',
  resources: {
    'uk-UA': (0, _merge["default"])({}, resources, _filterExpressions.ukUA.resources['uk-UA'], _components.ukUA.resources['uk-UA'])
  }
};
exports.ukUA = ukUA;
//# sourceMappingURL=uk-UA.js.map