

import dateLocale from 'date-fns/locale/zh-CN';
import { zhCN as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '图例页 {{page}}，共 {{totalPages}} 页'
  },
  PieLegendControls: {
    'Next page': '下一页',
    'Previous page': '上一页'
  },
  XYTooltip: {
    'Points sized by': '点大小划分依据'
  }
};
export const zhCN = mergeLocaleObjects([visualizationsadaptersLocale], 'zh-CN', resources, dateLocale);
//# sourceMappingURL=zh-CN.js.map