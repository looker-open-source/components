import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' 完成',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '后',
    'is any time': '在任意时间',
    'is before': '早于',
    'is day': '是{{day}}',
    'is from dateTimeStart until dateTimeEnd': '从 {{dateTimeStart}}到 {{dateTimeEnd}}',
    'is in month year': '在 {{year}} {{month}}',
    'is in the last': '在上一个{{describeInterval}}',
    'is in the year year': '在 {{year}} 年',
    'is interval ago': '{{interval}}前',
    'is intervalStart intervalType for intervalEnd': '为 {{intervalStart}} {{intervalType}}，为期 {{intervalEnd}}',
    'is not null': '不是 null',
    'is on dateTime': '在 {{dateTime}}',
    'is on or after': '不早于',
    'is previous unitLabel': '上个{{unitLabel}}',
    'is type unitLabel': '是{{type}} {{unitLabel}}',
    next: '下一个',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}}现在',
    this: '此',
    'this startInterval to endInterval': '此 {{startInterval}} 到 {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任意值'
  },
  describe_is_item: {
    'is not value': '不是{{value}}',
    'is value': '是{{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}}至{{coords2}}',
    'distance unit from lat, lon': '距{{lat}}，{{lon}} {{distance}} {{unit}}',
    'is anywhere': '不限位置',
    'is not null': '不是 null',
    'is null': '是 null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': '在{{range}}范围内',
    'is not in range range': '不在{{range}}范围内'
  },
  describe_string: {
    blank: '空白',
    'contains value': '包含“{{value}}”',
    'does not contain value': '不包含“{{value}}”',
    'does not end with value': '结尾不是“{{value}}”',
    'does not start with value': '开头不是“{{value}}”',
    'ends with value': '结尾是“{{value}}”',
    'starts with value': '开头是“{{value}}”'
  },
  get_distance_unit_labels: {
    feet: '英尺',
    kilometers: '千米',
    meters: '米',
    miles: '英里'
  },
  get_months: {
    April: '4 月',
    August: '8 月',
    December: '12 月',
    February: '2 月',
    January: '1 月',
    July: '7 月',
    June: '6 月',
    March: '3 月',
    May: '5 月',
    November: '11 月',
    October: '10 月',
    September: '9 月'
  },
  get_unit_label: {
    'complete day': '完整天',
    'complete days': '天整',
    'complete fiscal quarter': '完整财政季度',
    'complete fiscal quarters': '个完整财季',
    'complete fiscal year': '完整财政年度',
    'complete fiscal years': '个完整财年',
    'complete hour': '完整小时',
    'complete hours': '小时整',
    'complete minute': '完整分钟',
    'complete minutes': '分钟整',
    'complete month': '完整月',
    'complete months': '个月整',
    'complete quarter': '完整季度',
    'complete quarters': '个季度整',
    'complete second': '完整秒',
    'complete seconds': '秒整',
    'complete week': '完整周',
    'complete weeks': '周整',
    'complete year': '完整年',
    'complete years': '年整',
    day: '天',
    days: '天',
    'fiscal quarter': '财政季度',
    'fiscal quarters': '财季',
    'fiscal year': '财政年度',
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