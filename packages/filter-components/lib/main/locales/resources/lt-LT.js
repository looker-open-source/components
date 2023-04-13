"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltLT = void 0;
var _lt = _interopRequireDefault(require("date-fns/locale/lt"));
var _components = require("@looker/components");
var _filterExpressions = require("@looker/filter-expressions");
var _i18n = require("@looker/i18n");

var resources = {
  use_validation_message: {
    'Value required': 'Būtina užpildyti'
  },
  use_suggestable: {
    'Error loading suggestions': 'Nepavyko įkelti pasiūlymų'
  },
  use_placeholder: {
    'any value': 'bet kokia vertė'
  },
  use_option_filtering: {
    'No values': 'Nėra verčių',
    'No values match': 'Nėra sutampančių verčių'
  },
  use_filters_errors: {
    'Invalid value': 'Klaidinga reikšmė',
    'No value is set for your user attribute': 'Nenustatyta jokia vartotojo atributo vertė',
    'Selection required': 'Reikalinga atranka'
  },
  past_units: {
    'complete days': 'praėjusios dienos',
    'complete fiscal quarters': 'praėję finansiniai ketvirčiai',
    'complete fiscal years': 'praėję finansiniai metai',
    'complete hours': 'praėjusios valandos',
    'complete minutes': 'praėjusios minutės',
    'complete months': 'praėję mėnesiai',
    'complete quarters': 'praėję ketvirčiai',
    'complete seconds': 'praėjusios sekundės',
    'complete weeks': 'praėjusios savaitės',
    'complete years': 'praėję metai'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'atitinka naudotojo atributą'
  },
  get_tier_filter_options: {
    is: 'yra',
    'is any value': 'yra bet kuri vertė',
    'is not': 'nėra'
  },
  get_string_filter_options: {
    contains: 'yra',
    'doesnt contain': 'nėra',
    'doesnt end with': 'nesibaigia',
    'doesnt start with': 'neprasideda',
    'ends with': 'baigiasi',
    is: 'yra',
    'is blank': 'yra tuščia',
    'is not': 'nėra',
    'is not blank': 'nėra tuščia',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'starts with': 'prasideda'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Pastarosios 14 dienų',
    'Last 180 Days': 'Pastarosios 180 dienų',
    'Last 28 Days': 'Pastarosios 28 dienos',
    'Last 30 Days': 'Pastarosios 30 dienų',
    'Last 365 Days': 'Pastarosios 365 dienos',
    'Last 7 Days': 'Pastarosios 7 dienos',
    'Last 90 Days': 'Pastarosios 90 dienų',
    'Previous Month': 'Ankstesnis mėnuo',
    'Previous Quarter': 'Ankstesnis ketvirtis',
    'Previous Week': 'Ankstesnė savaitė',
    'Previous Year': 'Ankstesni metai',
    'This Month': 'Šis mėnuo',
    'This Quarter': 'Šis ketvirtis',
    'This Week': 'Ši savaitė',
    'This Year': 'Šie metai',
    Today: 'Šiandien',
    'Year To Date': 'Nuo metų pradžios',
    Yesterday: 'Vakar'
  },
  get_number_filter_options: {
    exclusive: '(neįskaitant)',
    inclusive: '(įskaitant)',
    is: 'yra',
    'is between': 'yra tarp',
    'is greater': 'yra >',
    'is greater equal': 'yra >=',
    'is less': 'yra <',
    'is less equal': 'yra <=',
    'is not': 'nėra',
    'is not between': 'nėra tarp',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'left exclusive': '(kairė-neįskaitant)',
    'right exclusive': '(dešinė-neįskaitant)'
  },
  get_location_filter_options: {
    Box: 'Langelis',
    Circle: 'Apskritimas',
    Location: 'Vieta',
    feet: 'pėdų',
    'is anywhere': 'yra bet kur',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    kilometers: 'km',
    meters: 'm',
    miles: 'mylių'
  },
  get_filter_options: {
    'matches advanced': 'atitikimai (išplėstinis)'
  },
  get_date_filter_options: {
    is: 'yra',
    'is any time': 'yra bet kuriuo metu',
    'is before': 'yra prieš',
    'is in range': 'yra diapazone',
    'is in the last': 'yra paskutinį',
    'is in the month': 'yra mėnesį',
    'is in the year': 'yra metais',
    'is next': 'yra kitą',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'is on or after': 'yra tada ar po',
    'is on the day': 'yra dieną',
    'is previous': 'yra ankstesnę (-ę) ',
    'is this': 'yra šį (šią)'
  },
  date_units: {
    day: 'd.',
    days: 'dienos',
    'fiscal quarter': 'finansinis ketvirtis',
    'fiscal quarters': 'finansiniai ketvirčiai',
    'fiscal year': 'finansiniai metai',
    'fiscal years': 'finansiniai metai',
    hour: 'val.',
    hours: 'valandos',
    minute: 'min.',
    minutes: 'minutės',
    month: 'mėnuo',
    months: 'mėnesiai',
    quarter: 'ketvirtis',
    quarters: 'ketvirčiai',
    second: 'sek.',
    seconds: 'sekundės',
    week: 'savaitė',
    weeks: 'savaitės',
    year: 'metai',
    years: 'metai'
  },
  before_after_units: {
    'days ago': 'dienas prieš',
    'days from now': 'dienas nuo dabar',
    'fiscal quarter from now': 'finansinis ketvirtis nuo dabar',
    'fiscal quarters ago': 'finansinius ketvirčius prieš',
    'fiscal years ago': 'finansinius metus prieš',
    'fiscal years from now': 'finansinius metus nuo dabar',
    'hours ago': 'valandas prieš',
    'hours from now': 'valandas nuo dabar',
    'minutes ago': 'minutes prieš',
    'minutes from now': 'minutes nuo dabar',
    'months ago': 'mėnesius prieš',
    'months from now': 'mėnesius nuo dabar',
    now: 'dabar',
    'quarters ago': 'ketvirčius prieš',
    'quarters from now': 'ketvirčius nuo dabar',
    'seconds ago': 'sekundes prieš',
    'seconds from now': 'sekundes nuo dabar',
    'weeks ago': 'savaites prieš',
    'weeks from now': 'savaites nuo dabar',
    'years ago': 'metus prieš',
    'years from now': 'metus nuo dabar'
  },
  RelativeTimeframePresets: {
    More: 'Daugiau'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Tinkinta',
    Presets: 'Išankstiniai nustatymai'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Pasirinkite laikotarpį'
  },
  Relative: {
    ago: 'prieš',
    'from now': 'nuo dabar'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Valyti visus',
    Remove: 'Pašalinti',
    Toggle: 'Perjungti'
  },
  RadioGroup: {
    'any value': 'bet kokia vertė'
  },
  OperatorLabel: {
    AND: 'IR',
    OR: 'ARBA'
  },
  NumberFilter: {
    'any value': 'bet kokia vertė'
  },
  NoMatchingFields: {
    'No Matching Fields': 'Nėra atitinkančių laukų',
    'Try Something Else': 'Išbandykite kitą paieškos terminą arba pradėkite iš naujo ir išplėskite bet kurį naršymą, kad galėtumėte naršyti galimus laukus.'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  DateRange: {
    'until (before)': 'iki (prieš)'
  },
  Between: {
    AND: 'IR'
  },
  BeforeAfter: {
    absolute: '(visiškai)',
    relative: '(santykinai)'
  },
  AddRemoveButtons: {
    Add: 'Pridėti',
    Remove: 'Pašalinti'
  }
};
var ltLT = (0, _i18n.mergeLocaleObjects)([_components.ltLT, _filterExpressions.ltLT], 'lt-LT', resources, _lt["default"]);
exports.ltLT = ltLT;
//# sourceMappingURL=lt-LT.js.map