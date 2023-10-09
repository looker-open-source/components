import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' 完了',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '後',
    'is any time': '随時',
    'is before': 'が指定日より前',
    'is day': '{{day}}',
    'is from dateTimeStart until dateTimeEnd': '{{dateTimeStart}} から {{dateTimeEnd}} まで',
    'is in month year': '{{year}} / {{month}}',
    'is in the last': '直近 {{describeInterval}}',
    'is in the year year': '{{year}} 年',
    'is interval ago': '{{interval}} 前',
    'is intervalStart intervalType for intervalEnd': '{{intervalStart}} {{intervalType}}（対象: {{intervalEnd}}）',
    'is not null': 'null ではない',
    'is on dateTime': '{{dateTime}}',
    'is on or after': '次の日付以降',
    'is previous unitLabel': '以前の {{unitLabel}}',
    'is type unitLabel': '{{type}} {{unitLabel}}',
    next: '次',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} 現在',
    this: 'この',
    'this startInterval to endInterval': 'この{{startInterval}}から{{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任意の値'
  },
  describe_is_item: {
    'is not value': '{{value}} ではない',
    'is value': '{{value}} である'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}}～{{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}}（起点: {{lat}}、{{lon}}）',
    'is anywhere': '任意の場所',
    'is not null': 'null ではない',
    'is null': 'null である',
    'lat degrees north': '北緯 {{lat}}°',
    'lat degrees south': '南緯 {{lat}}°',
    'lon degrees east': '東経 {{lon}}°',
    'lon degrees west': '西経 {{lon}}°'
  },
  describe_number: {
    'is in range range': '{{range}} の範囲内',
    'is not in range range': '{{range}} の範囲外'
  },
  describe_string: {
    blank: '空白',
    'contains value': '{{value}} を含む',
    'does not contain value': '{{value}} を含まない',
    'does not end with value': '{{value}} で終わらない',
    'does not start with value': '{{value}} で始まらない',
    'ends with value': '{{value}} で終わる',
    'starts with value': '{{value}} で始まる'
  },
  get_distance_unit_labels: {
    feet: 'フィート',
    kilometers: 'キロメートル',
    meters: 'メートル',
    miles: 'マイル'
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
    'complete day': '終了した日',
    'complete days': '全日',
    'complete fiscal quarter': '終了した会計四半期',
    'complete fiscal quarters': '全会計四半期',
    'complete fiscal year': '終了した会計年度',
    'complete fiscal years': '全会計年度',
    'complete hour': '終了した時間',
    'complete hours': '全時間',
    'complete minute': '終了した分',
    'complete minutes': '全分',
    'complete month': '終了した月',
    'complete months': '全月',
    'complete quarter': '終了した四半期',
    'complete quarters': '全四半期',
    'complete second': '終了した秒',
    'complete seconds': '全秒',
    'complete week': '終了した週',
    'complete weeks': '全週',
    'complete year': '終了した年',
    'complete years': '全年',
    day: '日',
    days: '日',
    'fiscal quarter': '会計四半期',
    'fiscal quarters': '会計四半期',
    'fiscal year': '会計年度',
    'fiscal years': '会計年度',
    hour: '時間',
    hours: '時間',
    minute: '分',
    minutes: '分',
    month: 'か月',
    months: '月',
    quarter: '四半期',
    quarters: '四半期',
    second: '秒',
    seconds: '秒',
    week: '週',
    weeks: '週',
    year: '年',
    years: '年'
  },
  join_or: {
    'a or b': '{{a}} または {{b}}'
  },
  summary: {
    'Value required': '値は必須です'
  }
};
export const jaJP = mergeLocaleObjects([], 'ja-JP', resources);
//# sourceMappingURL=ja-JP.js.map