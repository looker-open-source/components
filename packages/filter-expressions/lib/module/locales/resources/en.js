

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' complete',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'ago',
    'from now': 'from now',
    'is any time': 'is any time',
    'is before': 'is before',
    'is day': 'is {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'is from {{dateTimeStart}} until {{dateTimeEnd}}',
    'is in month year': 'is in {{month}} {{year}}',
    'is in the last': 'is in the last {{describeInterval}}',
    'is in the year year': 'is in the year {{year}}',
    'is interval ago': 'is {{interval}} ago',
    'is intervalStart intervalType for intervalEnd': 'is {{intervalStart}} {{intervalType}} for {{intervalEnd}}',
    'is not null': 'is not null',
    'is on dateTime': 'is on {{dateTime}}',
    'is on or after': 'is on or after',
    'is previous unitLabel': 'is previous {{unitLabel}}',
    'is type unitLabel': 'is {{type}} {{unitLabel}}',
    next: 'next',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} now',
    this: 'this',
    'this startInterval to endInterval': 'this {{startInterval}} to {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'any value'
  },
  describe_is_item: {
    'is not value': 'is not {{value}}',
    'is value': 'is {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} to {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} from {{lat}}, {{lon}}',
    'is anywhere': 'is anywhere',
    'is not null': 'is not null',
    'is null': 'is null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'is in range {{range}}',
    'is not in range range': 'is not in range {{range}}'
  },
  describe_string: {
    blank: 'blank',
    'contains value': 'contains {{value}}',
    'does not contain value': 'does not contain {{value}}',
    'does not end with value': 'does not end with {{value}}',
    'does not start with value': 'does not start with {{value}}',
    'ends with value': 'ends with {{value}}',
    'starts with value': 'starts with {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'feet',
    kilometers: 'kilometers',
    meters: 'meters',
    miles: 'miles'
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'December',
    February: 'February',
    January: 'January',
    July: 'July',
    June: 'June',
    March: 'March',
    May: 'May',
    November: 'November',
    October: 'October',
    September: 'September'
  },
  get_unit_label: {
    'complete day': 'complete day',
    'complete days': 'complete days',
    'complete fiscal quarter': 'complete fiscal quarter',
    'complete fiscal quarters': 'complete fiscal quarters',
    'complete fiscal year': 'complete fiscal year',
    'complete fiscal years': 'complete fiscal years',
    'complete hour': 'complete hour',
    'complete hours': 'complete hours',
    'complete minute': 'complete minute',
    'complete minutes': 'complete minutes',
    'complete month': 'complete month',
    'complete months': 'complete months',
    'complete quarter': 'complete quarter',
    'complete quarters': 'complete quarters',
    'complete second': 'complete second',
    'complete seconds': 'complete seconds',
    'complete week': 'complete week',
    'complete weeks': 'complete weeks',
    'complete year': 'complete year',
    'complete years': 'complete years',
    day: 'day',
    days: 'days',
    'fiscal quarter': 'fiscal quarter',
    'fiscal quarters': 'fiscal quarters',
    'fiscal year': 'fiscal year',
    'fiscal years': 'fiscal years',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    month: 'month',
    months: 'months',
    quarter: 'quarter',
    quarters: 'quarters',
    second: 'second',
    seconds: 'seconds',
    week: 'week',
    weeks: 'weeks',
    year: 'year',
    years: 'years'
  },
  join_or: {
    'a or b': '{{a}} or {{b}}'
  },
  summary: {
    'Value required': 'Value required'
  }
};
export const en = mergeLocaleObjects([], 'en', resources);
//# sourceMappingURL=en.js.map