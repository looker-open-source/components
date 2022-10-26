"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Add',
    Remove: 'Remove'
  },
  before_after_units: {
    'days ago': 'days ago',
    'days from now': 'days from now',
    'fiscal quarter from now': 'fiscal quarter from now',
    'fiscal quarters ago': 'fiscal quarters ago',
    'fiscal years ago': 'fiscal years ago',
    'fiscal years from now': 'fiscal years from now',
    'hours ago': 'hours ago',
    'hours from now': 'hours from now',
    'minutes ago': 'minutes ago',
    'minutes from now': 'minutes from now',
    'months ago': 'months ago',
    'months from now': 'months from now',
    now: 'now',
    'quarters ago': 'quarters ago',
    'quarters from now': 'quarters from now',
    'seconds ago': 'seconds ago',
    'seconds from now': 'seconds from now',
    'weeks ago': 'weeks ago',
    'weeks from now': 'weeks from now',
    'years ago': 'years ago',
    'years from now': 'years from now'
  },
  BeforeAfter: {
    absolute: '(absolute)',
    relative: '(relative)'
  },
  Between: {
    AND: 'AND'
  },
  date_units: {
    day: 'day',
    days: 'days',
    'fiscal quarter': 'fiscal quarter',
    'fiscal quarters': 'fiscal quarters',
    'fiscal year': 'fiscal year',
    'fiscal years': 'fiscal years',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    month: 'month',
    months: 'months',
    quarter: 'quarter',
    quarters: 'quarters',
    second: 'second',
    seconds: 'seconds',
    week: 'week',
    weeks: 'weeks',
    year: 'year',
    years: 'years'
  },
  DateRange: {
    'until (before)': 'until (before)'
  },
  get_date_filter_options: {
    is: 'is',
    'is any time': 'is any time',
    'is before': 'is before',
    'is in range': 'is in range',
    'is in the last': 'is in the last',
    'is in the month': 'is in the month',
    'is in the year': 'is in the year',
    'is next': 'is next',
    'is not null': 'is not null',
    'is null': 'is null',
    'is on or after': 'is on or after',
    'is on the day': 'is on the day',
    'is previous': 'is previous',
    'is this': 'is this'
  },
  get_filter_options: {
    'matches advanced': 'matches (advanced)'
  },
  get_location_filter_options: {
    Box: 'Box',
    Circle: 'Circle',
    Location: 'Location',
    feet: 'feet',
    'is anywhere': 'is anywhere',
    'is not null': 'is not null',
    'is null': 'is null',
    kilometers: 'kilometers',
    meters: 'meters',
    miles: 'miles'
  },
  get_number_filter_options: {
    exclusive: '(exclusive)',
    inclusive: '[inclusive]',
    is: 'is',
    'is between': 'is between',
    'is greater': 'is >',
    'is greater equal': 'is >=',
    'is less': 'is <',
    'is less equal': 'is <=',
    'is not': 'is not',
    'is not between': 'is not between',
    'is not null': 'is not null',
    'is null': 'is null',
    'left exclusive': '(left-exclusive]',
    'right exclusive': '[right-exclusive)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Last 14 Days',
    'Last 180 Days': 'Last 180 Days',
    'Last 28 Days': 'Last 28 Days',
    'Last 30 Days': 'Last 30 Days',
    'Last 365 Days': 'Last 365 Days',
    'Last 7 Days': 'Last 7 Days',
    'Last 90 Days': 'Last 90 Days',
    'Previous Month': 'Previous Month',
    'Previous Quarter': 'Previous Quarter',
    'Previous Week': 'Previous Week',
    'Previous Year': 'Previous Year',
    'This Month': 'This Month',
    'This Quarter': 'This Quarter',
    'This Week': 'This Week',
    'This Year': 'This Year',
    Today: 'Today',
    'Year To Date': 'Year To Date',
    Yesterday: 'Yesterday'
  },
  get_string_filter_options: {
    contains: 'contains',
    'doesnt contain': "doesn't contain",
    'doesnt end with': "doesn't end with",
    'doesnt start with': "doesn't start with",
    'ends with': 'ends with',
    is: 'is',
    'is blank': 'is blank',
    'is not': 'is not',
    'is not blank': 'is not blank',
    'is not null': 'is not null',
    'is null': 'is null',
    'starts with': 'starts with'
  },
  get_tier_filter_options: {
    is: 'is',
    'is any value': 'is any value',
    'is not': 'is not'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matches a user attribute'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'any value'
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR'
  },
  past_units: {
    'complete days': 'complete days',
    'complete fiscal quarters': 'complete fiscal quarters',
    'complete fiscal years': 'complete fiscal years',
    'complete hours': 'complete hours',
    'complete minutes': 'complete minutes',
    'complete months': 'complete months',
    'complete quarters': 'complete quarters',
    'complete seconds': 'complete seconds',
    'complete weeks': 'complete weeks',
    'complete years': 'complete years'
  },
  RadioGroup: {
    'any value': 'any value'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Clear all',
    Remove: 'Remove',
    Toggle: 'Toggle'
  },
  Relative: {
    ago: 'ago',
    'from now': 'from now'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Choose a Timeframe'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Custom',
    Presets: 'Presets'
  },
  RelativeTimeframePresets: {
    More: 'More'
  },
  use_filters_errors: {
    'Invalid value': 'Invalid value',
    'No value is set for your user attribute': 'No value is set for your user attribute',
    'Selection required': 'Selection required'
  },
  use_option_filtering: {
    'No values': 'No values',
    'No values match': 'No values match'
  },
  use_placeholder: {
    'any value': 'any value'
  },
  use_suggestable: {
    'Error loading suggestions': 'Error loading suggestions'
  },
  use_validation_message: {
    'Value required': 'Value required'
  }
};
var en = {
  dateLocale: _enUS["default"],
  locale: 'en',
  resources: {
    en: (0, _merge["default"])({}, resources, _filterExpressions.en.resources.en, _components.en.resources.en)
  }
};
exports.en = en;
//# sourceMappingURL=en.js.map