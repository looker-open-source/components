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

import dateLocale from 'date-fns/locale/pl';
import { plPL as componentsLocale } from '@looker/components';
import { plPL as filterexpressionsLocale } from '@looker/filter-expressions';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  AddRemoveButtons: {
    Add: 'Dodaj',
    Remove: 'Usuń',
  },
  before_after_units: {
    'days ago': 'dni temu',
    'days from now': 'dni od teraz',
    'fiscal quarter from now': 'kwartał fiskalny od teraz',
    'fiscal quarters ago': 'kwartały podatkowe temu',
    'fiscal years ago': 'lata podatkowe temu',
    'fiscal years from now': 'lata podatkowe od teraz',
    'hours ago': 'godziny temu',
    'hours from now': 'godziny od teraz',
    'minutes ago': 'minuty temu',
    'minutes from now': 'minuty od teraz',
    'months ago': 'miesiące temu',
    'months from now': 'miesiące od teraz',
    now: 'od teraz',
    'quarters ago': 'kwartały temu',
    'quarters from now': 'kwartały od teraz',
    'seconds ago': 'sekundy temu',
    'seconds from now': 'sekundy od teraz',
    'weeks ago': 'tygodnie temu',
    'weeks from now': 'tygodnie od teraz',
    'years ago': 'lata temu',
    'years from now': 'lata od teraz',
  },
  BeforeAfter: {
    absolute: '(bezwzględne)',
    relative: '(względne)',
  },
  Between: {
    AND: 'ORAZ',
  },
  date_units: {
    day: 'dzień',
    days: 'dni',
    'fiscal quarter': 'kwartał fiskalny',
    'fiscal quarters': 'kwartały podatkowe',
    'fiscal year': 'rok fiskalny',
    'fiscal years': 'lata podatkowe',
    hour: 'godzina',
    hours: 'godziny',
    minute: 'minuta',
    minutes: 'minuty',
    month: 'miesiąc',
    months: 'miesiące',
    quarter: 'kwartał',
    quarters: 'kwartały',
    second: 'sekunda',
    seconds: 'sekundy',
    week: 'tydzień',
    weeks: 'tygodnie',
    year: 'rok',
    years: 'lata',
  },
  DateRange: {
    'until (before)': 'do (przed)',
  },
  get_date_filter_options: {
    is: 'jest',
    'is any time': 'jest w dowolnym momencie',
    'is before': 'jest wcześniej niż',
    'is in range': 'mieści się w zakresie',
    'is in the last': 'przypada na ostatni',
    'is in the month': 'przypada na miesiąc',
    'is in the year': 'jest w roku',
    'is next': 'przypada na następny',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'is on or after': 'przypada nie wcześniej niż',
    'is on the day': 'jest w dniu',
    'is previous': 'przypada na poprzedni',
    'is this': 'przypada na ten',
  },
  get_filter_options: {
    'matches advanced': 'dopasowania (zaawansowane)',
  },
  get_location_filter_options: {
    Box: 'Pole',
    Circle: 'Okrąg',
    Location: 'Lokalizacja',
    feet: 'ft',
    'is anywhere': 'jest w dowolnym miejscu',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    kilometers: 'km',
    meters: 'm',
    miles: 'mi',
  },
  get_number_filter_options: {
    exclusive: '(przedział otwarty)',
    inclusive: '[przedział domknięty]',
    is: 'jest',
    'is between': 'jest pomiędzy',
    'is greater': 'jest >',
    'is greater equal': 'jest >=',
    'is less': 'jest <',
    'is less equal': 'jest <=',
    'is not': 'nie jest',
    'is not between': 'nie jest pomiędzy',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'left exclusive': '(przedział lewostronnie otwarty]',
    'right exclusive': '[przedział prawostronnie otwarty)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Ostatnie 14 dni',
    'Last 180 Days': 'Ostatnie 180 dni',
    'Last 28 Days': 'Ostatnie 28 dni',
    'Last 30 Days': 'Ostatnie 30 dni',
    'Last 365 Days': 'Ostatnie 365 dni',
    'Last 7 Days': 'Ostatnie 7 dni',
    'Last 90 Days': 'Ostatnie 90 dni',
    'Previous Month': 'Poprzedni miesiąc',
    'Previous Quarter': 'Poprzedni kwartał',
    'Previous Week': 'Poprzedni tydzień',
    'Previous Year': 'Poprzedni rok',
    'This Month': 'Bieżący miesiąc',
    'This Quarter': 'Bieżący kwartał',
    'This Week': 'Bieżący tydzień',
    'This Year': 'Bieżący rok',
    Today: 'Dziś',
    'Year To Date': 'Od początku roku',
    Yesterday: 'Wczoraj',
  },
  get_string_filter_options: {
    contains: 'zawiera',
    'doesnt contain': 'nie zawiera',
    'doesnt end with': 'nie kończy się na',
    'doesnt start with': 'nie zaczyna się od',
    'ends with': 'kończy się na',
    is: 'jest',
    'is blank': 'ma wartość pustą',
    'is not': 'nie jest',
    'is not blank': 'nie ma wartości pustej',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'starts with': 'rozpoczyna się od',
  },
  get_tier_filter_options: {
    is: 'jest',
    'is any value': 'ma dowolną wartość',
    'is not': 'nie jest',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'pasuje do atrybutu użytkownika',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NoMatchingFields: {
    'No Matching Fields': 'Brak pasujących pól',
    'Try Something Else':
      'Spróbuj wyszukać inne hasło lub zacznij od nowa i rozwiń dowolny wgląd, aby przejrzeć dostępne pola.',
  },
  NumberFilter: {
    'any value': 'dowolna wartość',
  },
  OperatorLabel: {
    AND: 'ORAZ',
    OR: 'LUB',
  },
  past_units: {
    'complete days': 'pełne dni',
    'complete fiscal quarters': 'pełne kwartały podatkowe',
    'complete fiscal years': 'pełne lata podatkowe',
    'complete hours': 'pełne godziny',
    'complete minutes': 'pełne minuty',
    'complete months': 'pełne miesiące',
    'complete quarters': 'pełne kwartały',
    'complete seconds': 'pełne sekundy',
    'complete weeks': 'pełne tygodnie',
    'complete years': 'pełne lata',
  },
  RadioGroup: {
    'any value': 'dowolna wartość',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Wyczyść wszystkie',
    Remove: 'Usuń',
    Toggle: 'Przełącz',
  },
  Relative: {
    ago: 'temu',
    'from now': 'od teraz',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Wybierz przedział czasu',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Niestandardowo',
    Presets: 'Gotowe ustawienia',
  },
  RelativeTimeframePresets: {
    More: 'Więcej',
  },
  use_filters_errors: {
    'Invalid value': 'Nieprawidłowa wartość',
    'No value is set for your user attribute':
      'Nie ustawiono wartości atrybutu użytkownika',
    'Selection required': 'Musisz coś wybrać',
  },
  use_option_filtering: {
    'No values': 'Brak wartości',
    'No values match': 'Brak pasujących wartości',
  },
  use_placeholder: {
    'any value': 'dowolna wartość',
  },
  use_suggestable: {
    'Error loading suggestions': 'Błąd wczytywania sugestii',
  },
  use_validation_message: {
    'Value required': 'Wartość jest wymagana',
  },
  UserAttributes: {
    placeholder: 'Wybierz…',
  },
};

export const plPL = mergeLocaleObjects(
  [componentsLocale, filterexpressionsLocale],
  'pl-PL',
  resources,
  dateLocale
);
