

import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  describe_date: {
    ' complete': ' valmis',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'sitten',
    'from now': 'tästä hetkestä',
    'is any time': 'on milloin tahansa',
    'is before': 'on ennen ajankohtaa',
    'is day': 'on {{day}}',
    'is from dateTimeStart until dateTimeEnd': 'on ajankohdasta {{dateTimeStart}} ajankohtaan {{dateTimeEnd}}',
    'is in month year': 'on ajankohdassa {{month}} {{year}}',
    'is in the last': 'on viimeisten {{describeInterval}} joukossa',
    'is in the year year': 'on vuonna {{year}}',
    'is interval ago': 'on {{interval}} sitten',
    'is intervalStart intervalType for intervalEnd': 'on {{intervalStart}} {{intervalType}} kohteelle {{intervalEnd}}',
    'is not null': 'ei ole nolla',
    'is on dateTime': 'on ajankohtana {{dateTime}}',
    'is on or after': 'on ajankohtana tai jälkeen ajankohdan',
    'is previous unitLabel': 'on aiempi {{unitLabel}}',
    'is type unitLabel': 'on {{type}} {{unitLabel}}',
    next: 'seuraava',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} nyt',
    this: 'tämä',
    'this startInterval to endInterval': 'tämä {{startInterval}}–{{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}'
  },
  describe_is_any_value: {
    'any value': 'mikä tahansa arvo'
  },
  describe_is_item: {
    'is not value': 'ei ole {{value}}',
    'is value': 'on {{value}}'
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} kohteeseen {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} kohteesta {{lat}}, {{lon}}',
    'is anywhere': 'on missä tahansa',
    'is not null': 'ei ole nolla',
    'is null': 'on nolla',
    'lat degrees north': '{{lat}}°N',
    'lat degrees south': '{{lat}}°S',
    'lon degrees east': '{{lon}}°E',
    'lon degrees west': '{{lon}}°W'
  },
  describe_number: {
    'is in range range': 'on alueella {{range}}',
    'is not in range range': 'ei ole alueella {{range}}'
  },
  describe_string: {
    blank: 'tyhjä',
    'contains value': 'sisältää kohteen {{value}}',
    'does not contain value': 'ei sisällä kohdetta {{value}}',
    'does not end with value': 'ei lopu kohteella {{value}}',
    'does not start with value': 'ei ala kohteella {{value}}',
    'ends with value': 'loppuu kohteella {{value}}',
    'starts with value': 'alkaa kohteella {{value}}'
  },
  get_distance_unit_labels: {
    feet: 'jalkaa',
    kilometers: 'kilometriä',
    meters: 'metriä',
    miles: 'mailia'
  },
  get_months: {
    April: 'Huhtikuu',
    August: 'Elokuu',
    December: 'Joulukuu',
    February: 'Helmikuu',
    January: 'Tammikuu',
    July: 'Heinäkuu',
    June: 'Kesäkuu',
    March: 'Maaliskuu',
    May: 'Touko',
    November: 'Marraskuu',
    October: 'Lokakuu',
    September: 'Syyskuu'
  },
  get_unit_label: {
    'complete day': 'kokonainen päivä',
    'complete days': 'kokonaista päivää',
    'complete fiscal quarter': 'kokonainen tilikauden vuosineljännes',
    'complete fiscal quarters': 'kokonaista tilikauden vuosineljännestä',
    'complete fiscal year': 'kokonainen tilivuosi',
    'complete fiscal years': 'kokonaista tilivuotta',
    'complete hour': 'kokonainen tunti',
    'complete hours': 'kokonaista tuntia',
    'complete minute': 'kokonainen minuutti',
    'complete minutes': 'kokonaista minuuttia',
    'complete month': 'kokonainen kuukausi',
    'complete months': 'kokonaista kuukautta',
    'complete quarter': 'kokonainen vuosineljännes',
    'complete quarters': 'kokonaista vuosineljännestä',
    'complete second': 'kokonainen sekunti',
    'complete seconds': 'kokonaista sekuntia',
    'complete week': 'kokonainen viikko',
    'complete weeks': 'kokonaista viikkoa',
    'complete year': 'kokonainen vuosi',
    'complete years': 'kokonaista vuotta',
    day: 'päivä',
    days: 'päivää',
    'fiscal quarter': 'tilikauden vuosineljännes',
    'fiscal quarters': 'tilikauden vuosineljännestä',
    'fiscal year': 'tilivuosi',
    'fiscal years': 'tilivuotta',
    hour: 'tunti',
    hours: 'tuntia',
    minute: 'minuutti',
    minutes: 'minuuttia',
    month: 'kuukausi',
    months: 'kuukautta',
    quarter: 'vuosineljännes',
    quarters: 'vuosineljännestä',
    second: 'sekunti',
    seconds: 'sekuntia',
    week: 'viikko',
    weeks: 'viikkoa',
    year: 'vuosi',
    years: 'vuotta'
  },
  join_or: {
    'a or b': '{{a}} tai {{b}}'
  },
  summary: {
    'Value required': 'Arvo tarvitaan'
  }
};
export const fiFI = mergeLocaleObjects([], 'fi-FI', resources);
//# sourceMappingURL=fi-FI.js.map