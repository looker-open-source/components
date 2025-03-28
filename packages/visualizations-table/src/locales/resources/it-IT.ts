
    import {itIT as componentsLocale} from '@looker/components'
import {itIT as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Table": {
    "Shift + Click to sort additional columns": "Premi Maiusc e fai clic per ordinare altre colonne",
    "Sort ascending": "Ordine crescente",
    "Sort descending": "Ordine decrescente",
    "Totals": "Totali"
  }
}

    export const itIT = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
      ],
      'it-IT',
      resources,
      
    )