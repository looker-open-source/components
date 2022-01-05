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
import dateLocale from 'date-fns/locale/uk'
import type { I18nStateWithDates } from '../../utils'
import { ukUA as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Додати',
    Remove: 'Вилучити',
  },
  BeforeAfter: {
    absolute: '(абсолютне значення)',
    relative: '(відносне значення)',
  },
  Between: {
    AND: 'І',
  },
  date_units: {
    days: 'дн',
    'fiscal quarters': 'фінансових кварталів',
    'fiscal years': 'фінансових років',
    hours: 'год',
    minutes: 'хв',
    months: 'міс.',
    quarters: 'кварт.',
    seconds: 'сек',
    weeks: 'тижн',
    years: 'р.',
  },
  get_date_filter_options: {
    is: 'є',
    'is any time': 'є будь-яким часом',
    'is before': 'раніше',
    'is in range': 'у діапазоні',
    'is in the last': 'за останні',
    'is in the month': 'станом на місяць',
    'is in the year': 'станом на рік',
    'is next': 'у наступний',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'is on or after': 'не раніше',
    'is on the day': 'станом на день',
    'is previous': 'у попередній',
    'is this': 'у цей',
  },
  get_filter_options: {
    'matches advanced': 'збігається (додатково)',
  },
  get_location_filter_options: {
    Box: 'Прямокутник',
    Circle: 'Коло',
    Location: 'Розташування',
    feet: 'футів',
    'is anywhere': 'будь-де',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль',
  },
  get_number_filter_options: {
    exclusive: '(без меж)',
    inclusive: '[з межами]',
    is: 'є',
    'is between': 'у діапазоні',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': 'не є',
    'is not between': 'поза діапазоном',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'left exclusive': '(з лівою межею]',
    'right exclusive': '[з правою межею)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'За останні 14 днів',
    'Last 180 Days': 'За останні 180 днів',
    'Last 28 Days': 'За останні 28 днів',
    'Last 30 Days': 'За останні 30 днів',
    'Last 365 Days': 'За останні 365 днів',
    'Last 7 Days': 'За останні 7 днів',
    'Last 90 Days': 'За останні 90 днів',
    'Previous Month': 'За минулий місяць',
    'Previous Quarter': 'За минулий квартал',
    'Previous Week': 'За минулий тиждень',
    'Previous Year': 'За минулий рік',
    'This Month': 'За цей місяць',
    'This Quarter': 'За цей квартал',
    'This Week': 'За цей тиждень',
    'This Year': 'За цей рік',
    Today: 'Сьогодні',
    'Year To Date': 'З початку року до поточної дати',
    Yesterday: 'Вчора',
  },
  get_string_filter_options: {
    contains: 'містить',
    'doesnt contain': 'не містить',
    'doesnt end with': 'не закінчується на',
    'doesnt start with': 'не починається з',
    'ends with': 'закінчується на',
    is: 'є',
    'is blank': 'пусте',
    'is not': 'не є',
    'is not blank': 'не пусте',
    'is not null': 'не має значення NULL',
    'is null': 'має значення NULL',
    'starts with': 'починається з',
  },
  get_tier_filter_options: {
    is: 'є',
    'is any value': 'є будь-яким значенням',
    'is not': 'не є',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'збігається з атрибутом користувача',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'будь-яке значення',
  },
  OperatorLabel: {
    AND: 'І',
    OR: 'АБО',
  },
  past_units: {
    'complete days': 'повних днів',
    'complete fiscal quarters': 'повних фінансових кварталів',
    'complete fiscal years': 'повних фінансових років',
    'complete hours': 'повних годин',
    'complete minutes': 'повних хвилин',
    'complete months': 'повних місяців',
    'complete quarters': 'повних кварталів',
    'complete seconds': 'повних секунд',
    'complete weeks': 'повних тижнів',
    'complete years': 'повних років',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Очистити все',
    Remove: 'Вилучити',
    Toggle: 'Перемкнути',
  },
  Relative: {
    ago: 'тому',
    'from now': 'відтепер',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Виберіть проміжок часу',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Настроюване',
    Presets: 'Заготовки',
  },
  RelativeTimeframePresets: {
    More: 'Ще',
  },
  use_option_filtering: {
    'No values': 'Немає значень',
    'No values match': 'Немає значень, що збігаються',
  },
  use_placeholder: {
    'any value': 'будь-яке значення',
  },
  use_suggestable: {
    'Error loading suggestions': 'Помилка завантаження пропозицій',
  },
  use_validation_message: {
    'Value required': 'Потрібно ввести значення',
  },
}

export const ukUA: I18nStateWithDates = {
  dateLocale,
  locale: 'uk-UA',
  resources: { 'uk-UA': merge(resources, expressionLocale.resources['uk-UA']) },
}
