import dateLocale from 'date-fns/locale/de'
    import {deDE as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "Legendenseite {{page}} von {{totalPages}}"
  },
  "PieLegendControls": {
    "Next page": "Nächste Seite",
    "Previous page": "Vorherige Seite"
  },
  "XYTooltip": {
    "Points sized by": "Punktgröße nach"
  }
}

    export const deDE = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'de-DE',
      resources,
      dateLocale,
    )