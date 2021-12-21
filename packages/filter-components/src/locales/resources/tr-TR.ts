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
import dateLocale from 'date-fns/locale/tr'
import type { I18nStateWithDates } from '../../utils'
import { trTR as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'Ekle',
    Remove: 'Kaldır',
  },
  BeforeAfter: {
    absolute: '(mutlak)',
    relative: '(göreli)',
  },
  Between: {
    AND: 'İLE',
  },
  get_date_filter_options: {
    is: 'şudur:',
    'is any time': 'herhangi bir zaman',
    'is before': 'şu tarihten önce:',
    'is in range': 'şu aralıkta:',
    'is in the last': 'geçmiş şu sürede:',
    'is in the month': 'şu ayda:',
    'is in the year': 'şu yılda:',
    'is next': 'sonraki',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'is on or after': 'şu tarihte veya şu tarihten sonra:',
    'is on the day': 'şu günde:',
    'is previous': 'önceki',
    'is this': 'bu',
  },
  get_filter_options: {
    'matches advanced': 'şununla eşleşiyor (gelişmiş):',
  },
  get_location_filter_options: {
    Box: 'Kutu',
    Circle: 'Daire',
    Location: 'Konum',
    feet: 'feet',
    'is anywhere': 'her yerde',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    kilometers: 'kilometre',
    meters: 'metre',
    miles: 'mil',
  },
  get_number_filter_options: {
    exclusive: '(hariç)',
    inclusive: '[dahil]',
    is: 'şudur:',
    'is between': 'şunların arasında:',
    'is greater': '>',
    'is greater equal': '>=',
    'is less': '<',
    'is less equal': '<=',
    'is not': 'şu değildir:',
    'is not between': 'şunların arasında değil:',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'left exclusive': '(sol hariç]',
    'right exclusive': '[sağ hariç)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'Son 14 Gün',
    'Last 180 Days': 'Son 180 Gün',
    'Last 28 Days': 'Son 28 Gün',
    'Last 30 Days': 'Son 30 Gün',
    'Last 365 Days': 'Son 365 Gün',
    'Last 7 Days': 'Son 7 Gün',
    'Last 90 Days': 'Son 90 Gün',
    'Previous Month': 'Önceki Ay',
    'Previous Quarter': 'Önceki Çeyrek',
    'Previous Week': 'Önceki Hafta',
    'Previous Year': 'Önceki Yıl',
    'This Month': 'Bu Ay',
    'This Quarter': 'Bu Çeyrek',
    'This Week': 'Bu Hafta',
    'This Year': 'Bu Yıl',
    Today: 'Bugün',
    'Year To Date': 'Yılbaşından Bugüne',
    Yesterday: 'Dün',
  },
  get_string_filter_options: {
    contains: 'şunu içeriyor:',
    'doesnt contain': 'şunu içermiyor:',
    'doesnt end with': 'şununla bitmiyor:',
    'doesnt start with': 'şununla başlamıyor:',
    'ends with': 'şununla bitiyor:',
    is: 'şudur:',
    'is blank': 'boş',
    'is not': 'şu değildir:',
    'is not blank': 'boş değil',
    'is not null': 'değer içeriyor',
    'is null': 'değer içermiyor',
    'starts with': 'şununla başlıyor:',
  },
  get_tier_filter_options: {
    is: 'şudur:',
    'is any value': 'herhangi bir değer',
    'is not': 'şu değildir:',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'bir kullanıcı özniteliğiyle eşleşiyor',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'herhangi bir değer',
  },
  OperatorLabel: {
    AND: 'İLE',
    OR: 'VEYA',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'Tümünü temizle',
    Remove: 'Kaldır',
    Toggle: 'Değiştir',
  },
  Relative: {
    ago: 'önce',
    'from now': 'sonra',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'Bir Zaman Dilimi Seçin',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'Özel',
    Presets: 'Önayarlar',
  },
  RelativeTimeframePresets: {
    More: 'Daha Fazla',
  },
  use_option_filtering: {
    'No values': 'Değer yok',
    'No values match': 'Eşleşen değer yok',
  },
  use_placeholder: {
    'any value': 'herhangi bir değer',
  },
  use_suggestable: {
    'Error loading suggestions': 'Öneriler yüklenirken hata',
  },
  use_validation_message: {
    'Value required': 'Değer gerekli',
  },
}

export const trTR: I18nStateWithDates = {
  dateLocale,
  locale: 'tr-TR',
  resources: { 'tr-TR': merge(resources, expressionLocale.resources['tr-TR']) },
}
