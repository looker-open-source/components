/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhCN as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: '配置',
    Dimensions: '维度',
    Error: '错误',
    Measures: '度量值',
    Result: '结果',
    error: '错误',
    ok: '确认',
  },
  ErrorBoundary: {
    'Something went wrong': '出错了',
  },
  translation: {
    'Row Total': '行总计',
    false: 'False',
    null: '空值',
    true: 'True',
    undefined: '未定义',
  },
  useNormalizedPivotLabels: {
    'Row Total': '行总计',
  },
}

export const zhCN = mergeLocaleObjects([componentsLocale], 'zh-CN', resources)
