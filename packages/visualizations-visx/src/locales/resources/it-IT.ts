import dateLocale from 'date-fns/locale/it'
    import {itIT as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "Pagina {{page}} di {{totalPages}} della legenda"
  },
  "PieLegendControls": {
    "Next page": "Pagina successiva",
    "Previous page": "Pagina precedente"
  },
  "XYTooltip": {
    "Points sized by": "Punti dimensionati per"
  }
}

    export const itIT = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'it-IT',
      resources,
      dateLocale,
    )