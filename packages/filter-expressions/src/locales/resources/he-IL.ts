/*

 MIT License

 Copyright (c) 2023 Google LLC

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

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  describe_date: {
    ' complete': ' מלא',
    'absolute prefix dateTime': '{{prefix}} {{dateTime}}',
    ago: 'לשעבר',
    'from now': 'מעתה',
    'is any time': 'מועד כלשהו',
    'is before': 'לפני',
    'is day': 'הוא {{day}}',
    'is from dateTimeStart until dateTimeEnd':
      'הוא מ-{{dateTimeStart}} עד {{dateTimeEnd}}',
    'is in month year': 'הוא ב-{{month}} {{year}}',
    'is in the last': 'האחרון {{describeInterval}}',
    'is in the year year': 'הוא בשנת {{year}}',
    'is interval ago': 'הוא ב {{interval}} שעבר',
    'is intervalStart intervalType for intervalEnd':
      'ב {{intervalStart}} {{intervalType}} ל {{intervalEnd}}',
    'is not null': 'אינו Null',
    'is on dateTime': 'הוא ב-{{dateTime}}',
    'is on or after': 'אחרי או ב-',
    'is previous unitLabel': 'קדם ל {{unitLabel}}',
    'is type unitLabel': 'ב {{type}} {{unitLabel}}',
    next: 'הבא',
    'prefix interval timePassed': '{{prefix}} {{interval}} {{timePassed}}',
    'prefix now': '{{prefix}} כעת',
    this: 'הזה',
    'this startInterval to endInterval':
      'הזה {{startInterval}} ל {{endInterval}}',
    'value complete unitLabel': '{{value}} {{complete}} {{unitLabel}}',
  },
  describe_is_any_value: {
    'any value': 'ערך כלשהו',
  },
  describe_is_item: {
    'is not value': 'אינו {{value}}',
    'is value': 'הוא {{value}}',
  },
  describe_location: {
    'coords1 to coords2': '{{coords1}} אל {{coords2}}',
    'distance unit from lat, lon': '{{distance}} {{unit}} מ- {{lat}}, {{lon}}',
    'is anywhere': 'בכל מקום',
    'is not null': 'אינו Null',
    'is null': 'Null',
    'lat degrees north': '{{lat}}°צפון',
    'lat degrees south': '{{lat}}°דרום',
    'lon degrees east': '{{lon}}°מזרח',
    'lon degrees west': '{{lon}}°מערב',
  },
  describe_number: {
    'is in range range': 'נמצא בטווח {{range}}',
    'is not in range range': 'לא נמצא בטווח {{range}}',
  },
  describe_string: {
    blank: 'ריק',
    'contains value': 'מכיל {{value}}',
    'does not contain value': 'אינו מכיל {{value}}',
    'does not end with value': 'אינו מסתיים ב-{{value}}',
    'does not start with value': 'מסתיים ב-{{value}}',
    'ends with value': 'מסתיים ב-{{value}}',
    'starts with value': 'מתחיל ב-{{value}}',
  },
  get_distance_unit_labels: {
    feet: 'רגל (מידת אורך)',
    kilometers: 'קילומטרים',
    meters: 'מטרים',
    miles: 'מייל (מידת מרחק)',
  },
  get_months: {
    April: 'אפריל',
    August: 'אוגוסט',
    December: 'דצמבר',
    February: 'פברואר',
    January: 'ינואר',
    July: 'יולי',
    June: 'יוני',
    March: 'מרץ',
    May: 'מאי',
    November: 'נובמבר',
    October: 'אוקטובר',
    September: 'ספטמבר',
  },
  get_unit_label: {
    'complete day': 'יום מלא',
    'complete days': 'ימים מלאים',
    'complete fiscal quarter': 'רבעון פיסקלי מלא',
    'complete fiscal quarters': 'רבעונים פיסקליים מלאים',
    'complete fiscal year': 'שנה פיסלית מלאה',
    'complete fiscal years': 'שנים פיסקליות מלאות',
    'complete hour': 'שעה מלאה',
    'complete hours': 'שעות מלאות',
    'complete minute': 'דקה מלאה',
    'complete minutes': 'דקות מלאות',
    'complete month': 'חודש מלא',
    'complete months': 'חודשים מלאים',
    'complete quarter': 'רבעון מלא',
    'complete quarters': 'רבעונים מלאים',
    'complete second': 'שניה מלאה',
    'complete seconds': 'שניות מלאות',
    'complete week': 'שבוע מלא',
    'complete weeks': 'שבועות מלאים',
    'complete year': 'שנה מלאה',
    'complete years': 'שנים מלאות',
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
  join_or: {
    'a or b': '{{a}} או {{b}}',
  },
  summary: {
    'Value required': 'נדרש ערך',
  },
}

export const heIL = mergeLocaleObjects([], 'he-IL', resources)
