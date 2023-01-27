

import { koKR as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: '구성',
    Dimensions: '치수',
    Error: '오류',
    Measures: '측정치',
    Result: '결과',
    error: '오류',
    ok: '확인'
  },
  ErrorBoundary: {
    'Something went wrong': '문제가 발생했습니다.'
  },
  translation: {
    'Row Total': '행 총계',
    false: '거짓',
    null: 'null',
    true: '참',
    undefined: '정의되지 않음'
  },
  useNormalizedPivotLabels: {
    'Row Total': '행 총계'
  }
};
export const koKR = mergeLocaleObjects([componentsLocale], 'ko-KR', resources);
//# sourceMappingURL=ko-KR.js.map