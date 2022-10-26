"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _zhTW = _interopRequireDefault(require("date-fns/locale/zh-TW"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: '新增',
    Remove: '移除'
  },
  before_after_units: {
    'days ago': '天前',
    'days from now': '天後',
    'fiscal quarter from now': '個會計季度後',
    'fiscal quarters ago': '個會計季度前',
    'fiscal years ago': '個會計年度前',
    'fiscal years from now': '個會計年度後',
    'hours ago': '小時前',
    'hours from now': '小時後',
    'minutes ago': '分鐘前',
    'minutes from now': '分鐘後',
    'months ago': '個月前',
    'months from now': '個月後',
    now: '現在',
    'quarters ago': '季前',
    'quarters from now': '季後',
    'seconds ago': '秒前',
    'seconds from now': '秒後',
    'weeks ago': '週前',
    'weeks from now': '週後',
    'years ago': '年前',
    'years from now': '年後'
  },
  BeforeAfter: {
    absolute: '(絕對)',
    relative: '(相對)'
  },
  Between: {
    AND: '和'
  },
  date_units: {
    day: '天',
    days: '天',
    'fiscal quarter': '個會計季度',
    'fiscal quarters': '個會計季度',
    'fiscal year': '個會計年度',
    'fiscal years': '個會計年度',
    hour: '小時',
    hours: '小時',
    minute: '分鐘',
    minutes: '分鐘',
    month: '月',
    months: '月',
    quarter: '季',
    quarters: '季',
    second: '秒',
    seconds: '秒',
    week: '週',
    weeks: '週',
    year: '年',
    years: '年'
  },
  DateRange: {
    'until (before)': '直到 (之前)'
  },
  get_date_filter_options: {
    is: '是',
    'is any time': '是任何時間',
    'is before': '早於',
    'is in range': '在範圍內',
    'is in the last': '在最後',
    'is in the month': '在當月',
    'is in the year': '在當年',
    'is next': '在下一個',
    'is not null': '不是 Null',
    'is null': '是 Null',
    'is on or after': '在或晚於',
    'is on the day': '在當天',
    'is previous': '在前一個',
    'is this': '在這個'
  },
  get_filter_options: {
    'matches advanced': '符合 (進階)'
  },
  get_location_filter_options: {
    Box: '方塊',
    Circle: '圓形',
    Location: '位置',
    feet: '英呎',
    'is anywhere': '任意處',
    'is not null': '不是 Null',
    'is null': '是 Null',
    kilometers: '公里',
    meters: '公尺',
    miles: '英哩'
  },
  get_number_filter_options: {
    exclusive: '(排除)',
    inclusive: '[內含]',
    is: '是',
    'is between': '介於',
    'is greater': '為 >',
    'is greater equal': ' >=',
    'is less': ' <',
    'is less equal': ' <=',
    'is not': '不是',
    'is not between': '不介於',
    'is not null': '不是 Null',
    'is null': '是 Null',
    'left exclusive': '(排除左邊]',
    'right exclusive': '[排除右邊)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '過去 14 天內',
    'Last 180 Days': '過去 180 天內',
    'Last 28 Days': '過去 28 天內',
    'Last 30 Days': '過去 30 天內',
    'Last 365 Days': '過去 365 天內',
    'Last 7 Days': '過去 7 天內',
    'Last 90 Days': '過去 90 天內',
    'Previous Month': '上個月',
    'Previous Quarter': '上一季',
    'Previous Week': '上一週',
    'Previous Year': '上一年度',
    'This Month': '本月',
    'This Quarter': '本季',
    'This Week': '本週',
    'This Year': '本年度',
    Today: '今天',
    'Year To Date': '年初至今',
    Yesterday: '昨天'
  },
  get_string_filter_options: {
    contains: '包含',
    'doesnt contain': '不包含',
    'doesnt end with': '結尾不是',
    'doesnt start with': '開頭不是',
    'ends with': '結尾是',
    is: '是',
    'is blank': '空白',
    'is not': '不是',
    'is not blank': '不是空白',
    'is not null': '不是 Null',
    'is null': '是 Null',
    'starts with': '開頭是'
  },
  get_tier_filter_options: {
    is: '是',
    'is any value': '是任何值',
    'is not': '不是'
  },
  get_user_attribute_option: {
    'matches a user attribute': '符合使用者屬性'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': '任何值'
  },
  OperatorLabel: {
    AND: '和',
    OR: 'OR'
  },
  past_units: {
    'complete days': '天整',
    'complete fiscal quarters': '個完整會計季度',
    'complete fiscal years': '個完整會計年度',
    'complete hours': '小時整',
    'complete minutes': '分鐘整',
    'complete months': '個月整',
    'complete quarters': '季整',
    'complete seconds': '秒整',
    'complete weeks': '週整',
    'complete years': '年整'
  },
  RadioGroup: {
    'any value': '任何值'
  },
  ReactSelectCustomIcons: {
    'Clear all': '全部清除',
    Remove: '移除',
    Toggle: '切換'
  },
  Relative: {
    ago: '前',
    'from now': '從現在起'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '選擇時間範圍'
  },
  RelativeTimeframePopoverContent: {
    Custom: '自訂',
    Presets: '預設'
  },
  RelativeTimeframePresets: {
    More: '更多'
  },
  use_filters_errors: {
    'Invalid value': '無效的值',
    'No value is set for your user attribute': '沒有為您的使用者屬性設定值',
    'Selection required': '需要選取內容'
  },
  use_option_filtering: {
    'No values': '沒有值',
    'No values match': '沒有相符的值'
  },
  use_placeholder: {
    'any value': '任何值'
  },
  use_suggestable: {
    'Error loading suggestions': '載入建議時發生錯誤'
  },
  use_validation_message: {
    'Value required': '需要值'
  }
};
var zhTW = {
  dateLocale: _zhTW["default"],
  locale: 'zh-TW',
  resources: {
    'zh-TW': (0, _merge["default"])({}, resources, _filterExpressions.zhTW.resources['zh-TW'], _components.zhTW.resources['zh-TW'])
  }
};
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map