
    import {ukUA as componentsLocale} from '@looker/components'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Debug": {
    "Config": "Конфігурація",
    "Dimensions": "Поля dimension",
    "Error": "Помилка",
    "Measures": "Поля measure",
    "Result": "Результат",
    "error": "помилка",
    "ok": "ОК"
  },
  "ErrorBoundary": {
    "Something went wrong": "Виникла проблема"
  },
  "KeyValueList": {
    "false": "false",
    "null": "null",
    "true": "true",
    "undefined": "undefined"
  },
  "useNormalizedPivotLabels": {
    "Row Total": "Підсумок рядка"
  }
}

    export const ukUA = mergeLocaleObjects(
      [
        componentsLocale,
      ],
      'uk-UA',
      resources,
      
    )