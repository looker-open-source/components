"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _da = _interopRequireDefault(require("date-fns/locale/da"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Tilføj',
    Remove: 'Fjern'
  },
  before_after_units: {
    'days ago': 'dage siden',
    'days from now': 'dage fra nu',
    'fiscal quarter from now': 'regnskabskvartal fra nu',
    'fiscal quarters ago': 'regnskabskvartaler siden',
    'fiscal years ago': 'regnskabsår siden',
    'fiscal years from now': 'regnskabsår fra nu',
    'hours ago': 'timer siden',
    'hours from now': 'timer fra nu',
    'minutes ago': 'minutter siden',
    'minutes from now': 'minutter fra nu',
    'months ago': 'måneder siden',
    'months from now': 'måneder fra nu',
    now: 'nu',
    'quarters ago': 'kvartaler siden',
    'quarters from now': 'kvartaler fra nu',
    'seconds ago': 'sekunder siden',
    'seconds from now': 'sekunder fra nu',
    'weeks ago': 'uger siden',
    'weeks from now': 'uger fra nu',
    'years ago': 'år siden',
    'years from now': 'år fra nu'
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativ)'
  },
  Between: {
    AND: 'OG'
  },
  date_units: {
    day: 'dag',
    days: 'dage',
    'fiscal quarter': 'regnskabskvartal',
    'fiscal quarters': 'regnskabskvartaler',
    'fiscal year': 'regnskabsår',
    'fiscal years': 'regnskabsår',
    hour: 'time',
    hours: 'timer',
    minute: 'minut',
    minutes: 'minutter',
    month: 'måned',
    months: 'måneder',
    quarter: 'kvartal',
    quarters: 'kvartaler',
    second: 'sekund',
    seconds: 'sekunder',
    week: 'uge',
    weeks: 'uger',
    year: 'år',
    years: 'år'
  },
  DateRange: {
    'until (before)': 'indtil (før)'
  },
  get_date_filter_options: {
    is: 'er',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is in range': 'er i område',
    'is in the last': 'er inden for den/det seneste',
    'is in the month': 'er i måneden',
    'is in the year': 'er i året',
    'is next': 'er næste',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'is on or after': 'er på eller efter',
    'is on the day': 'er på dagen',
    'is previous': 'er forrige',
    'is this': 'er dette'
  },
  get_filter_options: {
    'matches advanced': 'resultater (avanceret)'
  },
  get_location_filter_options: {
    Box: 'Boks',
    Circle: 'Cirkel',
    Location: 'Placering',
    feet: 'fod',
    'is anywhere': 'er hvor som helst',
    'is not null': 'er ikke null',
    'is null': 'er null',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles'
  },
  get_number_filter_options: {
    exclusive: '(eksklusive)',
    inclusive: '[inklusive]',
    is: 'er',
    'is between': 'er mellem',
    'is greater': 'er >',
    'is greater equal': 'er >=',
    'is less': 'er <',
    'is less equal': 'er <=',
    'is not': 'er ikke',
    'is not between': 'er ikke mellem',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'left exclusive': '(venstre-eksklusive]',
    'right exclusive': '[højre-eksklusive)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'De seneste 14 dage',
    'Last 180 Days': 'De seneste 180 dage',
    'Last 28 Days': 'De seneste 28 dage',
    'Last 30 Days': 'De seneste 30 dage',
    'Last 365 Days': 'De seneste 365 dage',
    'Last 7 Days': 'De seneste 7 dage',
    'Last 90 Days': 'De seneste 90 dage',
    'Previous Month': 'Forrige måned',
    'Previous Quarter': 'Forrige kvartal',
    'Previous Week': 'Forrige uge',
    'Previous Year': 'Forrige år',
    'This Month': 'Denne måned',
    'This Quarter': 'Dette kvartal',
    'This Week': 'Denne uge',
    'This Year': 'Dette år',
    Today: 'I dag',
    'Year To Date': 'År til dato',
    Yesterday: 'I går'
  },
  get_string_filter_options: {
    contains: 'indeholder',
    'doesnt contain': 'indeholder ikke',
    'doesnt end with': 'slutter ikke med',
    'doesnt start with': 'starter ikke med',
    'ends with': 'slutter med',
    is: 'er',
    'is blank': 'er tom',
    'is not': 'er ikke',
    'is not blank': 'er ikke tom',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'starts with': 'starter med'
  },
  get_tier_filter_options: {
    is: 'er',
    'is any value': 'er enhver værdi',
    'is not': 'er ikke'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matcher en brugerattribut'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'enhver værdi'
  },
  OperatorLabel: {
    AND: 'OG',
    OR: 'ELLER'
  },
  past_units: {
    'complete days': 'hele dage',
    'complete fiscal quarters': 'hele regnskabskvartaler',
    'complete fiscal years': 'hele regnskabsår',
    'complete hours': 'hele timer',
    'complete minutes': 'hele minutter',
    'complete months': 'hele måneder',
    'complete quarters': 'hele kvartaler',
    'complete seconds': 'hele sekunder',
    'complete weeks': 'hele uger',
    'complete years': 'hele år'
  },
  RadioGroup: {
    'any value': 'enhver værdi'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Ryd alt',
    Remove: 'Fjern',
    Toggle: 'Slå til/fra'
  },
  Relative: {
    ago: 'siden',
    'from now': 'fra nu'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Vælg en tidsramme'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Tilpasning',
    Presets: 'Forudindstillinger'
  },
  RelativeTimeframePresets: {
    More: 'Mere'
  },
  use_filters_errors: {
    'Invalid value': 'Ugyldig værdi',
    'No value is set for your user attribute': 'Der er ikke angivet nogen værdi for din brugerattribut',
    'Selection required': 'Valg kræves'
  },
  use_option_filtering: {
    'No values': 'Ingen værdier',
    'No values match': 'Ingen matchende værdier'
  },
  use_placeholder: {
    'any value': 'enhver værdi'
  },
  use_suggestable: {
    'Error loading suggestions': 'Fejl under indlæsning af forslag'
  },
  use_validation_message: {
    'Value required': 'Værdi kræves'
  }
};
var daDK = {
  dateLocale: _da["default"],
  locale: 'da-DK',
  resources: {
    'da-DK': (0, _merge["default"])({}, resources, _filterExpressions.daDK.resources['da-DK'], _components.daDK.resources['da-DK'])
  }
};
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map