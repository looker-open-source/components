/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useTranslation } from '../../../../../../utils'
import type { RelativeTimeframeModel } from '../types/relative_timeframe_types'
import { formatDate } from './format_date'

export const useRelativeTimeframeToString = (
  timeframe: RelativeTimeframeModel
): string => {
  const { t } = useTranslation('get_relative_timeframe_presets')
  return typeof timeframe === 'string'
    ? t(timeframe)
    : `${formatDate(timeframe.from)} - ${formatDate(timeframe.to)}`
}
