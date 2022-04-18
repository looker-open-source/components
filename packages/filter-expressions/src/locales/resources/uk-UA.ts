/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
    ' complete': ' завершено',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'тому',
    'from now': 'відтепер',
    'is any time': 'є будь-яким часом',
    'is before': 'раніше',
    'is day': '{{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'з {{dateTimeStart}} до {{dateTimeEnd}}',
    'is in month year': 'станом на {{month}} {{year}}',
    'is in the last': 'за останні {{describeInterval}}',
    'is in the year year': 'станом на {{year}} рік',
    'is interval ago': '{{interval}} тому',
    'is intervalStart intervalType for intervalEnd':
      'це {{intervalStart}} {{intervalType}} для {{intervalEnd}}',
    'is not null': 'не має значення NULL',
    'is on dateTime': 'станом на {{dateTime}}',
    'is on or after': 'не раніше',
    'is previous unitLabel': 'це попередній {{unitLabel}}',
    'is type unitLabel': 'це {{type}} {{unitLabel}}',
    next: 'далі',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} зараз',
    this: 'це',
    'this startInterval to endInterval':
      'це {{startInterval}} до {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'будь-яке значення',
  },
  describe_is_item: {
    'is not value': 'не {{value}}',
    'is value': '{{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} до {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} з {{lat}}, {{lon}}',
    'is anywhere': 'будь-де',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W',
  },
  describe_number: {
    'is in range range': 'у діапазоні {{range}}',
    'is not in range range': 'поза діапазоном {{range}}',
  },
  describe_string: {
    blank: 'пусте',
    'contains value': 'містить {{value}}',
    'does not contain value': 'не містить {{value}}',
    'does not end with value': 'не закінчується на {{value}}',
    'does not start with value': 'не починається з {{value}}',
    'ends with value': 'закінчується на {{value}}',
    'starts with value': 'починається з {{value}}',
  },
  get_distance_unit_labels: {
    feet: 'футів',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль',
  },
  get_months: {
    April: 'квітня',
    August: 'серпня',
    December: 'грудня',
    February: 'лютого',
    January: 'січня',
    July: 'липня',
    June: 'червня',
    March: 'березня',
    May: 'трав.',
    November: 'листопада',
    October: 'жовтня',
    September: 'вересня',
  },
  get_unit_label: {
    'complete day': 'повний день',
    'complete days': 'повних днів',
    'complete fiscal quarter': 'повний фінансовий квартал',
    'complete fiscal quarters': 'повних фінансових кварталів',
    'complete fiscal year': 'повний фінансовий рік',
    'complete fiscal years': 'повних фінансових років',
    'complete hour': 'повну годину',
    'complete hours': 'повних годин',
    'complete minute': 'повну хвилину',
    'complete minutes': 'повних хвилин',
    'complete month': 'повний місяць',
    'complete months': 'повних місяців',
    'complete quarter': 'повний квартал',
    'complete quarters': 'повних кварталів',
    'complete second': 'повну секунду',
    'complete seconds': 'повних секунд',
    'complete week': 'повний тиждень',
    'complete weeks': 'повних тижнів',
    'complete year': 'повний рік',
    'complete years': 'повних років',
    day: 'день',
    days: 'дн',
    'fiscal quarter': 'фінансовий квартал',
    'fiscal quarters': 'фінансових кварталів',
    'fiscal year': 'фінансовий рік',
    'fiscal years': 'фінансових років',
    hour: 'година',
    hours: 'год',
    minute: 'хвилина',
    minutes: 'хв',
    month: 'місяць',
    months: 'міс.',
    quarter: 'квартал',
    quarters: 'кварт.',
    second: 'секунда',
    seconds: 'сек',
    week: 'тиждень',
    weeks: 'тижн',
    year: 'рік',
    years: 'р.',
  },
  join_or: {
    'a or b': '{{a}} або {{b}}',
  },
  summary: {
    'Value required': 'Потрібно ввести значення',
  },
}

export const ukUA: I18nState = {
  locale: 'uk-UA',
  resources: { 'uk-UA': resources },
}
