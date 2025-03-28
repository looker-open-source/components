
    import {ptBR as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Configuração",
    "Dimensions": "Dimensões",
    "Error": "Erro",
    "Measures": "Medições",
    "Result": "Resultado",
    "error": "erro",
    "ok": "ok"
  },
  "ErrorBoundary": {
    "Something went wrong": "Algo deu errado"
  },
  "KeyValueList": {
    "false": "falso",
    "null": "nulo",
    "true": "verdadeiro",
    "undefined": "indefinido"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Total da linha"
  }
}

    export const ptBR = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'pt-BR',
      resources,
      
    )