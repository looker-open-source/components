import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/cs';
import { csCZ as expressionLocale } from '@looker/filter-expressions';
import { csCZ as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'Přidat',
    Remove: 'Odebrat'
  },
  before_after_units: {
    'days ago': 'dny/ů zpátky',
    'days from now': 'dny/ů od teď',
    'fiscal quarter from now': 'fiskální čtvrtletí od teď',
    'fiscal quarters ago': 'fiskální čtvrtletí zpátky',
    'fiscal years ago': 'fiskální roky zpátky',
    'fiscal years from now': 'fiskální roky od teď',
    'hours ago': 'hodin(y) zpátky',
    'hours from now': 'hodin(y) od teď',
    'minutes ago': 'minut(y) zpátky',
    'minutes from now': 'minut(y) od teď',
    'months ago': 'měsíce/ů zpátky',
    'months from now': 'měsíce/ů od teď',
    now: 'nyní',
    'quarters ago': 'čtvrtletí zpátky',
    'quarters from now': 'čtvrtletí od teď',
    'seconds ago': 'sekund(y) zpátky',
    'seconds from now': 'sekund(y) od teď',
    'weeks ago': 'týdny/ů zpátky',
    'weeks from now': 'týdny/ů od teď',
    'years ago': 'roky/ů zpátky',
    'years from now': 'roky/ů od teď'
  },
  BeforeAfter: {
    absolute: '(absolutně)',
    relative: '(relativně)'
  },
  Between: {
    AND: 'A'
  },
  date_units: {
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
  DateRange: {
    'until (before)': 'do (před)'
  },
  get_date_filter_options: {
    is: 'je',
    'is any time': 'je kdykoliv',
    'is before': 'je před',
    'is in range': 'je v rozsahu',
    'is in the last': 'je v minulém intervalu',
    'is in the month': 'je v měsíci',
    'is in the year': 'je v roce',
    'is next': 'je další',
    'is not null': 'není prázdné',
    'is null': 'je prázdné',
    'is on or after': 'je přesně nebo po',
    'is on the day': 'je přesně v daný den',
    'is previous': 'je předchozí',
    'is this': 'je tento'
  },
  get_filter_options: {
    'matches advanced': 'shoduje se (pokročilé)'
  },
  get_location_filter_options: {
    Box: 'Box',
    Circle: 'Kruh',
    Location: 'Poloha',
    feet: 'st.',
    'is anywhere': 'je kdekoliv',
    'is not null': 'není prázdné',
    'is null': 'je prázdné',
    kilometers: 'km',
    meters: 'm',
    miles: 'míle'
  },
  get_number_filter_options: {
    exclusive: '(vyjma)',
    inclusive: '[včetně]',
    is: 'je',
    'is between': 'je mezi',
    'is greater': 'je >',
    'is greater equal': 'je >=',
    'is less': 'je <',
    'is less equal': 'je <=',
    'is not': 'není',
    'is not between': 'není mezi',
    'is not null': 'není prázdné',
    'is null': 'je prázdné',
    'left exclusive': '(vyjma hodnoty vlevo]',
    'right exclusive': '[vyjma hodnoty vpravo)'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Posledních 14 dnů',
    'Last 180 Days': 'Posledních 180 dnů',
    'Last 28 Days': 'Posledních 28 dnů',
    'Last 30 Days': 'Posledních 30 dnů',
    'Last 365 Days': 'Posledních 365 dnů',
    'Last 7 Days': 'Posledních 7 dnů',
    'Last 90 Days': 'Posledních 90 dnů',
    'Previous Month': 'Minulý měsíc',
    'Previous Quarter': 'Minulé čtvrtletí',
    'Previous Week': 'Minulý týden',
    'Previous Year': 'Minulý rok',
    'This Month': 'Tento měsíc',
    'This Quarter': 'Toto čtvrtletí',
    'This Week': 'Tento týden',
    'This Year': 'Tento rok',
    Today: 'Dnes',
    'Year To Date': 'Od počátku roku',
    Yesterday: 'Včera'
  },
  get_string_filter_options: {
    contains: 'obsahuje',
    'doesnt contain': 'neobsahuje',
    'doesnt end with': 'nemá na konci',
    'doesnt start with': 'nemá na začátku',
    'ends with': 'má na konci',
    is: 'je',
    'is blank': 'je prázdné',
    'is not': 'není',
    'is not blank': 'není prázdné',
    'is not null': 'není prázdné',
    'is null': 'je prázdné',
    'starts with': 'má na začátku'
  },
  get_tier_filter_options: {
    is: 'je',
    'is any value': 'má jakoukoliv hodnotu',
    'is not': 'není'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'shoduje se s atributem uživatele'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'jakákoliv hodnota'
  },
  OperatorLabel: {
    AND: 'A',
    OR: 'NEBO'
  },
  past_units: {
    'complete days': 'celé dny',
    'complete fiscal quarters': 'celá fiskální čtvrtletí',
    'complete fiscal years': 'celé fiskální roky',
    'complete hours': 'celé hodiny',
    'complete minutes': 'celé minuty',
    'complete months': 'celé měsíce',
    'complete quarters': 'celá čtvrtletí',
    'complete seconds': 'celé sekundy',
    'complete weeks': 'celé týdny',
    'complete years': 'celé roky'
  },
  RadioGroup: {
    'any value': 'jakákoliv hodnota'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Vymazat vše',
    Remove: 'Odebrat',
    Toggle: 'Přepnout'
  },
  Relative: {
    ago: 'v minulosti',
    'from now': 'od této chvíle'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Vybrat časový rámec'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Vlastní',
    Presets: 'Přednastavené hodnoty'
  },
  RelativeTimeframePresets: {
    More: 'Více'
  },
  use_filters_errors: {
    'Invalid value': 'Neplatná hodnota',
    'No value is set for your user attribute': 'Pro váš atribut uživatele není nastavena žádná hodnota',
    'Selection required': 'Je požadován výběr'
  },
  use_option_filtering: {
    'No values': 'Žádné hodnoty',
    'No values match': 'Žádné hodnoty se neshodují'
  },
  use_placeholder: {
    'any value': 'jakákoliv hodnota'
  },
  use_suggestable: {
    'Error loading suggestions': 'Chyba při načítání návrhů'
  },
  use_validation_message: {
    'Value required': 'Hodnota je povinná'
  }
};
export const csCZ = {
  dateLocale,
  locale: 'cs-CZ',
  resources: {
    'cs-CZ': merge({}, resources, expressionLocale.resources['cs-CZ'], componentsLocale.resources['cs-CZ'])
  }
};
//# sourceMappingURL=cs-CZ.js.map