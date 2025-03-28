
    import {deDE as componentsLocale} from '@looker/components'
import {deDE as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Table": {
    "Shift + Click to sort additional columns": "Umschalttaste + Klicken zum Sortieren zusätzlicher Spalten",
    "Sort ascending": "Aufsteigend sortieren",
    "Sort descending": "Absteigend sortieren",
    "Totals": "Gesamtsummen"
  }
}

    export const deDE = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
      ],
      'de-DE',
      resources,
      
    )