import { jaJP as componentsLocale } from '@looker/components';
import { jaJP as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { jaJP as visualizationstableLocale } from '@looker/visualizations-table';
import { jaJP as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  "Query": {
    "No children passed to Query component": "クエリ コンポーネントに渡された子はありません",
    "Query component received both dashboard and query props": "クエリ コンポーネントが、ダッシュボードとクエリの両方のプロパティを受け取りました"
  },
  "QueryError": {
    "Error": "エラー"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "現在、「date」タイプの measure には対応していません",
    "No chart found for type \"{{type}}\"": "タイプ「{{type}}」のグラフは見つかりませんでした"
  }
};
export const jaJP = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'ja-JP', resources);
//# sourceMappingURL=ja-JP.js.map