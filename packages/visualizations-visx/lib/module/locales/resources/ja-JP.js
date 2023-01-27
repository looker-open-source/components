

import dateLocale from 'date-fns/locale/ja';
import { jaJP as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '凡例ページ（{{page}}/{{totalPages}}）'
  },
  PieLegendControls: {
    'Next page': '次のページ',
    'Previous page': '前のページ'
  },
  XYTooltip: {
    'Points sized by': 'ポイントのサイズ単位：'
  }
};
export const jaJP = mergeLocaleObjects([visualizationsadaptersLocale], 'ja-JP', resources, dateLocale);
//# sourceMappingURL=ja-JP.js.map