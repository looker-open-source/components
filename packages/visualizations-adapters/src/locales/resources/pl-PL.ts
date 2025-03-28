
    import {plPL as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Konfiguracja",
    "Dimensions": "Wymiary",
    "Error": "Błąd",
    "Measures": "Wskaźniki",
    "Result": "Wyniki",
    "error": "błąd",
    "ok": "OK"
  },
  "ErrorBoundary": {
    "Something went wrong": "Coś poszło nie tak"
  },
  "KeyValueList": {
    "false": "fałsz",
    "null": "null",
    "true": "prawda",
    "undefined": "nie zdefiniowano"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Łącznie w wierszu"
  }
}

    export const plPL = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'pl-PL',
      resources,
      
    )