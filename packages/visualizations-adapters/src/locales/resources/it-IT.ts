
    import {itIT as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Configurazione",
    "Dimensions": "Dimensioni",
    "Error": "Errore",
    "Measures": "Misure",
    "Result": "Risultato",
    "error": "errore",
    "ok": "ok"
  },
  "ErrorBoundary": {
    "Something went wrong": "Si è verificato un errore"
  },
  "KeyValueList": {
    "false": "falso",
    "null": "null",
    "true": "true",
    "undefined": "non definito"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Totale riga"
  }
}

    export const itIT = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'it-IT',
      resources,
      
    )