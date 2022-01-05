/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import dateLocale from 'date-fns/locale/nb'
import type { I18nStateWithDates } from '../../utils'
import { nbNO as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Legg til',
    Remove: 'Fjern',
  },
  BeforeAfter: {
    absolute: '(absolutt)',
    relative: '(relativ)',
  },
  Between: {
    AND: 'OG',
  },
  date_units: {
    days: 'dager',
    'fiscal quarters': 'regnskapskvartaler',
    'fiscal years': 'regnskapsår',
    hours: 'timer',
    minutes: 'minutter',
    months: 'måneder',
    quarters: 'kvartaler',
    seconds: 'sekunder',
    weeks: 'uker',
    years: 'år',
  },
  get_date_filter_options: {
    is: 'er',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is in range': 'er i området',
    'is in the last': 'er i den forrige',
    'is in the month': 'er i måneden',
    'is in the year': 'er i året',
    'is next': 'er neste',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'is on or after': 'er på eller etter',
    'is on the day': 'er på dagen',
    'is previous': 'er forrige',
    'is this': 'er denne',
  },
  get_filter_options: {
    'matches advanced': 'søketreff (avansert)',
  },
  get_location_filter_options: {
    Box: 'Boks',
    Circle: 'Sirkel',
    Location: 'Lokasjon',
    feet: 'fot (lengdeenhet)',
    'is anywhere': 'er hvor som helst',
    'is not null': 'er ikke null',
    'is null': 'er null',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'mil',
  },
  get_number_filter_options: {
    exclusive: '(eksklusiv)',
    inclusive: '[inklusiv]',
    is: 'er',
    'is between': 'er mellom',
    'is greater': 'er >',
    'is greater equal': 'er >=',
    'is less': 'er <',
    'is less equal': 'er <=',
    'is not': 'er ikke',
    'is not between': 'er ikke mellom',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'left exclusive': '(venstre-eksklusiv]',
    'right exclusive': '[høyre-eksklusiv)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'De siste 14 dagene',
    'Last 180 Days': 'De siste 180 dagene',
    'Last 28 Days': 'De siste 28 dagene',
    'Last 30 Days': 'De siste 30 dagene',
    'Last 365 Days': 'De siste 365 dagene',
    'Last 7 Days': 'De siste 7 dagene',
    'Last 90 Days': 'De siste 90 dagene',
    'Previous Month': 'Forrige måned',
    'Previous Quarter': 'Forrige kvartal',
    'Previous Week': 'Forrige uke',
    'Previous Year': 'I fjor',
    'This Month': 'Denne måneden',
    'This Quarter': 'Dette kvartalet',
    'This Week': 'Denne uken',
    'This Year': 'I år',
    Today: 'I dag',
    'Year To Date': 'Til dags dato',
    Yesterday: 'I går',
  },
  get_string_filter_options: {
    contains: 'inneholder',
    'doesnt contain': 'inneholder ikke',
    'doesnt end with': 'slutter ikke med',
    'doesnt start with': 'starter ikke med',
    'ends with': 'slutter med',
    is: 'er',
    'is blank': 'er tom',
    'is not': 'er ikke',
    'is not blank': 'er ikke tom',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'starts with': 'starter med',
  },
  get_tier_filter_options: {
    is: 'er',
    'is any value': 'er enhver verdi',
    'is not': 'er ikke',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'samsvarer med en brukerattributt',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'enhver verdi',
  },
  OperatorLabel: {
    AND: 'OG',
    OR: 'ELLER',
  },
  past_units: {
    'complete days': 'hele dager',
    'complete fiscal quarters': 'hele regnskapskvartaler',
    'complete fiscal years': 'hele regnskapsår',
    'complete hours': 'hele timer',
    'complete minutes': 'hele minutter',
    'complete months': 'hele måneder',
    'complete quarters': 'hele kvartaler',
    'complete seconds': 'hele sekunder',
    'complete weeks': 'hele uker',
    'complete years': 'hele år',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Fjern alle',
    Remove: 'Fjern',
    Toggle: 'Aktiver/deaktiver',
  },
  Relative: {
    ago: 'siden',
    'from now': 'fra nå',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Velg en tidsrom',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Egendefinert',
    Presets: 'Forhåndsinnstillinger',
  },
  RelativeTimeframePresets: {
    More: 'Mer',
  },
  use_option_filtering: {
    'No values': 'Ingen verdier',
    'No values match': 'Ingen verdier matcher',
  },
  use_placeholder: {
    'any value': 'enhver verdi',
  },
  use_suggestable: {
    'Error loading suggestions': 'Feil under lasting av forslag',
  },
  use_validation_message: {
    'Value required': 'Verdi må angis',
  },
}

export const nbNO: I18nStateWithDates = {
  dateLocale,
  locale: 'nb-NO',
  resources: { 'nb-NO': merge(resources, expressionLocale.resources['nb-NO']) },
}
