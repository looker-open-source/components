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
import dateLocale from 'date-fns/locale/lt'
import type { I18nStateWithDates } from '../../utils'
import { ltLT as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Pridėti',
    Remove: 'Pašalinti',
  },
  BeforeAfter: {
    absolute: '(visiškai)',
    relative: '(santykinai)',
  },
  Between: {
    AND: 'IR',
  },
  get_date_filter_options: {
    is: 'yra',
    'is any time': 'yra bet kuriuo metu',
    'is before': 'yra prieš',
    'is in range': 'yra diapazone',
    'is in the last': 'yra paskutinį',
    'is in the month': 'yra mėnesį',
    'is in the year': 'yra metais',
    'is next': 'yra kitą',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'is on or after': 'yra tada ar po',
    'is on the day': 'yra dieną',
    'is previous': 'yra ankstesnę (-ę) ',
    'is this': 'yra šį (šią)',
  },
  get_filter_options: {
    'matches advanced': 'atitikimai (išplėstinis)',
  },
  get_location_filter_options: {
    Box: 'Langelis',
    Circle: 'Apskritimas',
    Location: 'Vieta',
    feet: 'pėdų',
    'is anywhere': 'yra bet kur',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    kilometers: 'km',
    meters: 'm',
    miles: 'mylių',
  },
  get_number_filter_options: {
    exclusive: '(neįskaitant)',
    inclusive: '(įskaitant)',
    is: 'yra',
    'is between': 'yra tarp',
    'is greater': 'yra >',
    'is greater equal': 'yra >=',
    'is less': 'yra <',
    'is less equal': 'yra <=',
    'is not': 'nėra',
    'is not between': 'nėra tarp',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'left exclusive': '(kairė-neįskaitant)',
    'right exclusive': '(dešinė-neįskaitant)',
  },
  get_string_filter_options: {
    contains: 'yra',
    'doesnt contain': 'nėra',
    'doesnt end with': 'nesibaigia',
    'doesnt start with': 'neprasideda',
    'ends with': 'baigiasi',
    is: 'yra',
    'is blank': 'yra tuščia',
    'is not': 'nėra',
    'is not blank': 'nėra tuščia',
    'is not null': 'nėra nulis',
    'is null': 'yra nulis',
    'starts with': 'prasideda',
  },
  get_tier_filter_options: {
    is: 'yra',
    'is any value': 'yra bet kuri vertė',
    'is not': 'nėra',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'atitinka naudotojo atributą',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: 'IR',
    OR: 'ARBA',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Valyti visus',
    Remove: 'Pašalinti',
    Toggle: 'Perjungti',
  },
  Relative: {
    ago: 'prieš',
    'from now': 'nuo dabar',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Pasirinkite laikotarpį',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Tinkinti',
    Presets: 'Išankstiniai nustatymai',
  },
  RelativeTimeframePresets: {
    More: 'Daugiau',
  },
  use_option_filtering: {
    'No values': 'Nėra verčių',
    'No values match': 'Nėra sutampančių verčių',
  },
  use_placeholder: {
    'any value': 'bet kokia vertė',
  },
  use_suggestable: {
    'Error loading suggestions': 'Nepavyko įkelti pasiūlymų',
  },
  use_validation_message: {
    'Value required': 'Būtina užpildyti',
  },
}

export const ltLT: I18nStateWithDates = {
  dateLocale,
  locale: 'lt-LT',
  resources: { 'lt-LT': merge(resources, expressionLocale.resources['lt-LT']) },
}
