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
    ago: 'ที่แล้ว',
    'from now': 'นับจากนี้',
    'is any time': 'เป็นเวลาใดก็ได้',
    'is before': 'อยู่ก่อน',
    'is day': 'เป็น {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'ตั้งแต่ {{dateTimeStart}} จนถึง {{dateTimeEnd}}',
    'is in month year': 'อยู่ใน {{month}} {{year}}',
    'is in the last': 'อยู่ใน {{describeInterval}} ล่าสุด',
    'is interval ago': 'เมื่อ {{interval}} ที่แล้ว',
    'is in the year year': 'ภายในปี {{year}}',
    'is intervalStart intervalType for intervalEnd':
      'อยู่ตั้งแต่ {{intervalStart}} {{intervalType}} เป็นเวลา {{intervalEnd}}',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is on dateTime': 'เมื่อ {{dateTime}}',
    'is on or after': 'อยู่ที่หรือหลัง',
    'is previous unitLabel': 'คือ {{unitLabel}} ก่อนหน้า',
    'is type unitLabel': 'คือ {{type}} {{unitLabel}}',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} ตอนนี้',
    'this startInterval to endInterval':
      '{{startInterval}} นี้ถึง {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'เมษายน',
    August: 'สิงหาคม',
    December: 'ธันวาคม',
    February: 'กุมภาพันธ์',
    January: 'มกราคม',
    July: 'กรกฎาคม',
    June: 'มิถุนายน',
    March: 'มีนาคม',
    May: 'พ.ค.',
    November: 'พฤศจิกายน',
    October: 'ตุลาคม',
    September: 'กันยายน',
  },
  get_unit_label: {
    'complete days': 'วันถ้วน',
    'complete fiscal quarters': 'ไตรมาสงบประมาณถ้วน',
    'complete fiscal years': 'ปีงบประมาณถ้วน',
    'complete hours': 'ชั่วโมงถ้วน',
    'complete minutes': 'นาทีถ้วน',
    'complete months': 'เดือนถ้วน',
    'complete quarters': 'ไตรมาสถ้วน',
    'complete seconds': 'วินาทีถ้วน',
    'complete weeks': 'สัปดาห์ถ้วน',
    'complete years': 'ปีถ้วน',
    days: 'วัน',
    'fiscal quarters': 'ไตรมาสงบประมาณ',
    'fiscal years': 'ปีงบประมาณ',
    hours: 'ชั่วโมง',
    minutes: 'นาที',
    months: 'เดือน',
    quarters: 'ไตรมาส',
    seconds: 'วินาที',
    weeks: 'สัปดาห์',
    years: 'ปี',
  },
  summary: {
    'Value required': 'ต้องระบุค่า',
  },
}

export const thTH: I18nState = {
  locale: 'th-TH',
  resources: { 'th-TH': resources },
}
