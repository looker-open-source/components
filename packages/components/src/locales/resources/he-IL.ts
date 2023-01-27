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

import dateLocale from 'date-fns/locale/he'

import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  AdvancedInputControls: {
    'Clear Field': 'נקה שדה',
  },
  AvatarButton: {
    'Profile Picture': 'תמונת פרופיל',
  },
  AvatarUser: {
    Avatar: 'דמות',
  },
  BulkActions: {
    AllPageCountDisplayedSelected: 'כל {{pageCount}} הפריטים המוצגים נבחרוו',
    AllTotalCountSelected: 'כל {{totalCount}} הפריטים נבחרו',
    'Bulk Actions': 'פעולות במרוכז',
    'Clear Selection': 'נקה את הבחירה',
    SelectAllCountResults: 'בחר את כל {{totalCount}} התוצאות',
    SelectedCountOfTotalDisplayed:
      '{{selectedItemCount}} מתוך {{pageCount}} הפריטים המוצגים נבחרו',
  },
  CalendarNav: {
    'next month': 'החודש הבא',
    'previous month': 'החודש שעבר',
  },
  CheckMarkMixed: {
    'Check Mark Mixed': 'סימני ביקורת מעורבים',
  },
  Chip: {
    Delete: 'מחק',
  },
  ColumnSelector: {
    Apply: 'החל',
    Cancel: 'ביטול',
    'Select All': 'בחר הכול',
    'Select None': 'אל תבחר כלום',
    'Select columns to display': 'בחר עמודות להצגה',
  },
  ConfirmationDialog: {
    Cancel: 'ביטול',
    Confirm: 'אשר',
  },
  CopyToClipboard: {
    Copied: 'ההעתקה בוצעה',
    'Copy to Clipboard': 'העתק ללוח ההדבקות',
  },
  DataTable: {
    'No Results': 'אין תוצאות',
  },
  DataTableItem: {
    Options: 'אפשרויות',
  },
  FieldTimeSelect: {
    'Please use format HHMM': 'יש להשתמש בתבנית HH:MM',
  },
  GetIntentLabel: {
    Error: 'שגיאה',
    Inform: 'הודע',
    Success: 'הצלחה',
    Warning: 'אזהרה',
  },
  InputDate: {
    'Open calendar': 'פתח לוח שנה',
  },
  InputDateRange: {
    'End date': 'תאריך סיום',
    'Start date': 'תאריך התחלה',
  },
  InputFilters: {
    'Clear Filters': 'נקה מסננים',
    'Filter List': 'רשימת מסננים',
    'bottom-start': 'התחלה מלמטה',
  },
  InputTimeSelect: {
    'Select time': 'בחר שעה',
  },
  MessageBar: {
    DismissIntent: 'בטל את {{intent}}',
  },
  ModalHeaderCloseButton: {
    Close: 'סגור',
  },
  MonthPickerNav: {
    close: 'סגור',
    'next year': 'בשנה הבאה',
    'previous year': 'בשנה שעברה',
  },
  PageSize: {
    Display: 'הצג',
    of: 'מתוך',
  },
  Pagination: {
    'First page of results': 'דף ראשון של תוצאות',
    'Last page of results': 'דף אחרון של תוצאות',
    'Next page of results': 'הדף הבא של התוצאות',
    'Previous page of results': 'הדף הקודם של התוצאות',
    of: 'מתוך',
  },
  PanelHeader: {
    CloseTitle: 'סגור את {{title}}',
  },
  PopoverFooter: {
    Done: 'סיום',
  },
  PromptDialog: {
    Cancel: 'ביטול',
    Save: 'שמור',
  },
  RangeSlider: {
    'Maximum Name': 'לכל היותר {{name}}',
    'Maximum Value': 'ערך מקסימום',
    'Minimum Name': 'לכל הפחות {{name}}',
    'Minimum Value': 'ערך מינימום',
  },
  RequiredStar: {
    required: 'נדרש',
  },
  SelectOptions: {
    Loading: 'טוען',
    'No options': 'אין אפשרויות',
  },
  TabList: {
    Tabs: 'כרטיסיות',
  },
}

export const heIL = mergeLocaleObjects([], 'he-IL', resources, dateLocale)
