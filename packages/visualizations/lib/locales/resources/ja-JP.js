import merge from 'lodash/merge';
import { jaJP as visAdapterLocales } from '@looker/visualizations-adapters';
import { jaJP as visTableLocales } from '@looker/visualizations-table';
import { jaJP as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'クエリコンポーネントに渡された子はありません',
    'Query component received both dashboard and query props': 'クエリコンポーネントはダッシュボードとクエリの両方のプロパティを受け取りました'
  },
  QueryError: {
    Error: 'エラー'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "タイプ 'date' の Measure は現在サポートされていません",
    'No chart found for type "{{type}}"': 'タイプ「{{type}}」のチャートが見つかりません'
  }
};
export const jaJP = {
  locale: 'ja-JP',
  resources: {
    'ja-JP': merge({}, resources, visAdapterLocales.resources['ja-JP'], visTableLocales.resources['ja-JP'], visVisxLocales.resources['ja-JP'])
  }
};
//# sourceMappingURL=ja-JP.js.map