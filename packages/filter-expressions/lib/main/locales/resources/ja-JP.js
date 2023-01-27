"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' 完了',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '後',
    'is any time': 'の時間を問わずすべて',
    'is before': 'が指定の日以前',
    'is day': 'が次である（{{day}}）',
    'is from dateTimeStart until dateTimeEnd': 'が{{dateTimeStart}}から{{dateTimeEnd}}まで',
    'is in month year': 'が次である（{{year}}{{month}}）',
    'is in the last': 'が直近{{describeInterval}}以内である',
    'is in the year year': 'が指定の年である（{{year}}）',
    'is interval ago': 'が{{interval}}前である',
    'is intervalStart intervalType for intervalEnd': 'が{{intervalEnd}}の{{intervalStart}}{{intervalType}}',
    'is not null': 'が Null でない',
    'is on dateTime': 'が次である（{{dateTime}}）',
    'is on or after': 'が指定の日以降',
    'is previous unitLabel': 'が前の{{unitLabel}}である',
    'is type unitLabel': 'が次である（{{type}}{{unitLabel}}）',
    next: '次',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}}現在',
    "this": 'この',
    'this startInterval to endInterval': 'この{{startInterval}}から{{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': '任意の値'
  },
  describe_is_item: {
    'is not value': 'が次の値でない（{{value}}）',
    'is value': 'が次の値である（{{value}}）'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}}から{{coords2}}へ',
    'distance unit from lat, lon': '{{lat}}、{{lon}}から{{distance}}{{unit}}',
    'is anywhere': 'がいずれかの場所にある',
    'is not null': 'が Null でない',
    'is null': 'が Null である',
    'lat degrees north': '北緯 {{lat}}°',
    'lat degrees south': '南緯 {{lat}}°',
    'lon degrees east': '東経 {{lon}}°',
    'lon degrees west': '西経 {{lon}}°'
  },
  describe_number: {
    'is in range range': 'が指定の範囲内（{{range}}）',
    'is not in range range': 'が次の範囲外（{{range}}）'
  },
  describe_string: {
    blank: '空欄',
    'contains value': 'が次の値を含む（{{value}}）',
    'does not contain value': 'が次の値を含まない（{{value}}）',
    'does not end with value': 'が次の値で終わらない（{{value}}）',
    'does not start with value': 'が次の値で始まらない（{{value}}）',
    'ends with value': 'が次の値で終わる（{{value}}）',
    'starts with value': 'が次の値で始まる（{{value}}）'
  },
  get_distance_unit_labels: {
    feet: 'feet',
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
    'complete days': '終了した日',
    'complete fiscal quarter': '終了した会計四半期',
    'complete fiscal quarters': '終了した会計四半期',
    'complete fiscal year': '終了した会計年度',
    'complete fiscal years': '終了した会計年度',
    'complete hour': '終了した時間',
    'complete hours': '終了した時間',
    'complete minute': '終了した分',
    'complete minutes': '終了した分',
    'complete month': '終了した月',
    'complete months': '終了した月',
    'complete quarter': '終了した四半期',
    'complete quarters': '終了した四半期',
    'complete second': '終了した秒',
    'complete seconds': '終了した秒',
    'complete week': '終了した週',
    'complete weeks': '終了した週',
    'complete year': '終了した年',
    'complete years': '終了した年',
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
    months: 'か月',
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
    'a or b': '{{a}}または{{b}}'
  },
  summary: {
    'Value required': '値が必須'
  }
};
var jaJP = (0, _i18n.mergeLocaleObjects)([], 'ja-JP', resources);
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map