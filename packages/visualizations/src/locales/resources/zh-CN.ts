
    import {zhCN as componentsLocale} from '@looker/components'
import {zhCN as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
import {zhCN as visualizationstableLocale} from '@looker/visualizations-table'
import {zhCN as visualizationsvisxLocale} from '@looker/visualizations-visx'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Query": {
    "No children passed to Query component": "没有子项传递给查询组件",
    "Query component received both dashboard and query props": "查询组件同时收到了信息中心和查询属性"
  },
  "QueryError": {
    "Error": "错误"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "目前不支持“日期”类型的测量",
    "No chart found for type \"{{type}}\"": "找不到“{{type}}”类型的图表"
  }
}

    export const zhCN = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
visualizationstableLocale,
visualizationsvisxLocale,
      ],
      'zh-CN',
      resources,
      
    )