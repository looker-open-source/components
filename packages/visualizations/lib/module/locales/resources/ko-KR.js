

import { koKR as componentsLocale } from '@looker/components';
import { koKR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { koKR as visualizationstableLocale } from '@looker/visualizations-table';
import { koKR as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Query: {
    'No children passed to Query component': '쿼리 구성 요소에 전달된 하위 항목 없음',
    'Query component received both dashboard and query props': '쿼리 구성 요소에 대시보드와 쿼리 속성이 둘 다 수신됨'
  },
  QueryError: {
    Error: '오류'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "현재 '날짜' 유형의 Measure는 지원되지 않음",
    'No chart found for type "{{type}}"': '유형 "{{type}}"의 차트를 찾을 수 없음'
  }
};
export const koKR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'ko-KR', resources);
//# sourceMappingURL=ko-KR.js.map