import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/fi';
import { fiFI as expressionLocale } from '@looker/filter-expressions';
import { fiFI as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'Lisää',
    Remove: 'Poista'
  },
  before_after_units: {
    'days ago': 'päivää sitten',
    'days from now': 'päivää tästä hetkestä',
    'fiscal quarter from now': 'tilikauden vuosineljännes tästä hetkestä',
    'fiscal quarters ago': 'tilikauden vuosineljännestä sitten',
    'fiscal years ago': 'tilivuotta sitten',
    'fiscal years from now': 'tilivuotta tästä hetkestä',
    'hours ago': 'tuntia sitten',
    'hours from now': 'tuntia tästä hetkestä',
    'minutes ago': 'minuuttia sitten',
    'minutes from now': 'minuuttia tästä hetkestä',
    'months ago': 'kuukautta sitten',
    'months from now': 'kuukautta tästä hetkestä',
    now: 'nyt',
    'quarters ago': 'vuosineljännestä sitten',
    'quarters from now': 'vuosineljännestä tästä hetkestä',
    'seconds ago': 'sekuntia sitten',
    'seconds from now': 'sekuntia tästä hetkestä',
    'weeks ago': 'viikkoa sitten',
    'weeks from now': 'viikkoa tästä hetkestä',
    'years ago': 'vuotta sitten',
    'years from now': 'vuotta tästä hetkestä'
  },
  BeforeAfter: {
    absolute: '(absoluuttinen)',
    relative: '(relatiivinen)'
  },
  Between: {
    AND: 'JA'
  },
  date_units: {
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
  DateRange: {
    'until (before)': 'ennen kuin (ennen)'
  },
  get_date_filter_options: {
    is: 'on',
    'is any time': 'on milloin tahansa',
    'is before': 'on ennen ajankohtaa',
    'is in range': 'on alueella',
    'is in the last': 'on viimeisten',
    'is in the month': 'on kuussa',
    'is in the year': 'on vuonna',
    'is next': 'on seuraava',
    'is not null': 'ei ole nolla',
    'is null': 'on nolla',
    'is on or after': 'on ajankohtana tai jälkeen ajankohdan',
    'is on the day': 'on päivänä',
    'is previous': 'on aiempi',
    'is this': 'on tämä'
  },
  get_filter_options: {
    'matches advanced': 'osumat (lisäasetus)'
  },
  get_location_filter_options: {
    Box: 'Laatikko',
    Circle: 'Ympyrä',
    Location: 'Sijainti',
    feet: 'jalkaa',
    'is anywhere': 'on missä tahansa',
    'is not null': 'ei ole nolla',
    'is null': 'on nolla',
    kilometers: 'kilometriä',
    meters: 'metriä',
    miles: 'mailia'
  },
  get_number_filter_options: {
    exclusive: '(poissulkeva)',
    inclusive: '[sisältävä]',
    is: 'on',
    'is between': 'on välillä',
    'is greater': 'on >',
    'is greater equal': 'on >=',
    'is less': 'on <',
    'is less equal': 'on <=',
    'is not': 'ei ole',
    'is not between': 'ei ole välillä',
    'is not null': 'ei ole nolla',
    'is null': 'on nolla',
    'left exclusive': '(vasen-poissulkeva]',
    'right exclusive': '[oikea-poissulkeva)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Viimeiset 14 päivää',
    'Last 180 Days': 'Viimeiset 180 päivää',
    'Last 28 Days': 'Viimeiset 28 päivää',
    'Last 30 Days': 'Viimeiset 30 päivää',
    'Last 365 Days': 'Viimeiset 365 päivää',
    'Last 7 Days': 'Viimeiset 7 päivää',
    'Last 90 Days': 'Viimeiset 90 päivää',
    'Previous Month': 'Edellinen kuukausi',
    'Previous Quarter': 'Edellinen vuosineljännes',
    'Previous Week': 'Edellinen viikko',
    'Previous Year': 'Edellinen vuosi',
    'This Month': 'Tämä kuukausi',
    'This Quarter': 'Tämä vuosineljännes',
    'This Week': 'Tämä viikko',
    'This Year': 'Tämä vuosi',
    Today: 'Tänään',
    'Year To Date': 'Vuosi tähän päivään',
    Yesterday: 'Eilen'
  },
  get_string_filter_options: {
    contains: 'sisältää kohteen',
    'doesnt contain': 'ei sisällä kohdetta',
    'doesnt end with': 'ei lopu kohteella',
    'doesnt start with': 'ei ala kohteella',
    'ends with': 'loppuu kohteella',
    is: 'on',
    'is blank': 'on tyhjä',
    'is not': 'ei ole',
    'is not blank': 'ei ole tyhjä',
    'is not null': 'ei ole nolla',
    'is null': 'on nolla',
    'starts with': 'alkaa kohteella'
  },
  get_tier_filter_options: {
    is: 'on',
    'is any value': 'on mikä tahansa arvo',
    'is not': 'ei ole'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'vastaa käyttäjäattribuuttia'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'mikä tahansa arvo'
  },
  OperatorLabel: {
    AND: 'JA',
    OR: 'TAI'
  },
  past_units: {
    'complete days': 'kokonaista päivää',
    'complete fiscal quarters': 'kokonaista tilikauden vuosineljännestä',
    'complete fiscal years': 'kokonaista tilivuotta',
    'complete hours': 'kokonaista tuntia',
    'complete minutes': 'kokonaista minuuttia',
    'complete months': 'kokonaista kuukautta',
    'complete quarters': 'kokonaista vuosineljännestä',
    'complete seconds': 'kokonaista sekuntia',
    'complete weeks': 'kokonaista viikkoa',
    'complete years': 'kokonaista vuotta'
  },
  RadioGroup: {
    'any value': 'mikä tahansa arvo'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Tyhjennä kaikki',
    Remove: 'Poista',
    Toggle: 'Vaihda'
  },
  Relative: {
    ago: 'sitten',
    'from now': 'tästä hetkestä'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Valitse ajanjakso'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Mukautettu',
    Presets: 'Esiasetukset'
  },
  RelativeTimeframePresets: {
    More: 'Lisää'
  },
  use_filters_errors: {
    'Invalid value': 'Virheellinen arvo',
    'No value is set for your user attribute': 'Käyttäjäattribuutille ei ole asetettu arvoa',
    'Selection required': 'Valinta tarvitaan'
  },
  use_option_filtering: {
    'No values': 'Ei arvoja',
    'No values match': 'Arvot eivät täsmää'
  },
  use_placeholder: {
    'any value': 'mikä tahansa arvo'
  },
  use_suggestable: {
    'Error loading suggestions': 'Virhe ehdotusten lataamisessa'
  },
  use_validation_message: {
    'Value required': 'Arvo tarvitaan'
  }
};
export const fiFI = {
  dateLocale,
  locale: 'fi-FI',
  resources: {
    'fi-FI': merge({}, resources, expressionLocale.resources['fi-FI'], componentsLocale.resources['fi-FI'])
  }
};
//# sourceMappingURL=fi-FI.js.map