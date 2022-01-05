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
import dateLocale from 'date-fns/locale/ko'
import type { I18nStateWithDates } from '../../utils'
import { koKR as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: '추가',
    Remove: '제거',
  },
  BeforeAfter: {
    absolute: '(절대)',
    relative: '(상대)',
  },
  Between: {
    AND: '및',
  },
  date_units: {
    days: '일',
    'fiscal quarters': '회계 분기',
    'fiscal years': '회계 연수',
    hours: '시간',
    minutes: '분',
    months: '월',
    quarters: '분기',
    seconds: '초',
    weeks: '주',
    years: '년',
  },
  get_date_filter_options: {
    is: '이(가)',
    'is any time': '이(가) 모든 시간임',
    'is before': '이(가) 다음보다 앞에 옴',
    'is in range': '이(가) 다음 범위임',
    'is in the last': '이(가) 다음 지난 기간에 속함',
    'is in the month': '이(가) 다음 월임',
    'is in the year': '이(가) 다음 연도임',
    'is next': '이(가) 다음임',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'is on or after': '이(가) 다음과 위치가 같거나 그 뒤에 옴',
    'is on the day': '이(가) 다음 날짜임',
    'is previous': '이(가) 이전임',
    'is this': '이(가) 이 항목임',
  },
  get_filter_options: {
    'matches advanced': '일치(고급)',
  },
  get_location_filter_options: {
    Box: '상자',
    Circle: '원',
    Location: '위치',
    feet: '피트',
    'is anywhere': '이(가) 전체 지역에 있음',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    kilometers: 'km',
    meters: 'm',
    miles: '마일',
  },
  get_number_filter_options: {
    exclusive: '(제외)',
    inclusive: '[포함]',
    is: '이(가)',
    'is between': '이(가) 다음 두 값 사이임',
    'is greater': '이(가) >',
    'is greater equal': '이(가) >=',
    'is less': '이(가) <',
    'is less equal': '이(가) <=',
    'is not': '이(가) 다음이 아님',
    'is not between': '이(가) 다음 두 값 사이가 아님',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'left exclusive': '(왼쪽-제외]',
    'right exclusive': '[오른쪽-제외)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '지난 14일',
    'Last 180 Days': '지난 180일',
    'Last 28 Days': '지난 28일',
    'Last 30 Days': '지난 30일',
    'Last 365 Days': '지난 365일',
    'Last 7 Days': '지난 7일',
    'Last 90 Days': '지난 90일',
    'Previous Month': '이전 달',
    'Previous Quarter': '이전 분기',
    'Previous Week': '이전 주',
    'Previous Year': '이전 연도',
    'This Month': '이번 달',
    'This Quarter': '이번 분기',
    'This Week': '이번 주',
    'This Year': '이번 연도',
    Today: '오늘',
    'Year To Date': '연간 누계(YTD)',
    Yesterday: '어제',
  },
  get_string_filter_options: {
    contains: '포함',
    'doesnt contain': '포함 안 함',
    'doesnt end with': '다음으로 종료 안 함',
    'doesnt start with': '다음으로 시작 안 함',
    'ends with': '다음으로 종료',
    is: '이(가)',
    'is blank': '이(가) 비어 있음',
    'is not': '이(가) 다음이 아님',
    'is not blank': '이(가) 비어 있지 않음',
    'is not null': '이(가) null이 아님',
    'is null': '이(가) null임',
    'starts with': '다음으로 시작',
  },
  get_tier_filter_options: {
    is: '이(가)',
    'is any value': '기(가) 모든 값임',
    'is not': '이(가) 다음이 아님',
  },
  get_user_attribute_option: {
    'matches a user attribute': '사용자 특성과 일치함',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': '모든 값',
  },
  OperatorLabel: {
    AND: '및',
    OR: '또는',
  },
  past_units: {
    'complete days': '전체 일',
    'complete fiscal quarters': '전체 회계 분기',
    'complete fiscal years': '전체 회계 연수',
    'complete hours': '전체 시간',
    'complete minutes': '전체 분',
    'complete months': '전체 월',
    'complete quarters': '전체 분기',
    'complete seconds': '전체 초',
    'complete weeks': '전체 주',
    'complete years': '전체 년',
  },
  ReactSelectCustomIcons: {
    'Clear all': '모두 지우기',
    Remove: '제거',
    Toggle: '전환',
  },
  Relative: {
    ago: '전',
    'from now': '지금부터',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': '기간 선택',
  },
  RelativeTimeframePopoverContent: {
    Custom: '사용자 지정',
    Presets: '기본 설정',
  },
  RelativeTimeframePresets: {
    More: '더 보기',
  },
  use_option_filtering: {
    'No values': '값 없음',
    'No values match': '일치하는 값 없음',
  },
  use_placeholder: {
    'any value': '모든 값',
  },
  use_suggestable: {
    'Error loading suggestions': '추천 로드 중 오류 발생',
  },
  use_validation_message: {
    'Value required': '값 필요',
  },
}

export const koKR: I18nStateWithDates = {
  dateLocale,
  locale: 'ko-KR',
  resources: { 'ko-KR': merge(resources, expressionLocale.resources['ko-KR']) },
}
