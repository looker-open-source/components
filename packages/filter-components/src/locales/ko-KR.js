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
  format_date: {
    January: '1월',
    February: '2월',
    March: '3월',
    April: '4월',
    May: '5월',
    June: '6월',
    July: '7월',
    August: '8월',
    September: '9월',
    October: '10월',
    November: '11월',
    December: '12월',
    Sunday: '일요일',
    Monday: '월요일',
    Tuesday: '화요일',
    Wednesday: '수요일',
    Thursday: '목요일',
    Friday: '금요일',
    Saturday: '토요일',
    Su: '일',
    Mo: '월',
    Tu: '화',
    We: '수',
    Th: '목',
    Fr: '금',
    Sa: '토',
    firstDayOfWeek: '0',
  },
  get_filter_options: {
    'matches advanced': '일치(고급)',
  },
  get_location_filter_options: {
    Location: '위치',
    Circle: '원',
    Box: '상자',
    'is anywhere': '이(가) 전체 지역에 있음',
    'is null': '이(가) null임',
    'is not null': '이(가) null이 아님',
    feet: '피트',
    kilometers: 'km',
    meters: 'm',
    miles: '마일',
  },
  get_number_filter_options: {
    is: '이(가)',
    'is greater': '이(가) >',
    'is greater equal': '이(가) >=',
    'is less': '이(가) <',
    'is less equal': '이(가) <=',
    'is between': '이(가) 다음 두 값 사이임',
    'is null': '이(가) null임',
    'is not': '이(가) 다음이 아님',
    'is not between': '이(가) 다음 두 값 사이가 아님',
    'is not null': '이(가) null이 아님',
    inclusive: '[포함]',
    exclusive: '(제외)',
    'right exclusive': '[오른쪽-제외)',
    'left exclusive': '(왼쪽-제외]',
  },
  get_tier_filter_options: {
    'is any value': '기(가) 모든 값임',
    is: '이(가)',
    'is not': '이(가) 다음이 아님',
  },
  get_user_attribute_option: {
    'matches a user attribute': '사용자 특성과 일치함',
  },
  OperatorLabel: {
    OR: '또는',
    AND: '및',
  },
  ReactSelectCustomIcons: {
    'Clear all': '모두 지우기',
    Toggle: '전환',
    Remove: '제거',
  },
  RelativeTimeframePopoverContent: {
    Presets: '기본 설정',
    Custom: '사용자 지정',
  },
  RelativeTimeframePresets: {
    More: '더 보기',
  },
}
