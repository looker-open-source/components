/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/nl'
import type { I18nStateWithDates } from '../../utils'
import { nlNL as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Toevoegen',
    Remove: 'Verwijderen',
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
    'minutes ago': 'maanden geleden',
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
    'years from now': 'jaar vanaf nu',
  },
  BeforeAfter: {
    absolute: '(absoluut)',
    relative: '(relatief)',
  },
  Between: {
    AND: 'EN',
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
    years: 'jaren',
  },
  get_date_filter_options: {
    is: 'is',
    'is any time': 'is elk tijdstip',
    'is before': 'is voor',
    'is in range': 'ligt in het bereik',
    'is in the last': 'is in de laatste',
    'is in the month': 'is in de maand',
    'is in the year': 'is in het jaar',
    'is next': 'is volgende',
    'is not null': 'is geldig',
    'is null': 'is ongeldig',
    'is on or after': 'is op of na',
    'is on the day': 'is op de dag',
    'is previous': 'is vorige',
    'is this': 'is deze',
  },
  get_filter_options: {
    'matches advanced': 'komt overeen met (geavanceerd)',
  },
  get_location_filter_options: {
    Box: 'Vak',
    Circle: 'Cirkel',
    Location: 'Locatie',
    feet: 'feet',
    'is anywhere': 'is overal',
    'is not null': 'is geldig',
    'is null': 'is ongeldig',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'mijl',
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
    'is not null': 'is geldig',
    'is null': 'is ongeldig',
    'left exclusive': '(links-exclusief)',
    'right exclusive': '[rechts-exclusief]',
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
    Yesterday: 'Gisteren',
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
    'is not null': 'is geldig',
    'is null': 'is ongeldig',
    'starts with': 'begint met',
  },
  get_tier_filter_options: {
    is: 'is',
    'is any value': 'is elke waarde',
    'is not': 'is niet',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'komt overeen met een gebruikerskenmerk',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'elke waarde',
  },
  OperatorLabel: {
    AND: 'EN',
    OR: 'OF',
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
    'complete years': 'hele jaren',
  },
  RadioGroup: {
    'any value': 'elke waarde',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Alles verwijderen',
    Remove: 'Verwijderen',
    Toggle: 'Aan/uitzetten',
  },
  Relative: {
    ago: 'geleden',
    'from now': 'vanaf nu',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Kies een tijdsbestek',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Aangepast',
    Presets: 'Sjablonen',
  },
  RelativeTimeframePresets: {
    More: 'Meer',
  },
  use_filters_errors: {
    'Invalid value': 'Ongeldige waarde',
    'No value is set for your user attribute':
      'Er is geen waarde ingesteld voor uw gebruikerskenmerk',
    'Selection required': 'Selectie vereist',
  },
  use_option_filtering: {
    'No values': 'Geen waarden',
    'No values match': 'Geen overeenkomende waarden',
  },
  use_placeholder: {
    'any value': 'elke waarde',
  },
  use_suggestable: {
    'Error loading suggestions': 'Fout tijdens laden van suggesties',
  },
  use_validation_message: {
    'Value required': 'Waarde is vereist',
  },
}

export const nlNL: I18nStateWithDates = {
  dateLocale,
  locale: 'nl-NL',
  resources: { 'nl-NL': merge(resources, expressionLocale.resources['nl-NL']) },
}
