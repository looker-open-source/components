

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' 完成',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '以前',
    'from now': '从现在起',
    'is any time': '任意时间',
    'is before': '早于',
    'is day': '在 {{day}} 这一天',
    'is from dateTimeStart until dateTimeEnd': '从 {{dateTimeStart}} 到 {{dateTimeEnd}}',
    'is in month year': '在 {{year}} 年 {{month}} 之内',
    'is in the last': '在过去 {{describeInterval}} 之内',
    'is in the year year': '在 {{year}} 年之内',
    'is interval ago': '在 {{interval}} 之前',
    'is intervalStart intervalType for intervalEnd': '{{intervalType}} 在 {{intervalStart}} 到 {{intervalEnd}} 期间',
    'is not null': '不为空值',
    'is on dateTime': '在 {{dateTime}} 这一时间',
    'is on or after': '等于或晚于',
    'is previous unitLabel': '上一 {{unitLabel}}',
    'is type unitLabel': '为 {{type}} {{unitLabel}}',
    next: '下一步',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} 现在',
    this: '此',
    'this startInterval to endInterval': '此 {{startInterval}} 到 {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任意值'
  },
  describe_is_item: {
    'is not value': '不为 {{value}}',
    'is value': '为 {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} 至 {{coords2}}',
    'distance unit from lat, lon': '距离 {{lat}} {{distance}} {{unit}} ({{lon}})',
    'is anywhere': '在任何地方',
    'is not null': '不为空值',
    'is null': '为空值',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': '在 {{range}} 范围内',
    'is not in range range': '不在 {{range}} 范围内'
  },
  describe_string: {
    blank: '空',
    'contains value': '包含 {{value}}',
    'does not contain value': '不包含 {{value}}',
    'does not end with value': '结尾不为 {{value}}',
    'does not start with value': '开头不为 {{value}}',
    'ends with value': '结尾为 {{value}}',
    'starts with value': '开头为 {{value}}'
  },
  get_distance_unit_labels: {
    feet: '英尺',
    kilometers: '千米',
    meters: '米',
    miles: '英里'
  },
  get_months: {
    April: '四月',
    August: '八月',
    December: '十二月',
    February: '二月',
    January: '一月',
    July: '七月',
    June: '六月',
    March: '三月',
    May: '5 月',
    November: '十一月',
    October: '十月',
    September: '九月'
  },
  get_unit_label: {
    'complete day': '完整天',
    'complete days': '完整天',
    'complete fiscal quarter': '完整财政季度',
    'complete fiscal quarters': '完整财政季度',
    'complete fiscal year': '完整财政年度',
    'complete fiscal years': '完整财政年度',
    'complete hour': '完整小时',
    'complete hours': '完整小时',
    'complete minute': '完整分钟',
    'complete minutes': '完整分钟',
    'complete month': '完整月',
    'complete months': '完整月',
    'complete quarter': '完整季度',
    'complete quarters': '完整季度',
    'complete second': '完整秒',
    'complete seconds': '完整秒',
    'complete week': '完整周',
    'complete weeks': '完整周',
    'complete year': '完整年',
    'complete years': '完整年',
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
  join_or: {
    'a or b': '{{a}} 或 {{b}}'
  },
  summary: {
    'Value required': '必须提供值'
  }
};
export const zhCN = mergeLocaleObjects([], 'zh-CN', resources);
//# sourceMappingURL=zh-CN.js.map