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
import type { I18nState } from '../../utils'

const resources = {
  describe_date: {
    ' complete': ' पूरा हुआ',
    'absolute prefix dateTime': '{{dateTime}} {{prefix}}',
    ago: 'पहले',
    'from now': 'अब से',
    'is any time': 'किसी भी समय है',
    'is before': 'से पहले है',
    'is day': '{{day}} है',
    'is from dateTimeStart until dateTimeEnd':
      '{{dateTimeStart}} से {{dateTimeEnd}} तक है',
    'is in month year': '{{month}} {{year}} में है',
    'is in the last': 'अंतिम {{describeInterval}} में है',
    'is in the year year': 'वर्ष {{year}} में है',
    'is interval ago': '{{interval}} पहले है',
    'is intervalStart intervalType for intervalEnd':
      '{{intervalEnd}} के लिए {{intervalStart}} {{intervalType}} में है',
    'is not null': 'नल नहीं है',
    'is on dateTime': '{{dateTime}} पर है',
    'is on or after': 'पर या बाद में है',
    'is previous unitLabel': 'पिछला {{unitLabel}} है',
    'is type unitLabel': '{{type}} {{unitLabel}} है',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} अब',
    'this startInterval to endInterval':
      'यह {{startInterval}} से {{endInterval}}',
    'value complete unitLabel': '{{value}}{{complete}} {{unitLabel}}',
  },
  get_months: {
    April: 'अप्रैल',
    August: 'अगस्त',
    December: 'दिसंबर',
    February: 'फ़रवरी',
    January: 'जनवरी',
    July: 'जुलाई',
    June: 'जून',
    March: 'मार्च',
    May: 'मई',
    November: 'नवंबर',
    October: 'अक्तूबर',
    September: 'सितंबर',
  },
  get_unit_label: {
    'complete day': 'पूरा दिन',
    'complete days': 'पूर्ण दिन',
    'complete fiscal quarter': 'पूरी वित्तीय तिमाही',
    'complete fiscal quarters': 'पूर्ण वित्तीय तिमाहियां',
    'complete fiscal year': 'पूरा वित्तीय वर्ष',
    'complete fiscal years': 'पूर्ण वित्तीय वर्ष',
    'complete hour': 'पूरा घंटा',
    'complete hours': 'पूर्ण घंटे',
    'complete minute': 'पूरा मिनट',
    'complete minutes': 'पूर्ण मिनट',
    'complete month': 'पूरा महीना',
    'complete months': 'पूर्ण महीने',
    'complete quarter': 'पूरी तिमाही',
    'complete quarters': 'पूर्ण तिमाहियां',
    'complete second': 'पूरा सेकंड',
    'complete seconds': 'पूर्ण सेकंड',
    'complete week': 'पूरा सप्ताह',
    'complete weeks': 'पूर्ण सप्ताह',
    'complete year': 'पूरा वर्ष',
    'complete years': 'पूर्ण वर्ष',
    day: 'दिन',
    days: 'दिन',
    'fiscal quarter': 'वित्तीय तिमाही',
    'fiscal quarters': 'वित्तीय तिमाहियां',
    'fiscal year': 'वित्तीय वर्ष',
    'fiscal years': 'वित्तीय वर्ष',
    hour: 'घंटा',
    hours: 'घंटे',
    minute: 'मिनट',
    minutes: 'मिनट',
    month: 'महीना',
    months: 'महीने',
    quarter: 'तिमाही',
    quarters: 'तिमाहियां',
    second: 'सेकंड',
    seconds: 'सेकंड',
    week: 'सप्ताह',
    weeks: 'सप्ताह',
    year: 'वर्ष',
    years: 'वर्ष',
  },
  summary: {
    'Value required': 'मान दर्ज करना ज़रूरी है',
  },
}

export const hiIN: I18nState = {
  locale: 'hi-IN',
  resources: { 'hi-IN': resources },
}
