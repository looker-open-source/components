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
import dateLocale from 'date-fns/locale/da'
import type { I18nStateWithDates } from '../../utils'
import { daDK as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Tilføj',
    Remove: 'Fjern',
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativ)',
  },
  Between: {
    AND: 'OG',
  },
  date_units: {
    days: 'dage',
    'fiscal quarters': 'regnskabskvartaler',
    'fiscal years': 'regnskabsår',
    hours: 'timer',
    minutes: 'minutter',
    months: 'måneder',
    quarters: 'kvartaler',
    seconds: 'sekunder',
    weeks: 'uger',
    years: 'år',
  },
  get_date_filter_options: {
    is: 'er',
    'is any time': 'er når som helst',
    'is before': 'er før',
    'is in range': 'er i område',
    'is in the last': 'er inden for den/det seneste',
    'is in the month': 'er i måneden',
    'is in the year': 'er i året',
    'is next': 'er næste',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'is on or after': 'er på eller efter',
    'is on the day': 'er på dagen',
    'is previous': 'er forrige',
    'is this': 'er dette',
  },
  get_filter_options: {
    'matches advanced': 'resultater (avanceret)',
  },
  get_location_filter_options: {
    Box: 'Boks',
    Circle: 'Cirkel',
    Location: 'Placering',
    feet: 'fod',
    'is anywhere': 'er hvor som helst',
    'is not null': 'er ikke null',
    'is null': 'er null',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles',
  },
  get_number_filter_options: {
    exclusive: '(eksklusive)',
    inclusive: '[inklusive]',
    is: 'er',
    'is between': 'er mellem',
    'is greater': 'er >',
    'is greater equal': 'er >=',
    'is less': 'er <',
    'is less equal': 'er <=',
    'is not': 'er ikke',
    'is not between': 'er ikke mellem',
    'is not null': 'er ikke null',
    'is null': 'er null',
    'left exclusive': '(venstre-eksklusive]',
    'right exclusive': '[højre-eksklusive)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'De seneste 14 dage',
    'Last 180 Days': 'De seneste 180 dage',
    'Last 28 Days': 'De seneste 28 dage',
    'Last 30 Days': 'De seneste 30 dage',
    'Last 365 Days': 'De seneste 365 dage',
    'Last 7 Days': 'De seneste 7 dage',
    'Last 90 Days': 'De seneste 90 dage',
    'Previous Month': 'Forrige måned',
    'Previous Quarter': 'Forrige kvartal',
    'Previous Week': 'Forrige uge',
    'Previous Year': 'Forrige år',
    'This Month': 'Denne måned',
    'This Quarter': 'Dette kvartal',
    'This Week': 'Denne uge',
    'This Year': 'Dette år',
    Today: 'I dag',
    'Year To Date': 'År til dato',
    Yesterday: 'I går',
  },
  get_string_filter_options: {
    contains: 'indeholder',
    'doesnt contain': 'indeholder ikke',
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
    'is any value': 'er enhver værdi',
    'is not': 'er ikke',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matcher en brugerattribut',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'enhver værdi',
  },
  OperatorLabel: {
    AND: 'OG',
    OR: 'ELLER',
  },
  past_units: {
    'complete days': 'hele dage',
    'complete fiscal quarters': 'hele regnskabskvartaler',
    'complete fiscal years': 'hele regnskabsår',
    'complete hours': 'hele timer',
    'complete minutes': 'hele minutter',
    'complete months': 'hele måneder',
    'complete quarters': 'hele kvartaler',
    'complete seconds': 'hele sekunder',
    'complete weeks': 'hele uger',
    'complete years': 'hele år',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Ryd alt',
    Remove: 'Fjern',
    Toggle: 'Slå til/fra',
  },
  Relative: {
    ago: 'siden',
    'from now': 'fra nu',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Vælg en tidsramme',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Tilpasning',
    Presets: 'Forudindstillinger',
  },
  RelativeTimeframePresets: {
    More: 'Mere',
  },
  use_option_filtering: {
    'No values': 'Ingen værdier',
    'No values match': 'Ingen matchende værdier',
  },
  use_placeholder: {
    'any value': 'enhver værdi',
  },
  use_suggestable: {
    'Error loading suggestions': 'Fejl under indlæsning af forslag',
  },
  use_validation_message: {
    'Value required': 'Værdi kræves',
  },
}

export const daDK: I18nStateWithDates = {
  dateLocale,
  locale: 'da-DK',
  resources: { 'da-DK': merge(resources, expressionLocale.resources['da-DK']) },
}
