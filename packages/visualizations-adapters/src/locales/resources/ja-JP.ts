/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { jaJP as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Debug: {
    Config: '構成',
    Dimensions: 'ディメンション',
    Error: 'エラー',
    Measures: 'measure',
    Result: '結果',
    error: 'エラー',
    ok: 'OK',
  },
  ErrorBoundary: {
    'Something went wrong': '問題が発生しました',
  },
  KeyValueList: {
    false: 'false',
    null: 'null',
    true: 'true',
    undefined: '未定義',
  },
  useNormalizedPivotLabels: {
    'Row Total': '行全体',
  },
};

export const jaJP = mergeLocaleObjects([componentsLocale], 'ja-JP', resources);
