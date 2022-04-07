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
import merge from 'lodash/merge'
import dateLocale from 'date-fns/locale/he'
import type { I18nStateWithDates } from '../../utils'
import { heIL as expressionLocale } from '@looker/filter-expressions'

const resources = {
  AddRemoveButtons: {
    Add: 'הוסף',
    Remove: 'הסר',
  },
  before_after_units: {
    'days ago': 'ימים חלפו',
    'days from now': 'ימים מעכשיו',
    'fiscal quarter from now': 'רבעון פיסקלי מעכשיו',
    'fiscal quarters ago': 'רבעונים פיסקליים חלפו',
    'fiscal years ago': 'שנים פיסקליות חלפו',
    'fiscal years from now': 'שנים פיסקליות מעכשיו',
    'hours ago': 'שעות חלפו',
    'hours from now': 'שעות מעכשיו',
    'minutes ago': 'דקות חלפו',
    'minutes from now': 'דקות מעכשיו',
    'months ago': 'חודשים חלפו',
    'months from now': 'חודשים מעכשיו',
    now: 'עכשיו',
    'quarters ago': 'רבעונים חלפו',
    'quarters from now': 'רבעונים מעכשיו',
    'seconds ago': 'שניות חלפו',
    'seconds from now': 'שניות מעכשיו',
    'weeks ago': 'שבועות חלפו',
    'weeks from now': 'שבועות מעכשיו',
    'years ago': 'שנים חלפו',
    'years from now': 'שנים מעכשיו',
  },
  BeforeAfter: {
    absolute: '(מוחלט)',
    relative: '(יחסי)',
  },
  Between: {
    AND: 'ו',
  },
  date_units: {
    day: 'יום',
    days: 'ימים',
    'fiscal quarter': 'רבעון פיסקלי',
    'fiscal quarters': 'רבעונים פיסקליים',
    'fiscal year': 'שנה פיסקלית',
    'fiscal years': 'שנים פיסקליות',
    hour: 'שעה',
    hours: 'שעות',
    minute: 'דקה',
    minutes: 'דקות',
    month: 'חודש',
    months: 'חודשים',
    quarter: 'רבעון',
    quarters: 'רבעונים',
    second: 'שנייה',
    seconds: 'שניות',
    week: 'שבוע',
    weeks: 'שבועות',
    year: 'שנה',
    years: 'שנים',
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
  get_relative_timeframe_presets: {
    'Last 14 Days': '14 הימים האחרונים',
    'Last 180 Days': '180 הימים האחרונים',
    'Last 28 Days': '28 הימים האחרונים',
    'Last 30 Days': '30 הימים האחרונים',
    'Last 365 Days': '365 הימים האחרונים',
    'Last 7 Days': '7 הימים האחרונים',
    'Last 90 Days': '90 הימים האחרונים',
    'Previous Month': 'בחודש שעבר',
    'Previous Quarter': 'ברבעון שעבר',
    'Previous Week': 'בשבוע שעבר',
    'Previous Year': 'בשנה שעברה',
    'This Month': 'החודש הנוכחי',
    'This Quarter': 'הרבעון הנוכחי',
    'This Week': 'השבוע הנוכחי',
    'This Year': 'השנה הנוכחית',
    Today: 'היום',
    'Year To Date': 'שנה מהיום',
    Yesterday: 'אתמול',
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
  NumberFilter: {
    'any value': 'ערך כלשהו',
  },
  OperatorLabel: {
    AND: 'ו',
    OR: 'או',
  },
  past_units: {
    'complete days': 'ימים מלאים',
    'complete fiscal quarters': 'רבעונים פיסקליים מלאים',
    'complete fiscal years': 'שנים פיסקליות מלאות',
    'complete hours': 'שעות מלאות',
    'complete minutes': 'דקות מלאות',
    'complete months': 'חודשים מלאים',
    'complete quarters': 'רבעונים מלאים',
    'complete seconds': 'שניות מלאות',
    'complete weeks': 'שבועות מלאים',
    'complete years': 'שנים מלאות',
  },
  RadioGroup: {
    'any value': 'ערך כלשהו',
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
  use_filters_errors: {
    'Invalid value': 'ערך לא חוקי',
    'No value is set for your user attribute': 'לא הוגדר ערך לתכונת המשתמש שלך',
    'Selection required': 'יש לבצע בחירה',
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
