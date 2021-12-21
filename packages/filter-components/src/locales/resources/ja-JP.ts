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
import dateLocale from 'date-fns/locale/ja'
import type { I18nStateWithDates } from '../../utils'
import { jaJP as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: '追加',
    Remove: '削除',
  },
  BeforeAfter: {
    absolute: '（絶対指定）',
    relative: '（相対指定）',
  },
  Between: {
    AND: 'AND',
  },
  get_date_filter_options: {
    is: 'が次である',
    'is any time': 'の時間を問わずすべて',
    'is before': 'が次の日以前',
    'is in range': 'が次の範囲内',
    'is in the last': 'が直近である',
    'is in the month': 'が次の月である',
    'is in the year': 'が次の年である',
    'is next': 'が次である',
    'is not null': 'がNullでない',
    'is null': 'がNullである',
    'is on or after': 'が次の日以降',
    'is on the day': 'が次の日である',
    'is previous': 'が前である',
    'is this': 'がこれである',
  },
  get_filter_options: {
    'matches advanced': 'が次に一致する（高度フィルター）',
  },
  get_location_filter_options: {
    Box: 'ボックス',
    Circle: '円',
    Location: '場所',
    feet: 'feet',
    'is anywhere': 'がいずれかの場所にある',
    'is not null': 'がNullでない',
    'is null': 'がNullである',
    kilometers: 'キロメートル',
    meters: 'メートル',
    miles: 'マイル',
  },
  get_number_filter_options: {
    exclusive: '（除く）',
    inclusive: '[含む]',
    is: 'が次である',
    'is between': 'が次の範囲内',
    'is greater': 'が次の値より大きい（>）',
    'is greater equal': 'が次の値以上である（>=）',
    'is less': 'が次の値より小さい（<）',
    'is less equal': 'が次の値以下である（<=）',
    'is not': 'が次でない',
    'is not between': 'が次の範囲外',
    'is not null': 'がNullでない',
    'is null': 'がNullである',
    'left exclusive': '（左側を除く]',
    'right exclusive': '[右側を除く)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': '過去14日間',
    'Last 180 Days': '過去180日間',
    'Last 28 Days': '過去28日間',
    'Last 30 Days': '過去30日間',
    'Last 365 Days': '過去365日間',
    'Last 7 Days': '過去7日間',
    'Last 90 Days': '過去90日間',
    'Previous Month': '前月',
    'Previous Quarter': '前四半期',
    'Previous Week': '前週',
    'Previous Year': '前年',
    'This Month': '今月',
    'This Quarter': '今四半期',
    'This Week': '今週',
    'This Year': '今年',
    Today: '今日',
    'Year To Date': '年初来',
    Yesterday: '昨日',
  },
  get_string_filter_options: {
    contains: 'が次の値を含む',
    'doesnt contain': 'が次の値を含まない',
    'doesnt end with': 'が次の値で終わらない',
    'doesnt start with': 'が次の値で始まらない',
    'ends with': 'が次の値で終わる',
    is: 'が次である',
    'is blank': 'が空欄である',
    'is not': 'が次でない',
    'is not blank': 'が空欄でない',
    'is not null': 'がNullでない',
    'is null': 'がNullである',
    'starts with': 'が次の値で始まる',
  },
  get_tier_filter_options: {
    is: 'が次である',
    'is any value': 'の値を問わずすべて',
    'is not': 'が次でない',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'が次のユーザー属性と一致する',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': '任意の値',
  },
  OperatorLabel: {
    AND: 'AND',
    OR: 'OR',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'すべてクリア',
    Remove: '削除',
    Toggle: '切り替え',
  },
  Relative: {
    ago: '前',
    'from now': '後',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'タイムフレームを選択',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'カスタム',
    Presets: 'プリセット',
  },
  RelativeTimeframePresets: {
    More: '詳細',
  },
  use_option_filtering: {
    'No values': '値なし',
    'No values match': '一致する値なし',
  },
  use_placeholder: {
    'any value': '任意の値',
  },
  use_suggestable: {
    'Error loading suggestions': '提案値の読み込みエラー',
  },
  use_validation_message: {
    'Value required': '値が必須',
  },
}

export const jaJP: I18nStateWithDates = {
  dateLocale,
  locale: 'ja-JP',
  resources: { 'ja-JP': merge(resources, expressionLocale.resources['ja-JP']) },
}
