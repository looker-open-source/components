"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' tamamla',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'önce',
    'from now': 'sonra',
    'is any time': 'herhangi bir zaman',
    'is before': 'şu tarihten önce:',
    'is day': '{{day}}',
    'is from dateTimeStart until dateTimeEnd': 'şu tarihten: {{dateTimeStart}} şu tarihe kadar: {{dateTimeEnd}}',
    'is in month year': '{{month}}{{year}} tarihinde',
    'is in the last': 'geçmiş şu sürede: {{describeInterval}}',
    'is in the year year': 'şu yılda: {{year}}',
    'is interval ago': '{{interval}} önce',
    'is intervalStart intervalType for intervalEnd': '{{intervalEnd}} için {{intervalStart}} {{intervalType}}',
    'is not null': 'değer içeriyor',
    'is on dateTime': 'şu tarihte: {{dateTime}}',
    'is on or after': 'şu tarihte veya şu tarihten sonra:',
    'is previous unitLabel': 'önceki {{unitLabel}}',
    'is type unitLabel': '{{type}} {{unitLabel}}',
    next: 'ileri',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} şimdi',
    "this": 'bu',
    'this startInterval to endInterval': 'bu {{startInterval}} - {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'herhangi bir değer'
  },
  describe_is_item: {
    'is not value': '{{value}} değil',
    'is value': '{{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} - {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} şuradan: {{lat}}, {{lon}}',
    'is anywhere': 'her yerde',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'şu aralıkta: {{range}}',
    'is not in range range': 'şu aralıkta değil: {{range}}'
  },
  describe_string: {
    blank: 'boş',
    'contains value': 'şunu içeriyor: {{value}}',
    'does not contain value': 'şunu içermiyor: {{value}}',
    'does not end with value': 'şununla bitmiyor: {{value}}',
    'does not start with value': 'şununla başlamıyor: {{value}}',
    'ends with value': 'şununla bitiyor: {{value}}',
    'starts with value': 'şununla başlıyor: {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'feet',
    kilometers: 'kilometre',
    meters: 'metre',
    miles: 'mil'
  },
  get_months: {
    April: 'Nisan',
    August: 'Ağustos',
    December: 'Aralık',
    February: 'Şubat',
    January: 'Ocak',
    July: 'Temmuz',
    June: 'Haziran',
    March: 'Mart',
    May: 'May',
    November: 'Kasım',
    October: 'Ekim',
    September: 'Eylül'
  },
  get_unit_label: {
    'complete day': 'tam gün',
    'complete days': 'tam gün',
    'complete fiscal quarter': 'tam mali çeyrek',
    'complete fiscal quarters': 'tam mali çeyrek',
    'complete fiscal year': 'tam mali yıl',
    'complete fiscal years': 'tam mali yıl',
    'complete hour': 'tam saat',
    'complete hours': 'tam saat',
    'complete minute': 'tam dakika',
    'complete minutes': 'tam dakika',
    'complete month': 'tam ay',
    'complete months': 'tam ay',
    'complete quarter': 'tam çeyrek',
    'complete quarters': 'tam çeyrek',
    'complete second': 'tam saniye',
    'complete seconds': 'tam saniye',
    'complete week': 'tam hafta',
    'complete weeks': 'tam hafta',
    'complete year': 'tam yıl',
    'complete years': 'tam yıl',
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
  join_or: {
    'a or b': '{{a}} veya {{b}}'
  },
  summary: {
    'Value required': 'Değer gerekli'
  }
};
var trTR = (0, _i18n.mergeLocaleObjects)([], 'tr-TR', resources);
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map