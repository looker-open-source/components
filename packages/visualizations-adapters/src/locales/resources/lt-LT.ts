
    import {ltLT as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Konfigūracija",
    "Dimensions": "Matmenys",
    "Error": "Klaida",
    "Measures": "Priemonės",
    "Result": "Rezultatas",
    "error": "klaida",
    "ok": "gerai"
  },
  "ErrorBoundary": {
    "Something went wrong": "Įvyko klaida"
  },
  "KeyValueList": {
    "false": "neteisinga",
    "null": "negaliojantis",
    "true": "teisinga",
    "undefined": "neapibrėžta"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Eilutės sumos"
  }
}

    export const ltLT = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'lt-LT',
      resources,
      
    )