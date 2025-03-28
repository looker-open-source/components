
    import {koKR as componentsLocale} from '@looker/components'
import {koKR as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
import {koKR as visualizationstableLocale} from '@looker/visualizations-table'
import {koKR as visualizationsvisxLocale} from '@looker/visualizations-visx'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Query": {
    "No children passed to Query component": "쿼리 구성요소에 전달된 하위 항목이 없습니다.",
    "Query component received both dashboard and query props": "쿼리 구성요소에서 대시보드와 쿼리 속성을 둘 다 수신했습니다."
  },
  "QueryError": {
    "Error": "오류"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "'date' 유형의 측정은 현재 지원되지 않습니다.",
    "No chart found for type \"{{type}}\"": "\"{{type}}\" 유형에 대한 차트를 찾을 수 없습니다."
  }
}

    export const koKR = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
visualizationstableLocale,
visualizationsvisxLocale,
      ],
      'ko-KR',
      resources,
      
    )