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
import type { I18nState } from '../../utils'

const resources = {
  describe_date: {
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '後',
    'is any time': 'の時間を問わずすべて',
    'is before': 'が次の日以前',
    'is day': 'が次である（{{day}}）',
    'is from dateTimeStart until dateTimeEnd':
      'が{{dateTimeStart}}から{{dateTimeEnd}}まで',
    'is in month year': 'が次である（{{year}}{{month}}）',
    'is in the last': 'が直近{{describeInterval}}以内である',
    'is in the year year': 'が次の年である（{{year}}）',
    'is interval ago': 'が{{interval}}前である',
    'is intervalStart intervalType for intervalEnd':
      'が{{intervalEnd}}の{{intervalStart}}{{intervalType}}',
    'is not null': 'がNullでない',
    'is on dateTime': 'が次である（{{dateTime}}）',
    'is on or after': 'が次の日以降',
    'is previous unitLabel': 'が前の{{unitLabel}}である',
    'is type unitLabel': 'が次である（{{type}}{{unitLabel}}）',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}}現在',
    'this startInterval to endInterval':
      'この{{startInterval}}から{{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: '4月',
    August: '8月',
    December: '12月',
    February: '2月',
    January: '1月',
    July: '7月',
    June: '6月',
    March: '3月',
    May: '5月',
    November: '11月',
    October: '10月',
    September: '9月',
  },
  get_unit_label: {
    'complete days': '終了した日',
    'complete fiscal quarters': '終了した会計四半期',
    'complete fiscal years': '終了した会計年度',
    'complete hours': '終了した時間',
    'complete minutes': '終了した分',
    'complete months': '終了した月',
    'complete quarters': '終了した四半期',
    'complete seconds': '終了した秒',
    'complete weeks': '終了した週',
    'complete years': '終了した年',
    days: '日',
    'fiscal quarters': '会計四半期',
    'fiscal years': '会計年度',
    hours: '時間',
    minutes: '分',
    months: '月',
    quarters: '四半期',
    seconds: '秒',
    weeks: '週',
    years: '年',
  },
  summary: {
    'Value required': '値が必須',
  },
}

export const jaJP: I18nState = {
  locale: 'ja-JP',
  resources: { 'ja-JP': resources },
}
