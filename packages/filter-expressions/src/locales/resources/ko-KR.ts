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
    ' complete': ' 완료',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '전',
    'from now': '지금부터',
    'is any time': '이(가) 모든 시간임',
    'is before': '이(가) 다음보다 앞에 옴',
    'is day': '이(가) {{day}}임',
    'is from dateTimeStart until dateTimeEnd':
      '이(가) {{dateTimeStart}}에서 {{dateTimeEnd}}까지임',
    'is in month year': '이(가) {{month}} {{year}}임',
    'is in the last': '이(가) 지난 {{describeInterval}}임',
    'is in the year year': '이(가) {{year}} 연도임',
    'is interval ago': '이(가) {{interval}} 전임',
    'is intervalStart intervalType for intervalEnd':
      '이(가) {{intervalEnd}}의 {{intervalStart}} {{intervalType}}임',
    'is not null': '이(가) null이 아님',
    'is on dateTime': '이(가) {{dateTime}}임',
    'is on or after': '이(가) 다음과 위치가 같거나 그 뒤에 옴',
    'is previous unitLabel': '이(가) 이전 {{unitLabel}}임',
    'is type unitLabel': '이(가) {{type}} {{unitLabel}}임',
    next: '다음',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} 지금',
    this: '이',
    'this startInterval to endInterval':
      '이 {{startInterval}}부터 {{endInterval}}까지',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': '모든 값',
  },
  describe_is_item: {
    'is not value': '이(가) {{value}}이(가) 아님',
    'is value': '이(가) {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}}~{{coords2}}',
    'distance unit from lat, lon':
      '{{distance}} {{unit}}, {{lat}}, {{lon}}부터',
    'is anywhere': '이(가) 전체 지역에 있음',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': '이(가) {{range}} 범위임',
    'is not in range range': '이(가) {{range}} 범위 아님',
  },
  describe_string: {
    blank: '비어 있음',
    'contains value': '{{value}} 포함',
    'does not contain value': '{{value}} 포함 안 함',
    'does not end with value': '{{value}}(으)로 종료 안 함',
    'does not start with value': '{{value}}(으)로 시작 안 함',
    'ends with value': '{{value}}(으)로 종료',
    'starts with value': '{{value}}(으)로 시작',
  },
  get_distance_unit_labels: {
    feet: '피트',
    kilometers: 'km',
    meters: 'm',
    miles: '마일',
  },
  get_months: {
    April: '4월',
    August: '8월',
    December: '12월',
    February: '2월',
    January: '1월',
    July: '7월',
    June: '6월',
    March: '3월',
    May: '5월',
    November: '11월',
    October: '10월',
    September: '9월',
  },
  get_unit_label: {
    'complete day': '전체 일',
    'complete days': '전체 일',
    'complete fiscal quarter': '전체 회계 분기',
    'complete fiscal quarters': '전체 회계 분기',
    'complete fiscal year': '전체 회계 연수',
    'complete fiscal years': '전체 회계 연수',
    'complete hour': '전체 시간',
    'complete hours': '전체 시간',
    'complete minute': '전체 분',
    'complete minutes': '전체 분',
    'complete month': '전체 월',
    'complete months': '전체 월',
    'complete quarter': '전체 분기',
    'complete quarters': '전체 분기',
    'complete second': '전체 초',
    'complete seconds': '전체 초',
    'complete week': '전체 주',
    'complete weeks': '전체 주',
    'complete year': '전체 년',
    'complete years': '전체 년',
    day: '일',
    days: '일',
    'fiscal quarter': '회계 분기',
    'fiscal quarters': '회계 분기',
    'fiscal year': '회계 연도',
    'fiscal years': '회계 연수',
    hour: '시간',
    hours: '시간',
    minute: '분',
    minutes: '분',
    month: '월',
    months: '월',
    quarter: '분기',
    quarters: '분기',
    second: '초',
    seconds: '초',
    week: '주',
    weeks: '주',
    year: '년',
    years: '년',
  },
  join_or: {
    'a or b': '{{a}} 또는 {{b}}',
  },
  summary: {
    'Value required': '값 필요',
  },
}

export const koKR = mergeLocaleObjects([], 'ko-KR', resources)
