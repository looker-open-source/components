import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/th';
import { thTH as expressionLocale } from '@looker/filter-expressions';
import { thTH as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'เพิ่ม',
    Remove: 'นำออก'
  },
  before_after_units: {
    'days ago': 'วันที่แล้ว',
    'days from now': 'วันนับจากนี้',
    'fiscal quarter from now': 'ไตรมาสงบประมาณนับจากนี้',
    'fiscal quarters ago': 'ไตรมาสงบประมาณที่แล้ว',
    'fiscal years ago': 'ปีงบประมาณที่แล้ว',
    'fiscal years from now': 'ปีงบประมาณนับจากนี้',
    'hours ago': 'ชั่วโมงที่แล้ว',
    'hours from now': 'ชั่วโมงนับจากนี้',
    'minutes ago': 'นาทีที่แล้ว',
    'minutes from now': 'นาทีนับจากนี้',
    'months ago': 'เดือนที่แล้ว',
    'months from now': 'เดือนนับจากนี้',
    now: 'ขณะนี้',
    'quarters ago': 'ไตรมาสที่แล้ว',
    'quarters from now': 'ไตรมาสนับจากนี้',
    'seconds ago': 'วินาทีที่แล้ว',
    'seconds from now': 'วินาทีนับจากนี้',
    'weeks ago': 'สัปดาห์ที่แล้ว',
    'weeks from now': 'สัปดาห์นับจากนี้',
    'years ago': 'ปีที่แล้ว',
    'years from now': 'ปีนับจากนี้'
  },
  BeforeAfter: {
    absolute: '(สัมบูรณ์)',
    relative: '(สัมพัทธ์)'
  },
  Between: {
    AND: 'AND'
  },
  date_units: {
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
    years: 'ปี'
  },
  DateRange: {
    'until (before)': 'จนถึง (ก่อน)'
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
    'is this': 'อยู่รายการนี้'
  },
  get_filter_options: {
    'matches advanced': 'รายการที่ตรงกัน (ขั้นสูง)'
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
    miles: 'ไมล์'
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
    'right exclusive': '[ไม่รวมขวา)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '14 วันที่ผ่านมา',
    'Last 180 Days': '180 วันที่ผ่านมา',
    'Last 28 Days': '28 วันที่ผ่านมา',
    'Last 30 Days': '30 วันที่ผ่านมา',
    'Last 365 Days': '365 วันที่ผ่านมา',
    'Last 7 Days': '7 วันที่ผ่านมา',
    'Last 90 Days': '90 วันที่ผ่านมา',
    'Previous Month': 'เดือนที่แล้ว',
    'Previous Quarter': 'ไตรมาสที่แล้ว',
    'Previous Week': 'สัปดาห์ที่แล้ว',
    'Previous Year': 'ปีที่แล้ว',
    'This Month': 'เดือนนี้',
    'This Quarter': 'ไตรมาสนี้',
    'This Week': 'สัปดาห์นี้',
    'This Year': 'ปีนี้',
    Today: 'วันนี้',
    'Year To Date': 'ตั้งแต่ต้นปี',
    Yesterday: 'เมื่อวาน'
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
    'starts with': 'เริ่มต้นด้วย'
  },
  get_tier_filter_options: {
    is: 'เป็น',
    'is any value': 'เป็นค่าใดก็ได้',
    'is not': 'ไม่'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'ตรงกับแอตทริบิวต์ของผู้ใช้'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'ค่าใดก็ได้'
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR'
  },
  past_units: {
    'complete days': 'วันถ้วน',
    'complete fiscal quarters': 'ไตรมาสงบประมาณถ้วน',
    'complete fiscal years': 'ปีงบประมาณถ้วน',
    'complete hours': 'ชั่วโมงถ้วน',
    'complete minutes': 'นาทีถ้วน',
    'complete months': 'เดือนถ้วน',
    'complete quarters': 'ไตรมาสถ้วน',
    'complete seconds': 'วินาทีถ้วน',
    'complete weeks': 'สัปดาห์ถ้วน',
    'complete years': 'ปีถ้วน'
  },
  RadioGroup: {
    'any value': 'ค่าใดก็ได้'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'ล้างทั้งหมด',
    Remove: 'นำออก',
    Toggle: 'สลับ'
  },
  Relative: {
    ago: 'ที่แล้ว',
    'from now': 'นับจากนี้'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'เลือกกรอบเวลา'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'กำหนดเอง',
    Presets: 'กำหนดล่วงหน้า'
  },
  RelativeTimeframePresets: {
    More: 'เพิ่มเติม'
  },
  use_filters_errors: {
    'Invalid value': 'ค่าไม่ถูกต้อง',
    'No value is set for your user attribute': 'ไม่มีการกำหนดค่าสำหรับแอตทริบิวต์ของผู้ใช้ของคุณ',
    'Selection required': 'ต้องเลือก'
  },
  use_option_filtering: {
    'No values': 'ไม่มีค่า',
    'No values match': 'ไม่มีค่าที่ตรงกัน'
  },
  use_placeholder: {
    'any value': 'ค่าใดก็ได้'
  },
  use_suggestable: {
    'Error loading suggestions': 'เกิดข้อผิดพลาดในการโหลดคำแนะนำ'
  },
  use_validation_message: {
    'Value required': 'ต้องระบุค่า'
  }
};
export const thTH = {
  dateLocale,
  locale: 'th-TH',
  resources: {
    'th-TH': merge({}, resources, expressionLocale.resources['th-TH'], componentsLocale.resources['th-TH'])
  }
};
//# sourceMappingURL=th-TH.js.map