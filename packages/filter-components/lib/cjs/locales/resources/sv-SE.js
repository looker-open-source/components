"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _sv = _interopRequireDefault(require("date-fns/locale/sv"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Lägg till',
    Remove: 'Ta bort'
  },
  before_after_units: {
    'days ago': 'dagar sedan',
    'days from now': 'dagar kvar',
    'fiscal quarter from now': 'räkenskapskvartal från nu',
    'fiscal quarters ago': 'räkenskapskvartal sedan',
    'fiscal years ago': 'räkenskapsår sedan',
    'fiscal years from now': 'räkenskapsår kvar',
    'hours ago': 'timmar sedan',
    'hours from now': 'timmar kvar',
    'minutes ago': 'minuter sedan',
    'minutes from now': 'minuter kvar',
    'months ago': 'månader sedan',
    'months from now': 'månader kvar',
    now: 'nu',
    'quarters ago': 'kvartal sedan',
    'quarters from now': 'kvartal kvar',
    'seconds ago': 'sekunder sedan',
    'seconds from now': 'sekunder kvar',
    'weeks ago': 'veckor sedan',
    'weeks from now': 'veckor kvar',
    'years ago': 'år sedan',
    'years from now': 'år kvar'
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativt)'
  },
  Between: {
    AND: 'OCH'
  },
  date_units: {
    day: 'dag',
    days: 'dagar',
    'fiscal quarter': 'räkenskapskvartal',
    'fiscal quarters': 'räkenskapskvartal',
    'fiscal year': 'räkenskapsår',
    'fiscal years': 'räkenskapsår',
    hour: 'timme',
    hours: 'timmar',
    minute: 'minut',
    minutes: 'minuter',
    month: 'månad',
    months: 'månader',
    quarter: 'kvartal',
    quarters: 'kvartal',
    second: 'sekund',
    seconds: 'sekunder',
    week: 'vecka',
    weeks: 'veckor',
    year: 'år',
    years: 'år'
  },
  DateRange: {
    'until (before)': 'fram till (före)'
  },
  format_date: {
    firstDayOfWeek: '0'
  },
  get_date_filter_options: {
    is: 'är',
    'is any time': 'är när som helst',
    'is before': 'är före',
    'is in range': 'är i intervallet',
    'is in the last': 'är under det sista',
    'is in the month': 'är under månaden',
    'is in the year': 'är under året',
    'is next': 'är nästa',
    'is not null': 'är inte null',
    'is null': 'är null',
    'is on or after': 'är på eller efter',
    'is on the day': 'är på dagen',
    'is previous': 'är föregående',
    'is this': 'är detta'
  },
  get_filter_options: {
    'matches advanced': 'matchningar (avancerat)'
  },
  get_location_filter_options: {
    Box: 'Ruta',
    Circle: 'Cirkel',
    Location: 'Plats',
    feet: 'fot',
    'is anywhere': 'är var som helst',
    'is not null': 'är inte null',
    'is null': 'är null',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles'
  },
  get_number_filter_options: {
    exclusive: '[exklusive]',
    inclusive: '[inklusive]',
    is: 'är',
    'is between': 'är mellan',
    'is greater': 'är >',
    'is greater equal': 'är >=',
    'is less': 'är <',
    'is less equal': 'är <=',
    'is not': 'är inte',
    'is not between': 'är inte mellan',
    'is not null': 'är inte null',
    'is null': 'är null',
    'left exclusive': '[vänster-exklusive)',
    'right exclusive': '[höger-exklusive)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Sista 14 dagarna',
    'Last 180 Days': 'Sista 180 dagarna',
    'Last 28 Days': 'Sista 28 dagarna',
    'Last 30 Days': 'Sista 30 dagarna',
    'Last 365 Days': 'Sista 365 dagarna',
    'Last 7 Days': 'Sista 7 dagarna',
    'Last 90 Days': 'Sista 90 dagarna',
    'Previous Month': 'Föregående månad',
    'Previous Quarter': 'Föregående kvartal',
    'Previous Week': 'Föregående vecka',
    'Previous Year': 'Föregående år',
    'This Month': 'Denna månad',
    'This Quarter': 'Detta kvartal',
    'This Week': 'Denna vecka',
    'This Year': 'Detta år',
    Today: 'I dag',
    'Year To Date': 'År till dags dato',
    Yesterday: 'I går'
  },
  get_string_filter_options: {
    contains: 'innehåller',
    'doesnt contain': 'innehåller inte',
    'doesnt end with': 'slutar inte med',
    'doesnt start with': 'börjar inte med',
    'ends with': 'slutar med',
    is: 'är',
    'is blank': 'är tom',
    'is not': 'är inte',
    'is not blank': 'är inte tom',
    'is not null': 'är inte null',
    'is null': 'är null',
    'starts with': 'börjar med'
  },
  get_tier_filter_options: {
    is: 'är',
    'is any value': 'är vilket värde som helst',
    'is not': 'är inte'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matchar ett användarattribut'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'vilket värde som helst'
  },
  OperatorLabel: {
    AND: 'OCH',
    OR: 'ELLER'
  },
  past_units: {
    'complete days': 'hela dagar',
    'complete fiscal quarters': 'hela räkenskapskvartal',
    'complete fiscal years': 'hela räkenskapsår',
    'complete hours': 'hela timmar',
    'complete minutes': 'hela minuter',
    'complete months': 'hela månader',
    'complete quarters': 'hela kvartal',
    'complete seconds': 'hela sekunder',
    'complete weeks': 'hela veckor',
    'complete years': 'hela år'
  },
  RadioGroup: {
    'any value': 'vilket värde som helst'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Rensa alla',
    Remove: 'Ta bort',
    Toggle: 'Växla'
  },
  Relative: {
    ago: 'sedan',
    'from now': 'från nu'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Välj en tidsram'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Anpassat',
    Presets: 'Förinställningar'
  },
  RelativeTimeframePresets: {
    More: 'Mer'
  },
  use_filters_errors: {
    'Invalid value': 'Ogiltigt värde',
    'No value is set for your user attribute': 'Inget värde inställt för ditt användarattribut',
    'Selection required': 'Markering krävs'
  },
  use_option_filtering: {
    'No values': 'Inga värden',
    'No values match': 'Inga värden matchar'
  },
  use_placeholder: {
    'any value': 'vilket värde som helst'
  },
  use_suggestable: {
    'Error loading suggestions': 'Fel när förslag skulle läsas in'
  },
  use_validation_message: {
    'Value required': 'Värde krävs'
  }
};
var svSE = {
  dateLocale: _sv["default"],
  locale: 'sv-SE',
  resources: {
    'sv-SE': (0, _merge["default"])({}, resources, _filterExpressions.svSE.resources['sv-SE'], _components.svSE.resources['sv-SE'])
  }
};
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map