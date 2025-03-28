
    import {heIL as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "הגדר",
    "Dimensions": "מידות",
    "Error": "שגיאה",
    "Measures": "מדדים",
    "Result": "תוצאה",
    "error": "שגיאה",
    "ok": "אישור"
  },
  "ErrorBoundary": {
    "Something went wrong": "משהו השתבש"
  },
  "KeyValueList": {
    "false": "לא נכון",
    "null": "ריק",
    "true": "נכון",
    "undefined": "לא מוגדר"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "סכום שורה"
  }
}

    export const heIL = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'he-IL',
      resources,
      
    )