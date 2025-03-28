import dateLocale from 'date-fns/locale/he'
    
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "AdvancedInputControls": {
    "Clear Field": "נקה שדה"
  },
  "AvatarButton": {
    "Profile Picture": "תמונת פרופיל"
  },
  "AvatarUser": {
    "Avatar": "דמות"
  },
  "BulkActions": {
    "AllPageCountDisplayedSelected": "כל {{pageCount}} הפריטים המוצגים נבחרוו",
    "AllTotalCountSelected": "כל {{totalCount}} הפריטים נבחרו",
    "Bulk Actions": "פעולות במרוכז",
    "Clear Selection": "נקה את הבחירה",
    "SelectAllCountResults": "בחר את כל {{totalCount}} התוצאות",
    "SelectedCountOfTotalDisplayed": "{{selectedItemCount}} מתוך {{pageCount}} הפריטים המוצגים נבחרו"
  },
  "CalendarNav": {
    "next month": "החודש הבא",
    "previous month": "החודש שעבר"
  },
  "CheckMarkMixed": {
    "Check Mark Mixed": "סימני ביקורת מעורבים"
  },
  "Chip": {
    "Delete": "מחק"
  },
  "ColumnSelector": {
    "Apply": "החל",
    "Cancel": "ביטול",
    "Select All": "בחר הכול",
    "Select None": "אל תבחר כלום",
    "Select columns to display": "בחר עמודות להצגה"
  },
  "ConfirmationDialog": {
    "Cancel": "ביטול",
    "Confirm": "אשר"
  },
  "CopyToClipboard": {
    "Copied": "ההעתקה בוצעה",
    "Copy to Clipboard": "העתק ללוח ההדבקות"
  },
  "DataTable": {
    "No Results": "אין תוצאות"
  },
  "DataTableItem": {
    "Options": "אפשרויות"
  },
  "FieldTimeSelect": {
    "Please use format HHMM": "יש להשתמש בתבנית HH:MM"
  },
  "GetIntentLabel": {
    "Error": "שגיאה",
    "Inform": "הודע",
    "Success": "הצלחה",
    "Warning": "אזהרה"
  },
  "InputDate": {
    "Open calendar": "פתח לוח שנה"
  },
  "InputDateRange": {
    "End date": "תאריך סיום",
    "Start date": "תאריך התחלה"
  },
  "InputFilters": {
    "Clear Filters": "נקה מסננים",
    "Filter List": "רשימת מסננים",
    "bottom-start": "התחלה מלמטה"
  },
  "InputTimeSelect": {
    "Select time": "בחר שעה"
  },
  "MessageBar": {
    "DismissIntent": "בטל את {{intent}}"
  },
  "ModalHeaderCloseButton": {
    "Close": "סגור"
  },
  "MonthPickerNav": {
    "close": "סגור",
    "next year": "בשנה הבאה",
    "previous year": "בשנה שעברה"
  },
  "PageSize": {
    "Display": "הצג",
    "of": "מתוך"
  },
  "Pagination": {
    "First page of results": "דף ראשון של תוצאות",
    "Last page of results": "דף אחרון של תוצאות",
    "Next page of results": "הדף הבא של התוצאות",
    "Previous page of results": "הדף הקודם של התוצאות",
    "of": "מתוך"
  },
  "PanelHeader": {
    "CloseTitle": "סגור את {{title}}"
  },
  "PopoverFooter": {
    "Done": "סיום"
  },
  "PromptDialog": {
    "Cancel": "ביטול",
    "Save": "שמור"
  },
  "RangeSlider": {
    "Maximum Name": "לכל היותר {{name}}",
    "Maximum Value": "ערך מקסימום",
    "Minimum Name": "לכל הפחות {{name}}",
    "Minimum Value": "ערך מינימום"
  },
  "RequiredStar": {
    "required": "נדרש"
  },
  "SelectOptions": {
    "Loading": "טוען",
    "No options": "אין אפשרויות"
  },
  "TabList": {
    "Tabs": "כרטיסיות"
  }
}

    export const heIL = mergeLocaleObjects(
      [
        
      ],
      'he-IL',
      resources,
      dateLocale,
    )