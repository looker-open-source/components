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
import dateLocale from 'date-fns/locale/cs'
import type { I18nStateWithDates } from '../../utils'
import { csCZ as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Přidat',
    Remove: 'Odebrat',
  },
  BeforeAfter: {
    absolute: '(absolutně)',
    relative: '(relativně)',
  },
  Between: {
    AND: 'A',
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
    'is this': 'je tento',
  },
  get_filter_options: {
    'matches advanced': 'shoduje se (pokročilé)',
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
    miles: 'míle',
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
    'right exclusive': '[vyjma hodnoty vpravo)',
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
    'starts with': 'má na začátku',
  },
  get_tier_filter_options: {
    is: 'je',
    'is any value': 'má jakoukoliv hodnotu',
    'is not': 'není',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'shoduje se s atributem uživatele',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: 'A',
    OR: 'NEBO',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Vymazat vše',
    Remove: 'Odebrat',
    Toggle: 'Přepnout',
  },
  Relative: {
    ago: 'v minulosti',
    'from now': 'od této chvíle',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Vybrat časový rámec',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Vlastní',
    Presets: 'Přednastavené hodnoty',
  },
  RelativeTimeframePresets: {
    More: 'Více',
  },
  use_option_filtering: {
    'No values': 'Žádné hodnoty',
    'No values match': 'Žádné hodnoty se neshodují',
  },
  use_placeholder: {
    'any value': 'jakákoliv hodnota',
  },
  use_suggestable: {
    'Error loading suggestions': 'Chyba při načítání návrhů',
  },
  use_validation_message: {
    'Value required': 'Hodnota je povinná',
  },
}

export const csCZ: I18nStateWithDates = {
  dateLocale,
  locale: 'cs-CZ',
  resources: { 'cs-CZ': merge(resources, expressionLocale.resources['cs-CZ']) },
}
