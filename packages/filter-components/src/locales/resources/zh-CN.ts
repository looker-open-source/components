/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import dateLocale from 'date-fns/locale/zh-CN';
import { zhCN as componentsLocale } from '@looker/components';
import { zhCN as filterexpressionsLocale } from '@looker/filter-expressions';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AddRemoveButtons: {
    Add: '添加',
    Remove: '移除',
  },
  before_after_units: {
    'days ago': '天前',
    'days from now': '天后',
    'fiscal quarter from now': '从现在开始的财季',
    'fiscal quarters ago': '个财季前',
    'fiscal years ago': '个财年前',
    'fiscal years from now': '个财年后',
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
    'years from now': '年后',
  },
  BeforeAfter: {
    absolute: '（绝对值）',
    relative: '（相对值）',
  },
  Between: {
    AND: '且',
  },
  date_units: {
    day: '天',
    days: '天',
    'fiscal quarter': '财季',
    'fiscal quarters': '财季',
    'fiscal year': '财年',
    'fiscal years': '财年',
    hour: '小时',
    hours: '小时',
    minute: '分钟',
    minutes: '分钟',
    month: '月',
    months: '月',
    quarter: '季度',
    quarters: '季度',
    second: '秒',
    seconds: '秒',
    week: '周',
    weeks: '周',
    year: '年',
    years: '年',
  },
  DateRange: {
    'until (before)': '直到（不包括）',
  },
  get_date_filter_options: {
    is: '是',
    'is any time': '在任意时间',
    'is before': '早于',
    'is in range': '在如下范围内：',
    'is in the last': '在最后',
    'is in the month': '在当月',
    'is in the year': '在如下年份：',
    'is next': '是下一',
    'is not null': '不是 null',
    'is null': '是 null',
    'is on or after': '不早于',
    'is on the day': '在当天',
    'is previous': '是上一',
    'is this': '是本',
  },
  get_filter_options: {
    'matches advanced': '匹配项（高级）',
  },
  get_location_filter_options: {
    Box: '框',
    Circle: '圆形',
    Location: '位置',
    feet: '英尺',
    'is anywhere': '不限位置',
    'is not null': '不是 null',
    'is null': '是 null',
    kilometers: '千米',
    meters: '米',
    miles: '英里',
  },
  get_number_filter_options: {
    exclusive: '（不含边界值）',
    inclusive: '[含边界值]',
    is: '是',
    'is between': '介于下列二者之间：',
    'is greater': '大于',
    'is greater equal': '大于等于',
    'is less': '小于',
    'is less equal': '小于等于',
    'is not': '不是',
    'is not between': '不介于下列二者之间：',
    'is not null': '不是 null',
    'is null': '是 null',
    'left exclusive': '(不含左侧边界值]',
    'right exclusive': '[不含右侧边界值)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '过去 14 天',
    'Last 180 Days': '过去 180 天',
    'Last 28 Days': '过去 28 天',
    'Last 30 Days': '过去 30 天',
    'Last 365 Days': '过去 365 天',
    'Last 7 Days': '过去 7 天',
    'Last 90 Days': '过去 90 天',
    'Previous Month': '上个月',
    'Previous Quarter': '上个季度',
    'Previous Week': '上周',
    'Previous Year': '上一年',
    'This Month': '本月',
    'This Quarter': '本季度',
    'This Week': '本周',
    'This Year': '今年',
    Today: '今天',
    'Year To Date': '年初至今',
    Yesterday: '昨天',
  },
  get_string_filter_options: {
    contains: '包含',
    'doesnt contain': '不包含',
    'doesnt end with': '结尾不是',
    'doesnt start with': '开头不是',
    'ends with': '结尾是',
    is: '是',
    'is blank': '为空',
    'is not': '不是',
    'is not blank': '不为空',
    'is not null': '不是 null',
    'is null': '是 null',
    'starts with': '开头是',
  },
  get_tier_filter_options: {
    is: '是',
    'is any value': '是任意值',
    'is not': '不是',
  },
  get_user_attribute_option: {
    'matches a user attribute': '与用户属性匹配',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NoMatchingFields: {
    'No Matching Fields': '没有匹配的字段',
    'Try Something Else':
      '请尝试使用其他搜索字词，或重新开始并展开任意探索以浏览可用字段。',
  },
  NumberFilter: {
    'any value': '任意值',
  },
  OperatorLabel: {
    AND: '且',
    OR: '或',
  },
  past_units: {
    'complete days': '天整',
    'complete fiscal quarters': '个完整财季',
    'complete fiscal years': '个完整财年',
    'complete hours': '小时整',
    'complete minutes': '分钟整',
    'complete months': '个月整',
    'complete quarters': '个季度整',
    'complete seconds': '秒整',
    'complete weeks': '周整',
    'complete years': '年整',
  },
  RadioGroup: {
    'any value': '任意值',
  },
  ReactSelectCustomIcons: {
    'Clear all': '全部清除',
    Remove: '移除',
    Toggle: '切换',
  },
  Relative: {
    ago: '前',
    'from now': '后',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '选择一个时间范围',
  },
  RelativeTimeframePopoverContent: {
    Custom: '自定义',
    Presets: '预设',
  },
  RelativeTimeframePresets: {
    More: '更多',
  },
  use_filters_errors: {
    'Invalid value': '该值无效',
    'No value is set for your user attribute': '没有为您的用户属性设置任何值',
    'Selection required': '必须选择',
  },
  use_option_filtering: {
    'No values': '无值',
    'No values match': '没有匹配的值',
  },
  use_placeholder: {
    'any value': '任意值',
  },
  use_suggestable: {
    'Error loading suggestions': '加载建议时出错',
  },
  use_validation_message: {
    'Value required': '必须提供值',
  },
  UserAttributes: {
    placeholder: '请选择…',
  },
};

export const zhCN = mergeLocaleObjects(
  [componentsLocale, filterexpressionsLocale],
  'zh-CN',
  resources,
  dateLocale
);
