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
import dateLocale from 'date-fns/locale/hi'
import type { I18nStateWithDates } from '../../utils'
import { hiIN as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'जोड़ें',
    Remove: 'निकालें',
  },
  BeforeAfter: {
    absolute: '(परम)',
    relative: '(सापेक्षिक)',
  },
  Between: {
    AND: 'और',
  },
  date_units: {
    days: 'दिन',
    'fiscal quarters': 'वित्तीय तिमाहियां',
    'fiscal years': 'वित्तीय वर्ष',
    hours: 'घंटे',
    minutes: 'मिनट',
    months: 'महीने',
    quarters: 'तिमाहियां',
    seconds: 'सेकंड',
    weeks: 'सप्ताह',
    years: 'वर्ष',
  },
  get_date_filter_options: {
    is: 'है',
    'is any time': 'किसी भी समय है',
    'is before': 'से पहले है',
    'is in range': 'रेंज में है',
    'is in the last': 'अंत में है',
    'is in the month': 'महीने में है',
    'is in the year': 'वर्ष में है',
    'is next': 'अगला है',
    'is not null': 'नल नहीं है',
    'is null': 'नल है',
    'is on or after': 'पर या बाद में है',
    'is on the day': 'तारीख को है',
    'is previous': 'पिछला है',
    'is this': 'यह है',
  },
  get_filter_options: {
    'matches advanced': 'मिलान (उन्नत)',
  },
  get_location_filter_options: {
    Box: 'बॉक्स',
    Circle: 'वृत्त',
    Location: 'लोकेशन',
    feet: 'फ़ीट',
    'is anywhere': 'कहीं भी है',
    'is not null': 'नल नहीं है',
    'is null': 'नल है',
    kilometers: 'किलोमीटर',
    meters: 'मीटर',
    miles: 'मील',
  },
  get_number_filter_options: {
    exclusive: '(असमावेशी)',
    inclusive: '[समावेशी]',
    is: 'है',
    'is between': 'के बीच है',
    'is greater': '> है',
    'is greater equal': '>= है',
    'is less': '< है',
    'is less equal': '<= है',
    'is not': 'नहीं है',
    'is not between': 'के बीच नहीं है',
    'is not null': 'नल नहीं है',
    'is null': 'नल है',
    'left exclusive': '(बायां-असमावेशी]',
    'right exclusive': '[दायां-असमावेशी)',
  },
  get_relative_timeframe_presets: {
    'Last 14 Days': 'अंतिम 14 दिन',
    'Last 180 Days': 'अंतिम 180 दिन',
    'Last 28 Days': 'अंतिम 28 दिन',
    'Last 30 Days': 'अंतिम 30 दिन',
    'Last 365 Days': 'अंतिम 365 दिन',
    'Last 7 Days': 'अंतिम 7 दिन',
    'Last 90 Days': 'अंतिम 90 दिन',
    'Previous Month': 'पिछले महीने',
    'Previous Quarter': 'पिछली तिमाही',
    'Previous Week': 'पिछले सप्ताह',
    'Previous Year': 'पिछले साल',
    'This Month': 'इस महीने',
    'This Quarter': 'इस तिमाही',
    'This Week': 'इस सप्ताह',
    'This Year': 'इस साल',
    Today: 'आज',
    'Year To Date': 'आज से पिछले एक साल का',
    Yesterday: 'कल का',
  },
  get_string_filter_options: {
    contains: 'शामिल है',
    'doesnt contain': 'शामिल नहीं है',
    'doesnt end with': 'पर समाप्त नहीं होता है',
    'doesnt start with': 'से शुरू नहीं होता है',
    'ends with': 'पर समाप्त होता है',
    is: 'है',
    'is blank': 'खाली है',
    'is not': 'नहीं है',
    'is not blank': 'खाली नहीं है',
    'is not null': 'शून्य नहीं है',
    'is null': 'शून्य है',
    'starts with': 'से शुरू होता है',
  },
  get_tier_filter_options: {
    is: 'है',
    'is any value': 'कोई भी मान है',
    'is not': 'नहीं है',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'किसी उपयोगकर्ता के गुण से मिलान',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  NumberFilter: {
    'any value': 'कोई भी मान',
  },
  OperatorLabel: {
    AND: 'और',
    OR: 'या',
  },
  past_units: {
    'complete days': 'पूर्ण दिन',
    'complete fiscal quarters': 'पूर्ण वित्तीय तिमाहियां',
    'complete fiscal years': 'पूर्ण वित्तीय वर्ष',
    'complete hours': 'पूर्ण घंटे',
    'complete minutes': 'पूर्ण मिनट',
    'complete months': 'पूर्ण महीने',
    'complete quarters': 'पूर्ण तिमाहियां',
    'complete seconds': 'पूर्ण सेकंड',
    'complete weeks': 'पूर्ण सप्ताह',
    'complete years': 'पूर्ण वर्ष',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'सभी साफ करें',
    Remove: 'निकालें',
    Toggle: 'टॉगल करें',
  },
  Relative: {
    ago: 'पहले',
    'from now': 'अब से',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'एक टाइमफ़्रेम चुनें',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'कस्टम',
    Presets: 'प्रीसेट',
  },
  RelativeTimeframePresets: {
    More: 'अधिक',
  },
  use_option_filtering: {
    'No values': 'कोई मान नहीं दर्ज किया है',
    'No values match': 'कोई मान इससे नहीं मिलता है',
  },
  use_placeholder: {
    'any value': 'कोई भी मान',
  },
  use_suggestable: {
    'Error loading suggestions': 'सुझाव लोड करने में त्रुटि हुई',
  },
  use_validation_message: {
    'Value required': 'मान दर्ज करना ज़रूरी है',
  },
}

export const hiIN: I18nStateWithDates = {
  dateLocale,
  locale: 'hi-IN',
  resources: { 'hi-IN': merge(resources, expressionLocale.resources['hi-IN']) },
}
