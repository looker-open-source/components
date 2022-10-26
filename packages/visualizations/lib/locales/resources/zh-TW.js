import merge from 'lodash/merge';
import { zhTW as visAdapterLocales } from '@looker/visualizations-adapters';
import { zhTW as visTableLocales } from '@looker/visualizations-table';
import { zhTW as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': '沒有傳遞至查詢元件的子項目',
    'Query component received both dashboard and query props': 'Dashboard 和查詢屬性接收到的查詢元件'
  },
  QueryError: {
    Error: '錯誤'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": '目前不支援的「日期」類型量值',
    'No chart found for type "{{type}}"': '沒有「{{type}}」類型的圖表'
  }
};
export const zhTW = {
  locale: 'zh-TW',
  resources: {
    'zh-TW': merge({}, resources, visAdapterLocales.resources['zh-TW'], visTableLocales.resources['zh-TW'], visVisxLocales.resources['zh-TW'])
  }
};
//# sourceMappingURL=zh-TW.js.map