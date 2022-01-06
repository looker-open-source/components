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
import dateLocale from 'date-fns/locale/fi'
import type { I18nStateWithDates } from '../../utils'
import { fiFI as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Lisää',
    Remove: 'Poista',
  },
  BeforeAfter: {
    absolute: '(absoluuttinen)',
    relative: '(relatiivinen)',
  },
  Between: {
    AND: 'JA',
  },
  date_units: {
    days: 'päivää',
    'fiscal quarters': 'tilikauden vuosineljännestä',
    'fiscal years': 'tilivuotta',
    hours: 'tuntia',
    minutes: 'minuuttia',
    months: 'kuukautta',
    quarters: 'vuosineljännestä',
    seconds: 'sekuntia',
    weeks: 'viikkoa',
    years: 'vuotta',
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
    'is this': 'on tämä',
  },
  get_filter_options: {
    'matches advanced': 'osumat (lisäasetus)',
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
    miles: 'mailia',
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
    'right exclusive': '[oikea-poissulkeva)',
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
    Yesterday: 'Eilen',
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
    'starts with': 'alkaa kohteella',
  },
  get_tier_filter_options: {
    is: 'on',
    'is any value': 'on mikä tahansa arvo',
    'is not': 'ei ole',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'vastaa käyttäjäattribuuttia',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'mikä tahansa arvo',
  },
  OperatorLabel: {
    AND: 'JA',
    OR: 'TAI',
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
    'complete years': 'kokonaista vuotta',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Tyhjennä kaikki',
    Remove: 'Poista',
    Toggle: 'Vaihda',
  },
  Relative: {
    ago: 'sitten',
    'from now': 'tästä hetkestä',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Valitse ajanjakso',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Mukautettu',
    Presets: 'Esiasetukset',
  },
  RelativeTimeframePresets: {
    More: 'Lisää',
  },
  use_option_filtering: {
    'No values': 'Ei arvoja',
    'No values match': 'Arvot eivät täsmää',
  },
  use_placeholder: {
    'any value': 'mikä tahansa arvo',
  },
  use_suggestable: {
    'Error loading suggestions': 'Virhe ehdotusten lataamisessa',
  },
  use_validation_message: {
    'Value required': 'Arvo tarvitaan',
  },
}

export const fiFI: I18nStateWithDates = {
  dateLocale,
  locale: 'fi-FI',
  resources: { 'fi-FI': merge(resources, expressionLocale.resources['fi-FI']) },
}
