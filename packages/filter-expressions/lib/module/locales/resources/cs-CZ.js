

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' hotovo',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'v minulosti',
    'from now': 'od této chvíle',
    'is any time': 'je kdykoliv',
    'is before': 'je před',
    'is day': 'je {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'je od {{dateTimeStart}} do {{dateTimeEnd}}',
    'is in month year': 'je v {{month}} {{year}}',
    'is in the last': 'je v minulém intervalu {{describeInterval}}',
    'is in the year year': 'je v roce {{year}}',
    'is interval ago': 'je před intervalem {{interval}}',
    'is intervalStart intervalType for intervalEnd': 'je {{intervalStart}} {{intervalType}} pro {{intervalEnd}}',
    'is not null': 'není prázdné',
    'is on dateTime': 'je {{dateTime}}',
    'is on or after': 'je přesně nebo po',
    'is previous unitLabel': 'je předchozí {{unitLabel}}',
    'is type unitLabel': 'je {{type}} {{unitLabel}}',
    next: 'další',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nyní',
    this: 'tato',
    'this startInterval to endInterval': 'tento {{startInterval}} do {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'jakákoliv hodnota'
  },
  describe_is_item: {
    'is not value': 'není {{value}}',
    'is value': 'je {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} do {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} od {{lat}}, {{lon}}',
    'is anywhere': 'je kdekoliv',
    'is not null': 'není prázdné',
    'is null': 'je prázdné',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'je v rozsahu {{range}}',
    'is not in range range': 'není v rozsahu {{range}}'
  },
  describe_string: {
    blank: 'prázdné',
    'contains value': 'obsahuje {{value}}',
    'does not contain value': 'neobsahuje {{value}}',
    'does not end with value': 'nemá na konci {{value}}',
    'does not start with value': 'nemá na začátku {{value}}',
    'ends with value': 'má na konci {{value}}',
    'starts with value': 'má na začátku {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'st.',
    kilometers: 'km',
    meters: 'm',
    miles: 'míle'
  },
  get_months: {
    April: 'Duben',
    August: 'Srpen',
    December: 'Prosinec',
    February: 'Únor',
    January: 'Leden',
    July: 'Červenec',
    June: 'Červen',
    March: 'Březen',
    May: 'Květen',
    November: 'Listopad',
    October: 'Říjen',
    September: 'Září'
  },
  get_unit_label: {
    'complete day': 'celý den',
    'complete days': 'celé dny',
    'complete fiscal quarter': 'celé fiskální čtvrtletí',
    'complete fiscal quarters': 'celá fiskální čtvrtletí',
    'complete fiscal year': 'celý fiskální rok',
    'complete fiscal years': 'celé fiskální roky',
    'complete hour': 'celá hodina',
    'complete hours': 'celé hodiny',
    'complete minute': 'celá minuta',
    'complete minutes': 'celé minuty',
    'complete month': 'celý měsíc',
    'complete months': 'celé měsíce',
    'complete quarter': 'celé čtvrtletí',
    'complete quarters': 'celá čtvrtletí',
    'complete second': 'celá sekunda',
    'complete seconds': 'celé sekundy',
    'complete week': 'celý týden',
    'complete weeks': 'celé týdny',
    'complete year': 'celý rok',
    'complete years': 'celé roky',
    day: 'den',
    days: 'dny/ů',
    'fiscal quarter': 'fiskální čtvrtletí',
    'fiscal quarters': 'fiskální čtvrtletí',
    'fiscal year': 'fiskální rok',
    'fiscal years': 'fiskální roky',
    hour: 'hodina',
    hours: 'hodin(y)',
    minute: 'minuta',
    minutes: 'minut(y)',
    month: 'měsíc',
    months: 'měsíce/ů',
    quarter: 'čtvrtletí',
    quarters: 'čtvrtletí',
    second: 'sekunda',
    seconds: 'sekund(y)',
    week: 'týden',
    weeks: 'týdny/ů',
    year: 'rok',
    years: 'roky/ů'
  },
  join_or: {
    'a or b': '{{a}} nebo {{b}}'
  },
  summary: {
    'Value required': 'Hodnota je povinná'
  }
};
export const csCZ = mergeLocaleObjects([], 'cs-CZ', resources);
//# sourceMappingURL=cs-CZ.js.map