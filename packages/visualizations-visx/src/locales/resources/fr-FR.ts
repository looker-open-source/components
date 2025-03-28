import dateLocale from 'date-fns/locale/fr'
    import {frFR as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "Page de légende {{page}} sur {{totalPages}}"
  },
  "PieLegendControls": {
    "Next page": "Page suivante",
    "Previous page": "Page précédente"
  },
  "XYTooltip": {
    "Points sized by": "Points dimensionnés suivant"
  }
}

    export const frFR = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'fr-FR',
      resources,
      dateLocale,
    )