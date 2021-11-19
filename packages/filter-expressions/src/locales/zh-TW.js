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
export default {
  describe_date: {
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '前',
    'from now': '從現在起',
    'is any time': '是任何時間',
    'is before': '早於',
    'is day': '為{{day}}',
    'is from dateTimeStart until dateTimeEnd':
      '從 {{dateTimeStart}} 到 {{dateTimeEnd}}',
    'is in month year': '為 {{year}} 年 {{month}} 月',
    'is in the last': '在最後 {{describeInterval}}',
    'is interval ago': '{{interval}} 前',
    'is in the year year': '為 {{year}} 年',
    'is intervalStart intervalType for intervalEnd':
      '每 {{intervalStart}} {{intervalType}} 到 {{intervalEnd}}',
    'is not null': '不是 Null',
    'is on dateTime': '在 {{dateTime}}',
    'is on or after': '在或晚於',
    'is previous unitLabel': '為之前的 {{unitLabel}}',
    'is type unitLabel': '為 {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '現在為 {{prefix}}',
    'this startInterval to endInterval':
      '這個 {{startInterval}} 到 {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
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
    September: '九月',
  },
  get_unit_label: {
    'complete days': '天整',
    'complete fiscal quarters': '個完整會計季度',
    'complete fiscal years': '個完整會計年度',
    'complete hours': '小時整',
    'complete minutes': '分鐘整',
    'complete months': '個月整',
    'complete quarters': '季整',
    'complete seconds': '秒整',
    'complete weeks': '週整',
    'complete years': '年整',
    days: '天',
    'fiscal quarters': '會計季度',
    'fiscal years': '會計年度',
    hours: '小時',
    minutes: '分鐘',
    months: '個月',
    quarters: '季',
    seconds: '秒',
    weeks: '週',
    years: '年',
  },
  summary: {
    'Value required': '需要值',
  },
}
