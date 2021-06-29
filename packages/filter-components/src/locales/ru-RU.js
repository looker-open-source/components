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
    January: 'Январь',
    February: 'Февраль',
    March: 'Март',
    April: 'Апрель',
    May: 'Май',
    June: 'Июнь',
    July: 'Июль',
    August: 'Август',
    September: 'Сентябрь',
    October: 'Октябрь',
    November: 'Ноябрь',
    December: 'Декабрь',
    Sunday: 'Воскресенье',
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота',
    Su: 'Вс',
    Mo: 'Пн',
    Tu: 'Вт',
    We: 'Ср',
    Th: 'Чт',
    Fr: 'Пт',
    Sa: 'Сб',
    firstDayOfWeek: '0',
  },
  get_filter_options: {
    'matches advanced': 'совпадает с (расширенная настройка)',
  },
  get_location_filter_options: {
    Location: 'Расположение',
    Circle: 'Круг',
    Box: 'Прямоугольник',
    'is anywhere': 'находится где-либо',
    'is null': 'является нулевым значением',
    'is not null': 'не является нулевым значением',
    feet: 'фут(а/ов)',
    kilometers: 'км',
    meters: 'м',
    miles: 'миль(и)',
  },
  get_number_filter_options: {
    is: 'является',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is between': 'между',
    'is null': 'является нулевым значением',
    'is not': 'не является',
    'is not between': 'не между',
    'is not null': 'не является нулевым значением',
    inclusive: '[включая значения]',
    exclusive: '(не включая значения)',
    'right exclusive': '[не включая значение справа)',
    'left exclusive': '(не включая значение слева]',
  },
  get_tier_filter_options: {
    'is any value': 'любое значение',
    is: 'является',
    'is not': 'не является',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'совпадает со свойством пользователя',
  },
  OperatorLabel: {
    OR: 'ИЛИ',
    AND: 'И',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Очистить все',
    Toggle: 'Переключить',
    Remove: 'Удалить',
  },
  RelativeTimeframePopoverContent: {
    Presets: 'Шаблоны',
    Custom: 'Пользовательская настройка',
  },
  RelativeTimeframePresets: {
    More: 'Еще',
  },
}
