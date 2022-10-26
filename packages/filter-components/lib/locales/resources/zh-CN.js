import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/zh-CN';
import { zhCN as expressionLocale } from '@looker/filter-expressions';
import { zhCN as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: '添加',
    Remove: '移除'
  },
  before_after_units: {
    'days ago': '天前',
    'days from now': '天后',
    'fiscal quarter from now': '个财政季度后（距今）',
    'fiscal quarters ago': '个财政季度前',
    'fiscal years ago': '个财政年度前',
    'fiscal years from now': '个财政年度后',
    'hours ago': '小时前',
    'hours from now': '小时后',
    'minutes ago': '分钟前',
    'minutes from now': '分钟后',
    'months ago': '个月前',
    'months from now': '个月后',
    now: '现在',
    'quarters ago': '个季度前',
    'quarters from now': '个季度后',
    'seconds ago': '秒前',
    'seconds from now': '秒后',
    'weeks ago': '周前',
    'weeks from now': '周后',
    'years ago': '年前',
    'years from now': '年后'
  },
  BeforeAfter: {
    absolute: '（绝对值）',
    relative: '（相对值）'
  },
  Between: {
    AND: '和'
  },
  date_units: {
    day: '天',
    days: '天',
    'fiscal quarter': '财政季度',
    'fiscal quarters': '个财政季度',
    'fiscal year': '财政年度',
    'fiscal years': '个财政年度',
    hour: '小时',
    hours: '小时',
    minute: '分钟',
    minutes: '分钟',
    month: '月',
    months: '个月',
    quarter: '季度',
    quarters: '个季度',
    second: '秒',
    seconds: '秒',
    week: '周',
    weeks: '周',
    year: '年',
    years: '年'
  },
  DateRange: {
    'until (before)': '截止到（之前）'
  },
  get_date_filter_options: {
    is: '为',
    'is any time': '任意时间',
    'is before': '早于',
    'is in range': '在范围内',
    'is in the last': '在上一个',
    'is in the month': '月份为',
    'is in the year': '本年度',
    'is next': '为下一个',
    'is not null': '不为空值',
    'is null': '为空值',
    'is on or after': '等于或晚于',
    'is on the day': '为当天',
    'is previous': '为上一个',
    'is this': '为此'
  },
  get_filter_options: {
    'matches advanced': '匹配（高级）'
  },
  get_location_filter_options: {
    Box: '框',
    Circle: '圈',
    Location: '位置',
    feet: '英尺',
    'is anywhere': '在任何地方',
    'is not null': '不为空值',
    'is null': '为空值',
    kilometers: '千米',
    meters: '米',
    miles: '英里'
  },
  get_number_filter_options: {
    exclusive: '(不包含)',
    inclusive: '[包含]',
    is: '为',
    'is between': '介于',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': '不为',
    'is not between': '不介于',
    'is not null': '不为空值',
    'is null': '为空值',
    'left exclusive': '(左侧不包含]',
    'right exclusive': '[右侧不包含)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '最近 14 天',
    'Last 180 Days': '最近 180 天',
    'Last 28 Days': '最近 28 天',
    'Last 30 Days': '最近 30 天',
    'Last 365 Days': '最近 365 天',
    'Last 7 Days': '最近 7 天',
    'Last 90 Days': '最近 90 天',
    'Previous Month': '上个月',
    'Previous Quarter': '上个季度',
    'Previous Week': '上周',
    'Previous Year': '上一年',
    'This Month': '本月',
    'This Quarter': '本季度',
    'This Week': '本周',
    'This Year': '今年',
    Today: '今日',
    'Year To Date': '年初至今',
    Yesterday: '昨天'
  },
  get_string_filter_options: {
    contains: '包含',
    'doesnt contain': '不包含',
    'doesnt end with': '结尾不为',
    'doesnt start with': '开头不为',
    'ends with': '结尾为',
    is: '为',
    'is blank': '为空',
    'is not': '不为',
    'is not blank': '不为空',
    'is not null': '不为空值',
    'is null': '为空值',
    'starts with': '开头为'
  },
  get_tier_filter_options: {
    is: '为',
    'is any value': '任意值',
    'is not': '不为'
  },
  get_user_attribute_option: {
    'matches a user attribute': '匹配用户属性'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': '任意值'
  },
  OperatorLabel: {
    AND: '和',
    OR: '或'
  },
  past_units: {
    'complete days': '完整天',
    'complete fiscal quarters': '完整财政季度',
    'complete fiscal years': '完整财政年度',
    'complete hours': '完整小时',
    'complete minutes': '完整分钟',
    'complete months': '完整月',
    'complete quarters': '完整季度',
    'complete seconds': '完整秒',
    'complete weeks': '完整周',
    'complete years': '完整年'
  },
  RadioGroup: {
    'any value': '任意值'
  },
  ReactSelectCustomIcons: {
    'Clear all': '全部清除',
    Remove: '移除',
    Toggle: '切换'
  },
  Relative: {
    ago: '以前',
    'from now': '从现在起'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '选择时间范围'
  },
  RelativeTimeframePopoverContent: {
    Custom: '自定义',
    Presets: '预设'
  },
  RelativeTimeframePresets: {
    More: '更多'
  },
  use_filters_errors: {
    'Invalid value': '无效值',
    'No value is set for your user attribute': '您的用户属性没有设置任何值',
    'Selection required': '所需的选择'
  },
  use_option_filtering: {
    'No values': '没有值',
    'No values match': '没有相符值'
  },
  use_placeholder: {
    'any value': '任意值'
  },
  use_suggestable: {
    'Error loading suggestions': '加载建议时发生错误'
  },
  use_validation_message: {
    'Value required': '必须提供值'
  }
};
export const zhCN = {
  dateLocale,
  locale: 'zh-CN',
  resources: {
    'zh-CN': merge({}, resources, expressionLocale.resources['zh-CN'], componentsLocale.resources['zh-CN'])
  }
};
//# sourceMappingURL=zh-CN.js.map