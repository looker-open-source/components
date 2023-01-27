/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  describe_date: {
    ' complete': ' เสร็จสมบูรณ์',
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
    'is in the year year': 'ภายในปี {{year}}',
    'is interval ago': 'เมื่อ {{interval}} ที่แล้ว',
    'is intervalStart intervalType for intervalEnd':
      'อยู่ตั้งแต่ {{intervalStart}} {{intervalType}} เป็นเวลา {{intervalEnd}}',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is on dateTime': 'เมื่อ {{dateTime}}',
    'is on or after': 'อยู่ที่หรือหลัง',
    'is previous unitLabel': 'คือ {{unitLabel}} ก่อนหน้า',
    'is type unitLabel': 'คือ {{type}} {{unitLabel}}',
    next: 'ถัดไป',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} ตอนนี้',
    this: 'นี้',
    'this startInterval to endInterval':
      '{{startInterval}} นี้ถึง {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'ค่าใดก็ได้',
  },
  describe_is_item: {
    'is not value': 'ไม่ใช่ {{value}}',
    'is value': 'เป็น {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} ถึง {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} จาก {{lat}}, {{lon}}',
    'is anywhere': 'ที่ใดก็ได้',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is null': 'เป็นค่าว่าง',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': 'อยู่ในช่วง {{range}}',
    'is not in range range': 'ไม่อยู่ในช่วง {{range}}',
  },
  describe_string: {
    blank: 'เว้นว่าง',
    'contains value': 'ประกอบด้วย {{value}}',
    'does not contain value': 'ไม่ได้ประกอบด้วย {{value}}',
    'does not end with value': 'ไม่ได้สิ้นสุดด้วย {{value}}',
    'does not start with value': 'ไม่ได้เริ่มต้นด้วย {{value}}',
    'ends with value': 'สิ้นสุดด้วย {{value}}',
    'starts with value': 'เริ่มต้นด้วย {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'ฟุต',
    kilometers: 'กิโลเมตร',
    meters: 'เมตร',
    miles: 'ไมล์',
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
    'complete day': 'วันถ้วน',
    'complete days': 'วันถ้วน',
    'complete fiscal quarter': 'ไตรมาสงบประมาณถ้วน',
    'complete fiscal quarters': 'ไตรมาสงบประมาณถ้วน',
    'complete fiscal year': 'ปีงบประมาณถ้วน',
    'complete fiscal years': 'ปีงบประมาณถ้วน',
    'complete hour': 'ชั่วโมงถ้วน',
    'complete hours': 'ชั่วโมงถ้วน',
    'complete minute': 'นาทีถ้วน',
    'complete minutes': 'นาทีถ้วน',
    'complete month': 'เดือนถ้วน',
    'complete months': 'เดือนถ้วน',
    'complete quarter': 'ไตรมาสถ้วน',
    'complete quarters': 'ไตรมาสถ้วน',
    'complete second': 'วินาทีถ้วน',
    'complete seconds': 'วินาทีถ้วน',
    'complete week': 'สัปดาห์ถ้วน',
    'complete weeks': 'สัปดาห์ถ้วน',
    'complete year': 'ปีถ้วน',
    'complete years': 'ปีถ้วน',
    day: 'วัน',
    days: 'วัน',
    'fiscal quarter': 'ไตรมาสงบประมาณ',
    'fiscal quarters': 'ไตรมาสงบประมาณ',
    'fiscal year': 'ปีงบประมาณ',
    'fiscal years': 'ปีงบประมาณ',
    hour: 'ชั่วโมง',
    hours: 'ชั่วโมง',
    minute: 'นาที',
    minutes: 'นาที',
    month: 'เดือน',
    months: 'เดือน',
    quarter: 'ไตรมาส',
    quarters: 'ไตรมาส',
    second: 'วินาที',
    seconds: 'วินาที',
    week: 'สัปดาห์',
    weeks: 'สัปดาห์',
    year: 'ปี',
    years: 'ปี',
  },
  join_or: {
    'a or b': '{{a}} หรือ {{b}}',
  },
  summary: {
    'Value required': 'ต้องระบุค่า',
  },
}

export const thTH = mergeLocaleObjects([], 'th-TH', resources)
