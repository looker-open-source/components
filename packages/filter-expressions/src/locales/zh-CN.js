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
    ago: '以前',
    'from now': '从现在起',
    'is any time': '任意时间',
    'is before': '早于',
    'is day': '在 {{day}} 这一天',
    'is from dateTimeStart until dateTimeEnd':
      '从 {{dateTimeStart}} 到 {{dateTimeEnd}}',
    'is in month year': '在 {{year}} 年 {{month}} 之内',
    'is in the last': '在过去 {{describeInterval}} 之内',
    'is interval ago': '在 {{interval}} 之前',
    'is in the year year': '在 {{year}} 年之内',
    'is intervalStart intervalType for intervalEnd':
      '{{intervalType}} 在 {{intervalStart}} 到 {{intervalEnd}} 期间',
    'is not null': '不为空值',
    'is on dateTime': '在 {{dateTime}} 这一时间',
    'is on or after': '等于或晚于',
    'is previous unitLabel': '上一 {{unitLabel}}',
    'is type unitLabel': '为 {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} 现在',
    'this startInterval to endInterval':
      '此 {{startInterval}} 到 {{endInterval}}',
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
    May: '5 月',
    November: '十一月',
    October: '十月',
    September: '九月',
  },
  get_unit_label: {
    'complete days': '完整天',
    'complete fiscal quarters': '完整财政季度',
    'complete fiscal years': '完整财政年度',
    'complete hours': '完整小时',
    'complete minutes': '完整分钟',
    'complete months': '完整月',
    'complete quarters': '完整季度',
    'complete seconds': '完整秒',
    'complete weeks': '完整周',
    'complete years': '完整年',
    days: '天',
    'fiscal quarters': '个财政季度',
    'fiscal years': '个财政年度',
    hours: '小时',
    minutes: '分钟',
    months: '个月',
    quarters: '个季度',
    seconds: '秒',
    weeks: '周',
    years: '年',
  },
  summary: {
    'Value required': '必须提供值',
  },
}
