

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' fullført',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'siden',
    'from now': 'fra nå',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is day': 'er {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'er fra {{dateTimeStart}} til {{dateTimeEnd}}',
    'is in month year': 'er i {{month}} {{year}}',
    'is in the last': 'er i den siste {{describeInterval}}',
    'is in the year year': 'er i år {{year}}',
    'is interval ago': 'er {{interval}} siden',
    'is intervalStart intervalType for intervalEnd': 'er {{intervalStart}} {{intervalType}} for {{intervalEnd}}',
    'is not null': 'er ikke null',
    'is on dateTime': 'er på {{dateTime}}',
    'is on or after': 'er på eller etter',
    'is previous unitLabel': 'er forrige {{unitLabel}}',
    'is type unitLabel': 'er {{type}} {{unitLabel}}',
    next: 'neste',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nå',
    this: 'denne',
    'this startInterval to endInterval': 'denne {{startInterval}} til {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'enhver verdi'
  },
  describe_is_item: {
    'is not value': 'er ikke {{value}}',
    'is value': 'er {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} til {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} fra {{lat}}, {{lon}}',
    'is anywhere': 'er hvor som helst',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°Ø',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'er i området {{range}}',
    'is not in range range': 'er ikke i området {{range}}'
  },
  describe_string: {
    blank: 'tom',
    'contains value': 'inneholder {{value}}',
    'does not contain value': 'inneholder ikke {{value}}',
    'does not end with value': 'slutter ikke med {{value}}',
    'does not start with value': 'starter ikke med {{value}}',
    'ends with value': 'slutter med {{value}}',
    'starts with value': 'starter med {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'fot (lengdeenhet)',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'mil'
  },
  get_months: {
    April: 'April',
    August: 'August',
    December: 'Desember',
    February: 'Februar',
    January: 'Januar',
    July: 'Juli',
    June: 'Juni',
    March: 'Mars',
    May: 'Mai',
    November: 'November',
    October: 'Oktober',
    September: 'September'
  },
  get_unit_label: {
    'complete day': 'fullført dag',
    'complete days': 'hele dager',
    'complete fiscal quarter': 'fullført regnskapskvartal',
    'complete fiscal quarters': 'hele regnskapskvartaler',
    'complete fiscal year': 'fullført regnskapsår',
    'complete fiscal years': 'hele regnskapsår',
    'complete hour': 'fullført time',
    'complete hours': 'hele timer',
    'complete minute': 'fullført minutt',
    'complete minutes': 'hele minutter',
    'complete month': 'fullført måned',
    'complete months': 'hele måneder',
    'complete quarter': 'fullført kvartal',
    'complete quarters': 'hele kvartaler',
    'complete second': 'fullført sekund',
    'complete seconds': 'hele sekunder',
    'complete week': 'fullført uke',
    'complete weeks': 'hele uker',
    'complete year': 'fullført år',
    'complete years': 'hele år',
    day: 'dag',
    days: 'dager',
    'fiscal quarter': 'regnskapskvartal',
    'fiscal quarters': 'regnskapskvartaler',
    'fiscal year': 'regnskapsår',
    'fiscal years': 'regnskapsår',
    hour: 'time',
    hours: 'timer',
    minute: 'minutt',
    minutes: 'minutter',
    month: 'måned',
    months: 'måneder',
    quarter: 'kvartal',
    quarters: 'kvartaler',
    second: 'sekund',
    seconds: 'sekunder',
    week: 'uke',
    weeks: 'uker',
    year: 'år',
    years: 'år'
  },
  join_or: {
    'a or b': '{{a}} eller {{b}}'
  },
  summary: {
    'Value required': 'Verdi må angis'
  }
};
export const nbNO = mergeLocaleObjects([], 'nb-NO', resources);
//# sourceMappingURL=nb-NO.js.map