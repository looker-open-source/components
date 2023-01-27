

import dateLocale from 'date-fns/locale/ko';
import { koKR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '범례 페이지 {{page}}/{{totalPages}}'
  },
  PieLegendControls: {
    'Next page': '다음 페이지',
    'Previous page': '이전 페이지'
  },
  XYTooltip: {
    'Points sized by': '점수 크기 지정 기준'
  }
};
export const koKR = mergeLocaleObjects([visualizationsadaptersLocale], 'ko-KR', resources, dateLocale);
//# sourceMappingURL=ko-KR.js.map