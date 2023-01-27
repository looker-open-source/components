

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' 完成',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '從現在起',
    'is any time': '是任何時間',
    'is before': '早於',
    'is day': '為{{day}}',
    'is from dateTimeStart until dateTimeEnd': '從 {{dateTimeStart}} 到 {{dateTimeEnd}}',
    'is in month year': '為 {{year}} 年 {{month}} 月',
    'is in the last': '在最後 {{describeInterval}}',
    'is in the year year': '為 {{year}} 年',
    'is interval ago': '{{interval}} 前',
    'is intervalStart intervalType for intervalEnd': '每 {{intervalStart}} {{intervalType}} 到 {{intervalEnd}}',
    'is not null': '不是 Null',
    'is on dateTime': '在 {{dateTime}}',
    'is on or after': '在或晚於',
    'is previous unitLabel': '在前一個 {{unitLabel}}',
    'is type unitLabel': '為 {{type}} {{unitLabel}}',
    next: '下一步',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '現在為 {{prefix}}',
    this: '這',
    'this startInterval to endInterval': '這個 {{startInterval}} 到 {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任何值'
  },
  describe_is_item: {
    'is not value': '並非 {{value}}',
    'is value': '是 {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} 至 {{coords2}}',
    'distance unit from lat, lon': '從 {{lat}}，{{lon}} 的 {{distance}} {{unit}} ',
    'is anywhere': '任意處',
    'is not null': '不是 Null',
    'is null': '是 Null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': '在範圍內 {{range}}',
    'is not in range range': '不在範圍內 {{range}}'
  },
  describe_string: {
    blank: '空白',
    'contains value': '包含 {{value}}',
    'does not contain value': '不包含 {{value}}',
    'does not end with value': '結尾並非 {{value}}',
    'does not start with value': '開頭並非 {{value}}',
    'ends with value': '結尾為 {{value}}',
    'starts with value': '開頭為 {{value}}'
  },
  get_distance_unit_labels: {
    feet: '英呎',
    kilometers: '公里',
    meters: '公尺',
    miles: '英哩'
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
    May: '五月',
    November: '十一月',
    October: '十月',
    September: '九月'
  },
  get_unit_label: {
    'complete day': '天整',
    'complete days': '天整',
    'complete fiscal quarter': '個完整會計季度',
    'complete fiscal quarters': '個完整會計季度',
    'complete fiscal year': '個完整會計年度',
    'complete fiscal years': '個完整會計年度',
    'complete hour': '小時整',
    'complete hours': '小時整',
    'complete minute': '分鐘整',
    'complete minutes': '分鐘整',
    'complete month': '個月整',
    'complete months': '個月整',
    'complete quarter': '季整',
    'complete quarters': '季整',
    'complete second': '秒整',
    'complete seconds': '秒整',
    'complete week': '週整',
    'complete weeks': '週整',
    'complete year': '年整',
    'complete years': '年整',
    day: '天',
    days: '天',
    'fiscal quarter': '會計季度',
    'fiscal quarters': '個會計季度',
    'fiscal year': '會計年度',
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
  join_or: {
    'a or b': '{{a}} 或 {{b}}'
  },
  summary: {
    'Value required': '需要值'
  }
};
export const zhTW = mergeLocaleObjects([], 'zh-TW', resources);
//# sourceMappingURL=zh-TW.js.map