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

import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  describe_date: {
    ' complete': ' 완료',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: '전',
    'from now': '후',
    'is any time': '시간 무관',
    'is before': '다음 날짜 이전:',
    'is day': '{{day}}',
    'is from dateTimeStart until dateTimeEnd':
      '{{dateTimeStart}}~{{dateTimeEnd}}',
    'is in month year': '{{year}}년 {{month}}',
    'is in the last': '지난 {{describeInterval}}',
    'is in the year year': '{{year}}년',
    'is interval ago': '{{interval}} 전',
    'is intervalStart intervalType for intervalEnd':
      '{{intervalEnd}} 동안 {{intervalStart}} {{intervalType}}',
    'is not null': 'null 아님',
    'is on dateTime': '{{dateTime}}',
    'is on or after': '다음 날짜 또는 그 이후:',
    'is previous unitLabel': '이전 {{unitLabel}}',
    'is type unitLabel': '{{type}} {{unitLabel}}',
    next: '다음',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '지금 {{prefix}}',
    this: '이',
    'this startInterval to endInterval':
      '이 {{startInterval}}부터 {{endInterval}}까지',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': '값 무관',
  },
  describe_is_item: {
    'is not value': '{{value}} 아님',
    'is value': '{{value}}임',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}}에서 {{coords2}}(으)로',
    'distance unit from lat, lon': '{{lat}}, {{lon}}에서 {{distance}}{{unit}}',
    'is anywhere': '위치 무관',
    'is not null': 'null 아님',
    'is null': 'null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': '{{range}} 범위 내에 있음',
    'is not in range range': '{{range}} 범위 내에 없음',
  },
  describe_string: {
    blank: '비어 있음',
    'contains value': '{{value}} 포함',
    'does not contain value': '{{value}} 포함하지 않음',
    'does not end with value': '{{value}}(으)로 끝나지 않음',
    'does not start with value': '{{value}}(으)로 시작되지 않음',
    'ends with value': '{{value}}(으)로 끝남',
    'starts with value': '{{value}}(으)로 시작',
  },
  get_distance_unit_labels: {
    feet: '피트',
    kilometers: '킬로미터',
    meters: '미터',
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
    'complete days': '일 전체',
    'complete fiscal quarter': '전체 회계 분기',
    'complete fiscal quarters': '회계 분기 전체',
    'complete fiscal year': '전체 회계 연수',
    'complete fiscal years': '회계 연도 전체',
    'complete hour': '전체 시간',
    'complete hours': '시간 전체',
    'complete minute': '전체 분',
    'complete minutes': '분 전체',
    'complete month': '전체 월',
    'complete months': '개월 전체',
    'complete quarter': '전체 분기',
    'complete quarters': '분기 전체',
    'complete second': '전체 초',
    'complete seconds': '초 전체',
    'complete week': '전체 주',
    'complete weeks': '주 전체',
    'complete year': '전체 년',
    'complete years': '년 전체',
    day: '일',
    days: '일',
    'fiscal quarter': '회계 분기',
    'fiscal quarters': '회계 분기',
    'fiscal year': '회계 연도',
    'fiscal years': '회계 연도',
    hour: '시간',
    hours: '시간',
    minute: '분',
    minutes: '분',
    month: '월',
    months: '개월',
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
    'Value required': '값은 필수 항목입니다.',
  },
};

export const koKR = mergeLocaleObjects([], 'ko-KR', resources);
