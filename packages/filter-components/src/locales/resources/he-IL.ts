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
import dateLocale from 'date-fns/locale/he'
import type { I18nStateWithDates } from '../../utils'
import { heIL as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'הוסף',
    Remove: 'הסר',
  },
  BeforeAfter: {
    absolute: '(מוחלט)',
    relative: '(יחסי)',
  },
  Between: {
    AND: 'ו',
  },
  get_date_filter_options: {
    is: 'הוא',
    'is any time': 'מועד כלשהו',
    'is before': 'לפני',
    'is in range': 'בטווח',
    'is in the last': 'האחרון',
    'is in the month': 'בחודש',
    'is in the year': 'בשנת',
    'is next': 'הבא',
    'is not null': 'אינו Null',
    'is null': 'Null',
    'is on or after': 'אחרי או ב-',
    'is on the day': 'ביום',
    'is previous': 'הקודם',
    'is this': 'זה הוא',
  },
  get_filter_options: {
    'matches advanced': 'התאמות (מתקדם)',
  },
  get_location_filter_options: {
    Box: 'תא',
    Circle: 'מעגל',
    Location: 'מקום',
    feet: 'רגל (מידת אורך)',
    'is anywhere': 'בכל מקום',
    'is not null': 'אינו Null',
    'is null': 'Null',
    kilometers: 'קילומטרים',
    meters: 'מטרים',
    miles: 'מייל (מידת מרחק)',
  },
  get_number_filter_options: {
    exclusive: '(לא כולל)',
    inclusive: '[כולל]',
    is: 'הוא',
    'is between': 'בין',
    'is greater': 'הוא >',
    'is greater equal': 'הוא >=',
    'is less': 'הוא <',
    'is less equal': 'הוא <=',
    'is not': 'אינו',
    'is not between': 'לא בין',
    'is not null': 'אינו Null',
    'is null': 'Null',
    'left exclusive': '(לא כולל משמאל]',
    'right exclusive': '[לא כולל מימין)',
  },
  get_string_filter_options: {
    contains: 'מכיל',
    'doesnt contain': 'לא מכיל',
    'doesnt end with': 'לא מסתיים ב-',
    'doesnt start with': 'לא מתחיל ב-',
    'ends with': 'מסתיים ב-',
    is: 'הוא',
    'is blank': 'ריק',
    'is not': 'אינו',
    'is not blank': 'אינו ריק',
    'is not null': 'אינו Null',
    'is null': 'Null',
    'starts with': 'מתחיל ב-',
  },
  get_tier_filter_options: {
    is: 'הוא',
    'is any value': 'ערך כלשהו',
    'is not': 'אינו',
  },
  get_user_attribute_option: {
    'matches a user attribute': 'מתאים לתכונת משתמש',
  },
  MultiInput: {
    'Clear all': '',
    Remove: '',
    Toggle: '',
  },
  OperatorLabel: {
    AND: 'ו',
    OR: 'או',
  },
  ReactSelectCustomIcons: {
    'Clear all': 'נקה הכול',
    Remove: 'הסר',
    Toggle: 'שנה מצב',
  },
  Relative: {
    ago: 'לשעבר',
    'from now': 'מעתה',
  },
  RelativeTimeframe: {
    'Choose a Timeframe': 'בחר מסגרת זמן',
  },
  RelativeTimeframePopoverContent: {
    Custom: 'מותאם אישית',
    Presets: 'קבועים מראש',
  },
  RelativeTimeframePresets: {
    More: 'עוד',
  },
  use_option_filtering: {
    'No values': 'אין ערכים',
    'No values match': 'לא נמצאו ערכים תואמים',
  },
  use_placeholder: {
    'any value': 'ערך כלשהו',
  },
  use_suggestable: {
    'Error loading suggestions': 'שגיאה בהעלאת ההצעות',
  },
  use_validation_message: {
    'Value required': 'נדרש ערך',
  },
}

export const heIL: I18nStateWithDates = {
  dateLocale,
  locale: 'he-IL',
  resources: { 'he-IL': merge(resources, expressionLocale.resources['he-IL']) },
}
