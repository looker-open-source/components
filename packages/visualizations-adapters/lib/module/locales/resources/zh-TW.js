

import { zhTW as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: '設定',
    Dimensions: '維度',
    Error: '錯誤',
    Measures: '量值',
    Result: '結果',
    error: '錯誤',
    ok: '好'
  },
  ErrorBoundary: {
    'Something went wrong': '發生錯誤了'
  },
  translation: {
    'Row Total': '資料列總計',
    false: '假',
    null: 'Null',
    true: '真',
    undefined: '未定義'
  },
  useNormalizedPivotLabels: {
    'Row Total': '資料列總計'
  }
};
export const zhTW = mergeLocaleObjects([componentsLocale], 'zh-TW', resources);
//# sourceMappingURL=zh-TW.js.map