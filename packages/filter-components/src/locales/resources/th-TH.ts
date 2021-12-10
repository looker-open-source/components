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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/th'
import type { I18nStateWithDates } from '../../utils'
import { thTH as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'เพิ่ม',
    Remove: 'นำออก',
  },
  BeforeAfter: {
    absolute: '(สัมบูรณ์)',
    relative: '(สัมพัทธ์)',
  },
  Between: {
    AND: 'AND',
  },
  get_date_filter_options: {
    is: 'เป็น',
    'is any time': 'เป็นเวลาใดก็ได้',
    'is before': 'อยู่ก่อน',
    'is in range': 'อยู่ในช่วง',
    'is in the last': 'อยู่ในรายการล่าสุด',
    'is in the month': 'อยู่ในเดือน',
    'is in the year': 'อยู่ในปี',
    'is next': 'อยู่ถัดไป',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is null': 'เป็นค่าว่าง',
    'is on or after': 'อยู่ที่หรือหลัง',
    'is on the day': 'อยู่ในวัน',
    'is previous': 'อยู่ก่อนหน้า',
    'is this': 'อยู่รายการนี้',
  },
  get_filter_options: {
    'matches advanced': 'รายการที่ตรงกัน (ขั้นสูง)',
  },
  get_location_filter_options: {
    Box: 'กล่อง',
    Circle: 'วงกลม',
    Location: 'ตำแหน่งที่ตั้ง',
    feet: 'ฟุต',
    'is anywhere': 'ที่ใดก็ได้',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is null': 'เป็นค่าว่าง',
    kilometers: 'กิโลเมตร',
    meters: 'เมตร',
    miles: 'ไมล์',
  },
  get_number_filter_options: {
    exclusive: '(ไม่รวม)',
    inclusive: '[รวม]',
    is: 'เป็น',
    'is between': 'อยู่ระหว่าง',
    'is greater': 'เป็น >',
    'is greater equal': 'เป็น >=',
    'is less': 'เป็น <',
    'is less equal': 'เป็น <=',
    'is not': 'ไม่',
    'is not between': 'ไม่อยู่ระหว่าง',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is null': 'เป็นค่าว่าง',
    'left exclusive': '(ไม่รวมซ้าย]',
    'right exclusive': '[ไม่รวมขวา)',
  },
  get_string_filter_options: {
    contains: 'ประกอบด้วย',
    'doesnt contain': 'ไม่ได้ประกอบด้วย',
    'doesnt end with': 'ไม่ได้สิ้นสุดด้วย',
    'doesnt start with': 'ไม่ได้เริ่มต้นด้วย',
    'ends with': 'สิ้นสุดด้วย',
    is: 'เป็น',
    'is blank': 'เว้นว่าง',
    'is not': 'ไม่',
    'is not blank': 'ไม่เว้นว่าง',
    'is not null': 'ไม่เป็นค่าว่าง',
    'is null': 'เป็นค่าว่าง',
    'starts with': 'เริ่มต้นด้วย',
  },
  get_tier_filter_options: {
    is: 'เป็น',
    'is any value': 'เป็นค่าใดก็ได้',
    'is not': 'ไม่',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'ตรงกับแอตทริบิวต์ของผู้ใช้',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'ล้างทั้งหมด',
    Remove: 'นำออก',
    Toggle: 'สลับ',
  },
  Relative: {
    ago: 'ที่แล้ว',
    'from now': 'นับจากนี้',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'เลือกกรอบเวลา',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'กำหนดเอง',
    Presets: 'กำหนดล่วงหน้า',
  },
  RelativeTimeframePresets: {
    More: 'เพิ่มเติม',
  },
  use_option_filtering: {
    'No values': 'ไม่มีค่า',
    'No values match': 'ไม่มีค่าที่ตรงกัน',
  },
  use_placeholder: {
    'any value': 'ค่าใดก็ได้',
  },
  use_suggestable: {
    'Error loading suggestions': 'เกิดข้อผิดพลาดในการโหลดคำแนะนำ',
  },
  use_validation_message: {
    'Value required': 'ต้องระบุค่า',
  },
}

export const thTH: I18nStateWithDates = {
  dateLocale,
  locale: 'th-TH',
  resources: { 'th-TH': merge(resources, expressionLocale.resources['th-TH']) },
}
