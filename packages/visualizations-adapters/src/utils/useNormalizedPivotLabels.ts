/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Pivots } from '../types'
import { useTranslation } from './useTranslation'

export const useNormalizedPivotLabels = (pivots?: Pivots) => {
  const { t } = useTranslation('useNormalizedPivotLabels')

  if (!pivots) {
    return undefined
  }

  return pivots.map((pivot) => {
    const { key, is_total } = pivot
    const capitalizedPivotValue = is_total
      ? t('Row Total')
      : key[0].toUpperCase() + key.slice(1)
    return { ...pivot, label: capitalizedPivotValue }
  })
}
