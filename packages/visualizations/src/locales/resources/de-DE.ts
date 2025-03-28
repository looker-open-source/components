
    import {deDE as componentsLocale} from '@looker/components'
import {deDE as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
import {deDE as visualizationstableLocale} from '@looker/visualizations-table'
import {deDE as visualizationsvisxLocale} from '@looker/visualizations-visx'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "Query": {
    "No children passed to Query component": "Keine untergeordneten Elemente an Abfragekomponente übergeben",
    "Query component received both dashboard and query props": "Die Abfragekomponente hat sowohl Dashboard- als auch Abfrageattribute erhalten"
  },
  "QueryError": {
    "Error": "Fehler"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Messungen vom Typ „Datum“ werden derzeit nicht unterstützt",
    "No chart found for type \"{{type}}\"": "Kein Diagramm für den Typ „{{type}}“ gefunden"
  }
}

    export const deDE = mergeLocaleObjects(
      [
        componentsLocale,
visualizationsadaptersLocale,
visualizationstableLocale,
visualizationsvisxLocale,
      ],
      'de-DE',
      resources,
      
    )