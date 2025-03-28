import dateLocale from 'date-fns/locale/ko'
    import {koKR as visualizationsadaptersLocale} from '@looker/visualizations-adapters'
    import { mergeLocaleObjects } from '@looker/i18n'

    const resources = {
  "PieLegend": {
    "Legend page {{page}} of {{totalPages}}": "범례 {{page}}/{{totalPages}}페이지"
  },
  "PieLegendControls": {
    "Next page": "다음 페이지",
    "Previous page": "이전 페이지"
  },
  "XYTooltip": {
    "Points sized by": "포인트 크기 기준"
  }
}

    export const koKR = mergeLocaleObjects(
      [
        visualizationsadaptersLocale,
      ],
      'ko-KR',
      resources,
      dateLocale,
    )