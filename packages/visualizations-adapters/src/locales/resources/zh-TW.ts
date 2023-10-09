/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhTW as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Debug: {
    Config: '設定',
    Dimensions: '維度',
    Error: '錯誤',
    Measures: '度量',
    Result: '結果',
    error: '錯誤',
    ok: '正常',
  },
  ErrorBoundary: {
    'Something went wrong': '發生錯誤',
  },
  KeyValueList: {
    false: '否',
    null: '空值',
    true: '是',
    undefined: '未定義',
  },
  useNormalizedPivotLabels: {
    'Row Total': '資料列總計',
  },
};

export const zhTW = mergeLocaleObjects([componentsLocale], 'zh-TW', resources);
