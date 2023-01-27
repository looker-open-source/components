

import dateLocale from 'date-fns/locale/th';
import { thTH as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'หน้าคำอธิบาย {{page}} จาก {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'หน้าถัดไป',
    'Previous page': 'หน้าก่อนหน้า'
  },
  XYTooltip: {
    'Points sized by': 'กำหนดขนาดจุดโดย'
  }
};
export const thTH = mergeLocaleObjects([visualizationsadaptersLocale], 'th-TH', resources, dateLocale);
//# sourceMappingURL=th-TH.js.map