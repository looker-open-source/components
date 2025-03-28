import dateLocale from 'date-fns/locale/pt-BR'
    import {ptBR as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "Legenda da página {{page}} de {{totalPages}}"
  },
  "PieLegendControls": {
    "Next page": "Próxima página",
    "Previous page": "Página anterior"
  },
  "XYTooltip": {
    "Points sized by": "Pontos dimensionados por"
  }
}

    export const ptBR = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'pt-BR',
      resources,
      dateLocale,
    )