

import { zhTW as componentsLocale } from '@looker/components';
import { zhTW as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': '按住 Shift 再按一下以排序其他資料欄',
    'Sort ascending': '排序遞增',
    'Sort descending': '排序遞減',
    Totals: '總計'
  }
};
export const zhTW = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'zh-TW', resources);
//# sourceMappingURL=zh-TW.js.map