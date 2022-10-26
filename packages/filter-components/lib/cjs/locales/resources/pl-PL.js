"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _pl = _interopRequireDefault(require("date-fns/locale/pl"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Dodaj',
    Remove: 'Usuń'
  },
  before_after_units: {
    'days ago': 'dni temu',
    'days from now': 'dni od teraz',
    'fiscal quarter from now': 'kwartał fiskalny od teraz',
    'fiscal quarters ago': 'kw. fiskalne temu',
    'fiscal years ago': 'lata fiskalne/lat fiskalnych temu',
    'fiscal years from now': 'lat fiskalnych/lata fiskalne od teraz',
    'hours ago': 'godz. temu',
    'hours from now': 'godz. od teraz',
    'minutes ago': 'min temu',
    'minutes from now': 'min od teraz',
    'months ago': 'mies. temu',
    'months from now': 'mies. od teraz',
    now: 'teraz',
    'quarters ago': 'kw. temu',
    'quarters from now': 'kw. od teraz',
    'seconds ago': 'sek. temu',
    'seconds from now': 'sek. od teraz',
    'weeks ago': 'tyg. temu',
    'weeks from now': 'tyg. od teraz',
    'years ago': 'lat/lata temu',
    'years from now': 'lat/lata od teraz'
  },
  BeforeAfter: {
    absolute: '(wartość bezwzględna)',
    relative: '(wartość relatywna)'
  },
  Between: {
    AND: 'I'
  },
  date_units: {
    day: 'dzień',
    days: 'dni',
    'fiscal quarter': 'kwartał fiskalny',
    'fiscal quarters': 'kw. fiskalne',
    'fiscal year': 'rok fiskalny',
    'fiscal years': 'lata fiskalne/lat fiskalnych',
    hour: 'godzina',
    hours: 'godz.',
    minute: 'minuta',
    minutes: 'min',
    month: 'miesiąc',
    months: 'mies.',
    quarter: 'kwartał',
    quarters: 'kw.',
    second: 'sekunda',
    seconds: 'sek.',
    week: 'tydzień',
    weeks: 'tyg.',
    year: 'rok',
    years: 'lat/lata'
  },
  DateRange: {
    'until (before)': 'do (przed)'
  },
  get_date_filter_options: {
    is: 'jest',
    'is any time': 'jest dowolnym czasem',
    'is before': 'jest przed',
    'is in range': 'mieści się w zakresie',
    'is in the last': 'miało miejsce w ciągu ostatnich',
    'is in the month': 'miało miejsce w miesiącu',
    'is in the year': 'jest w danym roku',
    'is next': 'jest następnym',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'is on or after': 'jest w danym terminie lub po',
    'is on the day': 'jest w danym terminie',
    'is previous': 'jest poprzednim',
    'is this': 'jest tym'
  },
  get_filter_options: {
    'matches advanced': 'dopasowania (zaawansowane)'
  },
  get_location_filter_options: {
    Box: 'Pole',
    Circle: 'Koło',
    Location: 'Lokalizacja',
    feet: 'ft',
    'is anywhere': 'ma dowolną wartość',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    kilometers: 'km',
    meters: 'm',
    miles: 'mi'
  },
  get_number_filter_options: {
    exclusive: '[wyłącznie]',
    inclusive: '[włącznie]',
    is: 'jest',
    'is between': 'jest między',
    'is greater': 'jest >',
    'is greater equal': 'jest >=',
    'is less': 'jest <',
    'is less equal': 'jest <=',
    'is not': 'nie jest',
    'is not between': 'nie jest między',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'left exclusive': '[pozostałe — wyłącznie]',
    'right exclusive': '[prawidłowe — wyłącznie]'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Ostatnie 14 dni',
    'Last 180 Days': 'Ostatnie 180 dni',
    'Last 28 Days': 'Ostatnie 28 dni',
    'Last 30 Days': 'Ostatnie 30 dni',
    'Last 365 Days': 'Ostatnie 365 dni',
    'Last 7 Days': 'Ostatnie 7 dni',
    'Last 90 Days': 'Ostatnie 90 dni',
    'Previous Month': 'Poprzedni miesiąc',
    'Previous Quarter': 'Poprzedni kwartał',
    'Previous Week': 'Poprzedni tydzień',
    'Previous Year': 'Poprzedni rok',
    'This Month': 'Ten miesiąc',
    'This Quarter': 'Ten kwartał',
    'This Week': 'Ten tydzień',
    'This Year': 'Ten rok',
    Today: 'Dziś',
    'Year To Date': 'Od początku roku',
    Yesterday: 'Wczoraj'
  },
  get_string_filter_options: {
    contains: 'zawiera',
    'doesnt contain': 'nie zawiera',
    'doesnt end with': 'nie kończy się na',
    'doesnt start with': 'nie zaczyna się od',
    'ends with': 'kończy się na',
    is: 'jest',
    'is blank': 'jest puste',
    'is not': 'nie jest',
    'is not blank': 'nie jest puste',
    'is not null': 'nie ma wartości null',
    'is null': 'ma wartość null',
    'starts with': 'zaczyna się od'
  },
  get_tier_filter_options: {
    is: 'jest',
    'is any value': 'jest dowolną wartością',
    'is not': 'nie jest'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'dopasowuje atrybut użytkownika'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'dowolna wartość'
  },
  OperatorLabel: {
    AND: 'I',
    OR: 'LUB'
  },
  past_units: {
    'complete days': 'pełnych dni',
    'complete fiscal quarters': 'pełnych kw. fiskalnych',
    'complete fiscal years': 'pełne lata fiskalne/pełnych lat fiskalnych',
    'complete hours': 'pełnych godz.',
    'complete minutes': 'pełnych min',
    'complete months': 'pełnych mies.',
    'complete quarters': 'pełnych kw.',
    'complete seconds': 'pełnych sek.',
    'complete weeks': 'pełnych tyg.',
    'complete years': 'pełne lata/pełnych lat'
  },
  RadioGroup: {
    'any value': 'dowolna wartość'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Wyczyść wszystko',
    Remove: 'Usuń',
    Toggle: 'Przełącz'
  },
  Relative: {
    ago: 'temu',
    'from now': 'od teraz'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Wybierz ramy czasowe'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Niestandardowe',
    Presets: 'Ustawienia wstępne'
  },
  RelativeTimeframePresets: {
    More: 'Więcej'
  },
  use_filters_errors: {
    'Invalid value': 'Nieprawidłowa wartość',
    'No value is set for your user attribute': 'Nie ustawiono wartości dla atrybutu użytkownika',
    'Selection required': 'Wymagany wybór'
  },
  use_option_filtering: {
    'No values': 'Brak wartości',
    'No values match': 'Brak pasujących wartości'
  },
  use_placeholder: {
    'any value': 'dowolna wartość'
  },
  use_suggestable: {
    'Error loading suggestions': 'Błąd ładowania sugestii'
  },
  use_validation_message: {
    'Value required': 'Wartość jest wymagana'
  }
};
var plPL = {
  dateLocale: _pl["default"],
  locale: 'pl-PL',
  resources: {
    'pl-PL': (0, _merge["default"])({}, resources, _filterExpressions.plPL.resources['pl-PL'], _components.plPL.resources['pl-PL'])
  }
};
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map