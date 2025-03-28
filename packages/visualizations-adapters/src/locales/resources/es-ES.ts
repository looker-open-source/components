
    import {esES as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Configuración",
    "Dimensions": "Dimensiones",
    "Error": "Error",
    "Measures": "Mediciones",
    "Result": "Resultado",
    "error": "error",
    "ok": "correcto"
  },
  "ErrorBoundary": {
    "Something went wrong": "Se produjo un error"
  },
  "KeyValueList": {
    "false": "falso",
    "null": "nulo",
    "true": "verdadero",
    "undefined": "indefinido"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Total de fila"
  }
}

    export const esES = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'es-ES',
      resources,
      
    )