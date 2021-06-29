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
    January: '1月',
    February: '2月',
    March: '3月',
    April: '4月',
    May: '5月',
    June: '6月',
    July: '7月',
    August: '8月',
    September: '9月',
    October: '10月',
    November: '11月',
    December: '12月',
    Sunday: '日曜日',
    Monday: '月曜日',
    Tuesday: '火曜日',
    Wednesday: '水曜日',
    Thursday: '木曜日',
    Friday: '金曜日',
    Saturday: '土曜日',
    Su: '日',
    Mo: '月',
    Tu: '火',
    We: '水',
    Th: '木',
    Fr: '金',
    Sa: '土',
    firstDayOfWeek: '0',
  },
  get_filter_options: {
    'matches advanced': 'が次に一致する(高度フィルタ)',
  },
  get_location_filter_options: {
    Location: '場所',
    Circle: '円',
    Box: 'ボックス',
    'is anywhere': 'がいずれかの場所にある',
    'is null': 'がNullである',
    'is not null': 'がNullでない',
    feet: 'feet',
    kilometers: 'キロメートル',
    meters: 'メートル',
    miles: 'マイル',
  },
  get_number_filter_options: {
    is: 'が次である',
    'is greater': 'が次の値より大きい（>）',
    'is greater equal': 'が次の値以上である（>=）',
    'is less': 'が次の値より小さい（<）',
    'is less equal': 'が次の値以下である（<=）',
    'is between': 'が次の範囲内',
    'is null': 'がNullである',
    'is not': 'が次でない',
    'is not between': 'が次の範囲外',
    'is not null': 'がNullでない',
    inclusive: '[含む]',
    exclusive: '(除く)',
    'right exclusive': '[右側を除く)',
    'left exclusive': '(左側を除く]',
  },
  get_tier_filter_options: {
    'is any value': 'の値を問わずすべて',
    is: 'が次である',
    'is not': 'が次でない',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'が次のユーザー属性と一致する',
  },
  OperatorLabel: {
    OR: 'OR',
    AND: 'AND',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'すべてクリア',
    Toggle: '切り替え',
    Remove: '削除',
  },
  RelativeTimeframePopoverContent: {
    Presets: 'プリセット',
    Custom: 'カスタム',
  },
  RelativeTimeframePresets: {
    More: '詳細',
  },
}
