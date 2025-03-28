
    import {ptBR as componentsLocale} from '@looker/components'
import {ptBR as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Table": {
    "Shift + Click to sort additional columns": "Pressione Shift + clique para classificar outras colunas",
    "Sort ascending": "Classificar em ordem crescente",
    "Sort descending": "Classificar em ordem decrescente",
    "Totals": "Total"
  }
}

    export const ptBR = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
      ],
      'pt-BR',
      resources,
      
    )