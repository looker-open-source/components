"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;
var _i18n = require("@looker/i18n");

var resources = {
  describe_date: {
    ' complete': ' slutför',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'sedan',
    'from now': 'från nu',
    'is any time': 'är när som helst',
    'is before': 'är före',
    'is day': 'är {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'är från {{dateTimeStart}} till och med {{dateTimeEnd}}',
    'is in month year': 'är om {{month}} {{year}}',
    'is in the last': 'är under senaste {{describeInterval}}',
    'is in the year year': 'är under år {{year}}',
    'is interval ago': 'är {{interval}} sedan',
    'is intervalStart intervalType for intervalEnd': 'är {{intervalStart}} {{intervalType}} för {{intervalEnd}}',
    'is not null': 'är inte null',
    'is on dateTime': 'är den {{dateTime}}',
    'is on or after': 'är på eller efter',
    'is previous unitLabel': 'är föregående {{unitLabel}}',
    'is type unitLabel': 'är {{type}} {{unitLabel}}',
    next: 'nästa',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nu',
    "this": 'detta',
    'this startInterval to endInterval': 'detta {{startInterval}} till {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'vilket värde som helst'
  },
  describe_is_item: {
    'is not value': 'är inte {{value}}',
    'is value': 'är {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} till {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} från {{lat}}, {{lon}}',
    'is anywhere': 'är var som helst',
    'is not null': 'är inte null',
    'is null': 'är null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°O',
    'lon degrees west': '{{lon}}°V'
  },
  describe_number: {
    'is in range range': 'är i intervallet {{range}}',
    'is not in range range': 'är inte i intervallet {{range}}'
  },
  describe_string: {
    blank: 'tomt',
    'contains value': 'innehåller {{value}}',
    'does not contain value': 'innehåller inte {{value}}',
    'does not end with value': 'slutar inte med {{value}}',
    'does not start with value': 'börjar inte med {{value}}',
    'ends with value': 'slutar med {{value}}',
    'starts with value': 'börjar med {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'fot',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles'
  },
  get_months: {
    April: 'April',
    August: 'Augusti',
    December: 'December',
    February: 'Februari',
    January: 'Januari',
    July: 'Juli',
    June: 'Juni',
    March: 'Mars',
    May: 'Maj',
    November: 'November',
    October: 'Oktober',
    September: 'September'
  },
  get_unit_label: {
    'complete day': 'hel dag',
    'complete days': 'hela dagar',
    'complete fiscal quarter': 'helt räkenskapskvartal',
    'complete fiscal quarters': 'hela räkenskapskvartal',
    'complete fiscal year': 'helt räkenskapsår',
    'complete fiscal years': 'hela räkenskapsår',
    'complete hour': 'hel timme',
    'complete hours': 'hela timmar',
    'complete minute': 'hel minut',
    'complete minutes': 'hela minuter',
    'complete month': 'hel månad',
    'complete months': 'hela månader',
    'complete quarter': 'helt kvartal',
    'complete quarters': 'hela kvartal',
    'complete second': 'hel sekund',
    'complete seconds': 'hela sekunder',
    'complete week': 'hel vecka',
    'complete weeks': 'hela veckor',
    'complete year': 'helt år',
    'complete years': 'hela år',
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
  join_or: {
    'a or b': '{{a}} eller {{b}}'
  },
  summary: {
    'Value required': 'Värde krävs'
  }
};
var svSE = (0, _i18n.mergeLocaleObjects)([], 'sv-SE', resources);
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map