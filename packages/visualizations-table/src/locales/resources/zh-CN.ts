
    import {zhCN as componentsLocale} from '@looker/components'
import {zhCN as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Table": {
    "Shift + Click to sort additional columns": "按 Shift 键的同时点击鼠标可对其他列进行排序",
    "Sort ascending": "升序排序",
    "Sort descending": "降序排序",
    "Totals": "合计"
  }
}

    export const zhCN = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
      ],
      'zh-CN',
      resources,
      
    )