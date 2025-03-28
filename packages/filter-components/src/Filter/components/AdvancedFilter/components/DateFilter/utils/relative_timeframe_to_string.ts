/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { useRelativeTimeframePresets } from '../components/RelativeTimeframes/utils/get_relative_timeframe_presets';
import type { RelativeTimeframeModel } from '../types/relative_timeframe_types';
import { formatDate } from './format_date';

export const useRelativeTimeframeToString = (
  timeframe: RelativeTimeframeModel
): string => {
  const relativeTimeframes = useRelativeTimeframePresets();
  if (typeof timeframe === 'string') {
    return relativeTimeframes[timeframe] || timeframe;
  } else {
    return `${formatDate(timeframe.from)} - ${formatDate(timeframe.to)}`;
  }
};
