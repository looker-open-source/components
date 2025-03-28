
    import {esES as componentsLocale} from '@looker/components'
import {esES as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
import {esES as visualizationstableLocale} from '@looker/visualizations-table'
import {esES as visualizationsvisxLocale} from '@looker/visualizations-visx'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Query": {
    "No children passed to Query component": "No se pasaron elementos secundarios al componente de consulta",
    "Query component received both dashboard and query props": "El componente de consulta recibió las propiedades de panel y de consulta"
  },
  "QueryError": {
    "Error": "Error"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "En este momento, no se admiten las mediciones de tipo “date”",
    "No chart found for type \"{{type}}\"": "No se encontró ningún gráfico para el tipo \"{{type}}\""
  }
}

    export const esES = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
visualizationstableLocale,
visualizationsvisxLocale,
      ],
      'es-ES',
      resources,
      
    )