

import { jaJP as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: '構成',
    Dimensions: 'Dimension',
    Error: 'エラー',
    Measures: 'Measure',
    Result: '結果',
    error: 'エラー',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': '問題が発生しました'
  },
  translation: {
    'Row Total': '行の合計',
    false: 'false',
    null: 'null',
    true: 'true',
    undefined: 'undefined'
  },
  useNormalizedPivotLabels: {
    'Row Total': '行の合計'
  }
};
export const jaJP = mergeLocaleObjects([componentsLocale], 'ja-JP', resources);
//# sourceMappingURL=ja-JP.js.map