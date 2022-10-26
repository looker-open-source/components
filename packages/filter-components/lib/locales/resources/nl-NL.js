import merge from 'lodash/merge';
import dateLocale from 'date-fns/locale/nl';
import { nlNL as expressionLocale } from '@looker/filter-expressions';
import { nlNL as componentsLocale } from '@looker/components';
const resources = {
  AddRemoveButtons: {
    Add: 'Toevoegen',
    Remove: 'Verwijderen'
  },
  before_after_units: {
    'days ago': 'dagen geleden',
    'days from now': 'dagen vanaf nu',
    'fiscal quarter from now': 'fiscaal kwartaal vanaf nu',
    'fiscal quarters ago': 'fiscale kwartalen geleden',
    'fiscal years ago': 'fiscale jaren geleden',
    'fiscal years from now': 'fiscale jaren vanaf nu',
    'hours ago': 'uur geleden',
    'hours from now': 'uur vanaf nu',
    'minutes ago': 'minuten geleden',
    'minutes from now': 'minuten vanaf nu',
    'months ago': 'maanden geleden',
    'months from now': 'maanden vanaf nu',
    now: 'nu',
    'quarters ago': 'kwartalen geleden',
    'quarters from now': 'kwartalen vanaf nu',
    'seconds ago': 'seconden geleden',
    'seconds from now': 'seconden vanaf nu',
    'weeks ago': 'weken geleden',
    'weeks from now': 'weken vanaf nu',
    'years ago': 'jaar geleden',
    'years from now': 'jaar vanaf nu'
  },
  BeforeAfter: {
    absolute: '(absoluut)',
    relative: '(relatief)'
  },
  Between: {
    AND: 'EN'
  },
  date_units: {
    day: 'dag',
    days: 'dagen',
    'fiscal quarter': 'fiscaal kwartaal',
    'fiscal quarters': 'fiscale kwartalen',
    'fiscal year': 'fiscaal jaar',
    'fiscal years': 'fiscale jaren',
    hour: 'uur',
    hours: 'uren',
    minute: 'minuut',
    minutes: 'minuten',
    month: 'maand',
    months: 'maanden',
    quarter: 'kwartaal',
    quarters: 'kwartalen',
    second: 'seconde',
    seconds: 'seconden',
    week: 'week',
    weeks: 'weken',
    year: 'jaar',
    years: 'jaren'
  },
  DateRange: {
    'until (before)': 'tot (voor)'
  },
  get_date_filter_options: {
    is: 'is',
    'is any time': 'alles',
    'is before': 'vóór datum',
    'is in range': 'datumbereik (van/tot)',
    'is in the last': 'in de afgelopen',
    'is in the month': 'specifieke maand',
    'is in the year': 'specifiek jaar',
    'is next': 'volgende',
    'is not null': 'geldige datums',
    'is null': 'ongeldige datums',
    'is on or after': 'op of na datum',
    'is on the day': 'specifieke datum',
    'is previous': 'vorige',
    'is this': 'deze'
  },
  get_filter_options: {
    'matches advanced': 'komt overeen met (geavanceerd)'
  },
  get_location_filter_options: {
    Box: 'Vak',
    Circle: 'Cirkel',
    Location: 'Locatie',
    feet: 'feet',
    'is anywhere': 'overal',
    'is not null': 'geldige datums',
    'is null': 'ongeldige datums',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'mijl'
  },
  get_number_filter_options: {
    exclusive: '(exclusief)',
    inclusive: '[inclusief]',
    is: 'is',
    'is between': 'ligt tussen',
    'is greater': 'is >',
    'is greater equal': 'is >=',
    'is less': 'is <',
    'is less equal': 'is <=',
    'is not': 'is niet',
    'is not between': 'ligt niet tussen',
    'is not null': 'geldige datums',
    'is null': 'ongeldige datums',
    'left exclusive': '(links-exclusief)',
    'right exclusive': '[rechts-exclusief]'
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Laatste 14 dagen',
    'Last 180 Days': 'Laatste 180 dagen',
    'Last 28 Days': 'Laatste 28 dagen',
    'Last 30 Days': 'Laatste 30 dagen',
    'Last 365 Days': 'Laatste 365 dagen',
    'Last 7 Days': 'Laatste 7 dagen',
    'Last 90 Days': 'Laatste 90 dagen',
    'Previous Month': 'Vorige maand',
    'Previous Quarter': 'Vorig kwartaal',
    'Previous Week': 'Vorige week',
    'Previous Year': 'Vorig jaar',
    'This Month': 'Deze maand',
    'This Quarter': 'Dit kwartaal',
    'This Week': 'Deze week',
    'This Year': 'Dit jaar',
    Today: 'Vandaag',
    'Year To Date': 'Jaar tot heden',
    Yesterday: 'Gisteren'
  },
  get_string_filter_options: {
    contains: 'bevat',
    'doesnt contain': 'bevat geen',
    'doesnt end with': 'eindigt niet met',
    'doesnt start with': 'begint niet met',
    'ends with': 'eindigt met',
    is: 'is',
    'is blank': 'is leeg',
    'is not': 'is niet',
    'is not blank': 'is niet leeg',
    'is not null': 'geldige datums',
    'is null': 'ongeldige datums',
    'starts with': 'begint met'
  },
  get_tier_filter_options: {
    is: 'is',
    'is any value': 'alle waarden',
    'is not': 'is niet'
  },
  get_user_attribute_option: {
    'matches a user attribute': 'komt overeen met een gebruikerskenmerk'
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: ''
  },
  NumberFilter: {
    'any value': 'elke waarde'
  },
  OperatorLabel: {
    AND: 'EN',
    OR: 'OF'
  },
  past_units: {
    'complete days': 'hele dagen',
    'complete fiscal quarters': 'hele fiscale kwartalen',
    'complete fiscal years': 'hele fiscale jaren',
    'complete hours': 'hele uren',
    'complete minutes': 'hele minuten',
    'complete months': 'hele maanden',
    'complete quarters': 'hele kwartalen',
    'complete seconds': 'hele seconden',
    'complete weeks': 'hele weken',
    'complete years': 'hele jaren'
  },
  RadioGroup: {
    'any value': 'elke waarde'
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Alles wissen',
    Remove: 'Verwijderen',
    Toggle: 'Aan/uitzetten'
  },
  Relative: {
    ago: 'geleden',
    'from now': 'vanaf nu'
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Kies een tijdsbestek'
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Aangepast',
    Presets: 'Sjablonen'
  },
  RelativeTimeframePresets: {
    More: 'Meer'
  },
  use_filters_errors: {
    'Invalid value': 'Ongeldige waarde',
    'No value is set for your user attribute': 'Er is geen waarde ingesteld voor uw gebruikerskenmerk',
    'Selection required': 'Selectie vereist'
  },
  use_option_filtering: {
    'No values': 'Geen waarden',
    'No values match': 'Geen overeenkomende waarden'
  },
  use_placeholder: {
    'any value': 'elke waarde'
  },
  use_suggestable: {
    'Error loading suggestions': 'Fout tijdens laden van suggesties'
  },
  use_validation_message: {
    'Value required': 'Waarde is vereist'
  }
};
export const nlNL = {
  dateLocale,
  locale: 'nl-NL',
  resources: {
    'nl-NL': merge({}, resources, expressionLocale.resources['nl-NL'], componentsLocale.resources['nl-NL'])
  }
};
//# sourceMappingURL=nl-NL.js.map