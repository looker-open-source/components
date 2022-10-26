import merge from 'lodash/merge';
import { zhCN as visAdapterLocales } from '@looker/visualizations-adapters';
import { zhCN as visTableLocales } from '@looker/visualizations-table';
import { zhCN as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': '没有子项传递到查询组件',
    'Query component received both dashboard and query props': '查询组件同时收到了仪表板和查询属性'
  },
  QueryError: {
    Error: '错误'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": '当前不支持“日期”类型的度量值',
    'No chart found for type "{{type}}"': '找不到类型为“{{type}}”的图表'
  }
};
export const zhCN = {
  locale: 'zh-CN',
  resources: {
    'zh-CN': merge({}, resources, visAdapterLocales.resources['zh-CN'], visTableLocales.resources['zh-CN'], visVisxLocales.resources['zh-CN'])
  }
};
//# sourceMappingURL=zh-CN.js.map