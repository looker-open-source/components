
    import {fiFI as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Määritys",
    "Dimensions": "Ulottuvuudet",
    "Error": "Virhe",
    "Measures": "Mitat",
    "Result": "Tulos",
    "error": "virhe",
    "ok": "OK"
  },
  "ErrorBoundary": {
    "Something went wrong": "Jokin meni pieleen"
  },
  "KeyValueList": {
    "false": "epätosi",
    "null": "nolla",
    "true": "tosi",
    "undefined": "määrittämätön"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Rivin summa"
  }
}

    export const fiFI = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'fi-FI',
      resources,
      
    )