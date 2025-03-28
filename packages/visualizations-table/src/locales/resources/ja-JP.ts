
    import {jaJP as componentsLocale} from '@looker/components'
import {jaJP as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Table": {
    "Shift + Click to sort additional columns": "Shift キーを押しながらクリックすると、追加の列を並べ替えることができます",
    "Sort ascending": "昇順に並べ替え",
    "Sort descending": "降順に並べ替え",
    "Totals": "合計"
  }
}

    export const jaJP = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
      ],
      'ja-JP',
      resources,
      
    )