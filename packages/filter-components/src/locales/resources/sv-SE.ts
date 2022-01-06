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
import dateLocale from 'date-fns/locale/sv'
import type { I18nStateWithDates } from '../../utils'
import { svSE as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Lägg till',
    Remove: 'Ta bort',
  },
  BeforeAfter: {
    absolute: '(absolut)',
    relative: '(relativt)',
  },
  Between: {
    AND: 'OCH',
  },
  date_units: {
    days: 'dagar',
    'fiscal quarters': 'räkenskapskvartal',
    'fiscal years': 'räkenskapsår',
    hours: 'timmar',
    minutes: 'minuter',
    months: 'månader',
    quarters: 'kvartal',
    seconds: 'sekunder',
    weeks: 'veckor',
    years: 'år',
  },
  format_date: {
    firstDayOfWeek: '0',
  },
  get_date_filter_options: {
    is: 'är',
    'is any time': 'är när som helst',
    'is before': 'är före',
    'is in range': 'är i intervallet',
    'is in the last': 'är under det sista',
    'is in the month': 'är under månaden',
    'is in the year': 'är under året',
    'is next': 'är nästa',
    'is not null': 'är inte null',
    'is null': 'är null',
    'is on or after': 'är på eller efter',
    'is on the day': 'är på dagen',
    'is previous': 'är föregående',
    'is this': 'är detta',
  },
  get_filter_options: {
    'matches advanced': 'matchningar (avancerat)',
  },
  get_location_filter_options: {
    Box: 'Ruta',
    Circle: 'Cirkel',
    Location: 'Plats',
    feet: 'fot',
    'is anywhere': 'är var som helst',
    'is not null': 'är inte null',
    'is null': 'är null',
    kilometers: 'kilometer',
    meters: 'meter',
    miles: 'miles',
  },
  get_number_filter_options: {
    exclusive: '[exklusive]',
    inclusive: '[inklusive]',
    is: 'är',
    'is between': 'är mellan',
    'is greater': 'är >',
    'is greater equal': 'är >=',
    'is less': 'är <',
    'is less equal': 'är <=',
    'is not': 'är inte',
    'is not between': 'är inte mellan',
    'is not null': 'är inte null',
    'is null': 'är null',
    'left exclusive': '[vänster-exklusive)',
    'right exclusive': '[höger-exklusive)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Sista 14 dagarna',
    'Last 180 Days': 'Sista 180 dagarna',
    'Last 28 Days': 'Sista 28 dagarna',
    'Last 30 Days': 'Sista 30 dagarna',
    'Last 365 Days': 'Sista 365 dagarna',
    'Last 7 Days': 'Sista 7 dagarna',
    'Last 90 Days': 'Sista 90 dagarna',
    'Previous Month': 'Föregående månad',
    'Previous Quarter': 'Föregående kvartal',
    'Previous Week': 'Föregående vecka',
    'Previous Year': 'Föregående år',
    'This Month': 'Denna månad',
    'This Quarter': 'Detta kvartal',
    'This Week': 'Denna vecka',
    'This Year': 'Detta år',
    Today: 'I dag',
    'Year To Date': 'År till dags dato',
    Yesterday: 'I går',
  },
  get_string_filter_options: {
    contains: 'innehåller',
    'doesnt contain': 'innehåller inte',
    'doesnt end with': 'slutar inte med',
    'doesnt start with': 'börjar inte med',
    'ends with': 'slutar med',
    is: 'är',
    'is blank': 'är tom',
    'is not': 'är inte',
    'is not blank': 'är inte tom',
    'is not null': 'är inte null',
    'is null': 'är null',
    'starts with': 'börjar med',
  },
  get_tier_filter_options: {
    is: 'är',
    'is any value': 'är vilket värde som helst',
    'is not': 'är inte',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'matchar ett användarattribut',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'vilket värde som helst',
  },
  OperatorLabel: {
    AND: 'OCH',
    OR: 'ELLER',
  },
  past_units: {
    'complete days': 'hela dagar',
    'complete fiscal quarters': 'hela räkenskapskvartal',
    'complete fiscal years': 'hela räkenskapsår',
    'complete hours': 'hela timmar',
    'complete minutes': 'hela minuter',
    'complete months': 'hela månader',
    'complete quarters': 'hela kvartal',
    'complete seconds': 'hela sekunder',
    'complete weeks': 'hela veckor',
    'complete years': 'hela år',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Rensa alla',
    Remove: 'Ta bort',
    Toggle: 'Växla',
  },
  Relative: {
    ago: 'sedan',
    'from now': 'från nu',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Välj en tidsram',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Anpassat',
    Presets: 'Förinställningar',
  },
  RelativeTimeframePresets: {
    More: 'Mer',
  },
  use_option_filtering: {
    'No values': 'Inga värden',
    'No values match': 'Inga värden matchar',
  },
  use_placeholder: {
    'any value': 'vilket värde som helst',
  },
  use_suggestable: {
    'Error loading suggestions': 'Fel när förslag skulle läsas in',
  },
  use_validation_message: {
    'Value required': 'Värde krävs',
  },
}

export const svSE: I18nStateWithDates = {
  dateLocale,
  locale: 'sv-SE',
  resources: { 'sv-SE': merge(resources, expressionLocale.resources['sv-SE']) },
}
