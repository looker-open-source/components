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
    January: 'Styczeń',
    February: 'Luty',
    March: 'Marzec',
    April: 'Kwiecień',
    May: 'Maj',
    June: 'Czerwiec',
    July: 'Lipiec',
    August: 'Sierpień',
    September: 'Wrzesień',
    October: 'Październik',
    November: 'Listopad',
    December: 'Grudzień',
    Sunday: 'Niedziela',
    Monday: 'Poniedziałek',
    Tuesday: 'Wtorek',
    Wednesday: 'Środa',
    Thursday: 'Czwartek',
    Friday: 'Piątek',
    Saturday: 'Sobota',
    Su: 'Pon.',
    Mo: 'Wt.',
    Tu: 'Śr.',
    We: 'Czw.',
    Th: 'Pt.',
    Fr: 'Sob.',
    Sa: 'Niedz.',
    firstDayOfWeek: '0',
  },
  get_filter_options: {
    'matches advanced': 'dopasowania (zaawansowane)',
  },
  get_location_filter_options: {
    Location: 'Lokalizacja',
    Circle: 'Koło',
    Box: 'Pole',
    'is anywhere': 'ma dowolną wartość',
    'is null': 'ma wartość null',
    'is not null': 'nie ma wartości null',
    feet: 'ft',
    kilometers: 'km',
    meters: 'm',
    miles: 'mi',
  },
  get_number_filter_options: {
    is: 'jest',
    'is greater': 'jest >',
    'is greater equal': 'jest >=',
    'is less': 'jest <',
    'is less equal': 'jest <=',
    'is between': 'jest między',
    'is null': 'ma wartość null',
    'is not': 'nie jest',
    'is not between': 'nie jest między',
    'is not null': 'nie ma wartości null',
    inclusive: '[włącznie]',
    exclusive: '[wyłącznie]',
    'right exclusive': '[prawidłowe — wyłącznie]',
    'left exclusive': '[pozostałe — wyłącznie]',
  },
  get_tier_filter_options: {
    'is any value': 'jest dowolną wartością',
    is: 'jest',
    'is not': 'nie jest',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'dopasowuje atrybut użytkownika',
  },
  OperatorLabel: {
    OR: 'LUB',
    AND: 'I',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Wyczyść wszystko',
    Toggle: 'Przełącz',
    Remove: 'Usuń',
  },
  RelativeTimeframePopoverContent: {
    Presets: 'Ustawienia wstępne',
    Custom: 'Niestandardowe',
  },
  RelativeTimeframePresets: {
    More: 'Więcej',
  },
}
