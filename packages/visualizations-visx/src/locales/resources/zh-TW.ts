import dateLocale from 'date-fns/locale/zh-TW'
    import {zhTW as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "圖例：第 {{page}} 頁，共 {{totalPages}} 頁"
  },
  "PieLegendControls": {
    "Next page": "下一頁",
    "Previous page": "上一頁"
  },
  "XYTooltip": {
    "Points sized by": "點大小衡量依據："
  }
}

    export const zhTW = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'zh-TW',
      resources,
      dateLocale,
    )