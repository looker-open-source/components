import merge from 'lodash/merge';
import { thTH as visAdapterLocales } from '@looker/visualizations-adapters';
import { thTH as visTableLocales } from '@looker/visualizations-table';
import { thTH as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'ไม่มีรายการรองที่ส่งผ่านไปยังองค์ประกอบการสืบค้น',
    'Query component received both dashboard and query props': 'องค์ประกอบการสืบค้นได้รับคุณสมบัติของทั้งแดชบอร์ดและการสืบค้น'
  },
  QueryError: {
    Error: 'ข้อผิดพลาด'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'ขณะนี้ไม่รองรับค่าวัดประเภท "วันที่"',
    'No chart found for type "{{type}}"': 'ไม่พบแผนภูมิสำหรับประเภท "{{type}}"'
  }
};
export const thTH = {
  locale: 'th-TH',
  resources: {
    'th-TH': merge({}, resources, visAdapterLocales.resources['th-TH'], visTableLocales.resources['th-TH'], visVisxLocales.resources['th-TH'])
  }
};
//# sourceMappingURL=th-TH.js.map