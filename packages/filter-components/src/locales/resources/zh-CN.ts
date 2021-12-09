/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/zh-CN'
import type { I18nStateWithDates } from '../../utils'
import { zhCN as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: '添加',
    Remove: '移除',
  },
  BeforeAfter: {
    absolute: '（绝对值）',
    relative: '（相对值）',
  },
  Between: {
    AND: '和',
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
    'is this': '为此',
  },
  get_filter_options: {
    'matches advanced': '匹配（高级）',
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
    miles: '英里',
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
    'right exclusive': '[右侧不包含)',
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
    'starts with': '开头为',
  },
  get_tier_filter_options: {
    is: '为',
    'is any value': '任意值',
    'is not': '不为',
  },
  get_user_attribute_option: {
    'matches a user attribute': '匹配用户属性',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: '和',
    OR: '或',
  },
  ReactSelectCustomIcons: {
    'Clear all': '全部清除',
    Remove: '移除',
    Toggle: '切换',
  },
  Relative: {
    ago: '以前',
    'from now': '从现在起',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '选择时间范围',
  },
  RelativeTimeframePopoverContent: {
    Custom: '自定义',
    Presets: '预设',
  },
  RelativeTimeframePresets: {
    More: '更多',
  },
  use_option_filtering: {
    'No values': '没有值',
    'No values match': '没有相符值',
  },
  use_placeholder: {
    'any value': '任意值',
  },
  use_suggestable: {
    'Error loading suggestions': '加载建议时发生错误',
  },
  use_validation_message: {
    'Value required': '必须提供值',
  },
}

export const zhCN: I18nStateWithDates = {
  dateLocale,
  locale: 'zh-CN',
  resources: { 'zh-CN': merge(resources, expressionLocale.resources['zh-CN']) },
}
