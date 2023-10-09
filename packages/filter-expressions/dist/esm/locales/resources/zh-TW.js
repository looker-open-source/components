import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' 完成',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '後',
    'is any time': '為任何時間',
    'is before': '早於',
    'is day': '是{{day}}',
    'is from dateTimeStart until dateTimeEnd': '從 {{dateTimeStart}}直到 {{dateTimeEnd}}',
    'is in month year': '在 {{year}} {{month}}',
    'is in the last': '在過去 {{describeInterval}}',
    'is in the year year': '在 {{year}} 年',
    'is interval ago': '在 {{interval}}前',
    'is intervalStart intervalType for intervalEnd': '為 {{intervalStart}} {{intervalType}}，為期 {{intervalEnd}}',
    'is not null': '不是空值',
    'is on dateTime': '在 {{dateTime}}',
    'is on or after': '在這天或之後',
    'is previous unitLabel': '是上一個{{unitLabel}}',
    'is type unitLabel': '是{{type}}{{unitLabel}}',
    next: '下一個',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}}現在',
    this: '這個',
    'this startInterval to endInterval': '這個 {{startInterval}} 到 {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任何值'
  },
  describe_is_item: {
    'is not value': '不是「{{value}}」',
    'is value': '是「{{value}}」'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} 至 {{coords2}}',
    'distance unit from lat, lon': '距離 {{lon}}, {{lat}} 這個位置 {{distance}} {{unit}}',
    'is anywhere': '為任何地方',
    'is not null': '不是空值',
    'is null': '為空值',
    'lat degrees north': '北緯 {{lat}} 度',
    'lat degrees south': '南緯 {{lat}} 度',
    'lon degrees east': '東經 {{lon}} 度',
    'lon degrees west': '西經 {{lon}} 度'
  },
  describe_number: {
    'is in range range': '在「{{range}}」這個範圍內',
    'is not in range range': '不在「{{range}}」這個範圍內'
  },
  describe_string: {
    blank: '空白',
    'contains value': '包含「{{value}}」',
    'does not contain value': '不含「{{value}}」',
    'does not end with value': '結尾不是「{{value}}」',
    'does not start with value': '開頭不是「{{value}}」',
    'ends with value': '結尾為「{{value}}」',
    'starts with value': '開頭為「{{value}}」'
  },
  get_distance_unit_labels: {
    feet: '英尺',
    kilometers: '公里',
    meters: '公尺',
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
    months: '個月',
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
    'a or b': '{{a}}或{{b}}'
  },
  summary: {
    'Value required': '必須提供值'
  }
};
export const zhTW = mergeLocaleObjects([], 'zh-TW', resources);
//# sourceMappingURL=zh-TW.js.map