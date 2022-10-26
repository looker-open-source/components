"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _tr = _interopRequireDefault(require("date-fns/locale/tr"));

var _filterExpressions = require("@looker/filter-expressions");

var _components = require("@looker/components");

var resources = {
  AddRemoveButtons: {
    Add: 'Ekle',
    Remove: 'Kaldır'
  },
  before_after_units: {
    'days ago': 'gün önce',
    'days from now': 'gün sonra',
    'fiscal quarter from now': 'mali çeyrek sonra',
    'fiscal quarters ago': 'mali çeyrek önce',
    'fiscal years ago': 'mali yıl önce',
    'fiscal years from now': 'mali yıl sonra',
    'hours ago': 'saat önce',
    'hours from now': 'saat sonra',
    'minutes ago': 'dakika önce',
    'minutes from now': 'dakika sonra',
    'months ago': 'ay önce',
    'months from now': 'ay sonra',
    now: 'şimdi',
    'quarters ago': 'çeyrek önce',
    'quarters from now': 'çeyrek sonra',
    'seconds ago': 'saniye önce',
    'seconds from now': 'saniye sonra',
    'weeks ago': 'hafta önce',
    'weeks from now': 'hafta sonra',
    'years ago': 'yıl önce',
    'years from now': 'yıl sonra'
  },
  BeforeAfter: {
    absolute: '(mutlak)',
    relative: '(göreli)'
  },
  Between: {
    AND: 'İLE'
  },
  date_units: {
    day: 'gün',
    days: 'gün',
    'fiscal quarter': 'mali çeyrek',
    'fiscal quarters': 'mali çeyrek',
    'fiscal year': 'mali yıl',
    'fiscal years': 'mali yıl',
    hour: 'saat',
    hours: 'saat',
    minute: 'dakika',
    minutes: 'dakika',
    month: 'ay',
    months: 'ay',
    quarter: 'çeyrek',
    quarters: 'çeyrek',
    second: 'saniye',
    seconds: 'saniye',
    week: 'hafta',
    weeks: 'hafta',
    year: 'yıl',
    years: 'yıl'
  },
  DateRange: {
    'until (before)': 'şu tarihe kadar (şu tarihten önce):'
  },
  get_date_filter_options: {
    is: 'şudur:',
    'is any time': 'herhangi bir zaman',
    'is before': 'şu tarihten önce:',
    'is in range': 'şu aralıkta:',
    'is in the last': 'geçmiş şu sürede:',
    'is in the month': 'şu ayda:',
    'is in the year': 'şu yılda:',
    'is next': 'sonraki',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'is on or after': 'şu tarihte veya şu tarihten sonra:',
    'is on the day': 'şu günde:',
    'is previous': 'önceki',
    'is this': 'bu'
  },
  get_filter_options: {
    'matches advanced': 'şununla eşleşiyor (gelişmiş):'
  },
  get_location_filter_options: {
    Box: 'Kutu',
    Circle: 'Daire',
    Location: 'Konum',
    feet: 'feet',
    'is anywhere': 'her yerde',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    kilometers: 'kilometre',
    meters: 'metre',
    miles: 'mil'
  },
  get_number_filter_options: {
    exclusive: '(hariç)',
    inclusive: '[dahil]',
    is: 'şudur:',
    'is between': 'şunların arasında:',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': 'şu değildir:',
    'is not between': 'şunların arasında değil:',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'left exclusive': '(sol hariç]',
    'right exclusive': '[sağ hariç)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Son 14 Gün',
    'Last 180 Days': 'Son 180 Gün',
    'Last 28 Days': 'Son 28 Gün',
    'Last 30 Days': 'Son 30 Gün',
    'Last 365 Days': 'Son 365 Gün',
    'Last 7 Days': 'Son 7 Gün',
    'Last 90 Days': 'Son 90 Gün',
    'Previous Month': 'Önceki Ay',
    'Previous Quarter': 'Önceki Çeyrek',
    'Previous Week': 'Önceki Hafta',
    'Previous Year': 'Önceki Yıl',
    'This Month': 'Bu Ay',
    'This Quarter': 'Bu Çeyrek',
    'This Week': 'Bu Hafta',
    'This Year': 'Bu Yıl',
    Today: 'Bugün',
    'Year To Date': 'Yılbaşından Bugüne',
    Yesterday: 'Dün'
  },
  get_string_filter_options: {
    contains: 'şunu içeriyor:',
    'doesnt contain': 'şunu içermiyor:',
    'doesnt end with': 'şununla bitmiyor:',
    'doesnt start with': 'şununla başlamıyor:',
    'ends with': 'şununla bitiyor:',
    is: 'şudur:',
    'is blank': 'boş',
    'is not': 'şu değildir:',
    'is not blank': 'boş değil',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'starts with': 'şununla başlıyor:'
  },
  get_tier_filter_options: {
    is: 'şudur:',
    'is any value': 'herhangi bir değer',
    'is not': 'şu değildir:'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'bir kullanıcı özniteliğiyle eşleşiyor'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'herhangi bir değer'
  },
  OperatorLabel: {
    AND: 'İLE',
    OR: 'VEYA'
  },
  past_units: {
    'complete days': 'tam gün',
    'complete fiscal quarters': 'tam mali çeyrek',
    'complete fiscal years': 'tam mali yıl',
    'complete hours': 'tam saat',
    'complete minutes': 'tam dakika',
    'complete months': 'tam ay',
    'complete quarters': 'tam çeyrek',
    'complete seconds': 'tam saniye',
    'complete weeks': 'tam hafta',
    'complete years': 'tam yıl'
  },
  RadioGroup: {
    'any value': 'herhangi bir değer'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Tümünü temizle',
    Remove: 'Kaldır',
    Toggle: 'Değiştir'
  },
  Relative: {
    ago: 'önce',
    'from now': 'sonra'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Bir Zaman Dilimi Seçin'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Özel',
    Presets: 'Önayarlar'
  },
  RelativeTimeframePresets: {
    More: 'Daha Fazla'
  },
  use_filters_errors: {
    'Invalid value': 'Geçersiz değer',
    'No value is set for your user attribute': 'Kullanıcı özniteliği için ayarlanan değer yok',
    'Selection required': 'Seçim gerekli'
  },
  use_option_filtering: {
    'No values': 'Değer yok',
    'No values match': 'Eşleşen değer yok'
  },
  use_placeholder: {
    'any value': 'herhangi bir değer'
  },
  use_suggestable: {
    'Error loading suggestions': 'Öneriler yüklenirken hata'
  },
  use_validation_message: {
    'Value required': 'Değer gerekli'
  }
};
var trTR = {
  dateLocale: _tr["default"],
  locale: 'tr-TR',
  resources: {
    'tr-TR': (0, _merge["default"])({}, resources, _filterExpressions.trTR.resources['tr-TR'], _components.trTR.resources['tr-TR'])
  }
};
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map