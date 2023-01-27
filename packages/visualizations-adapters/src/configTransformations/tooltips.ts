/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ConfigHelper, CommonCartesianProperties } from '../types'

/**
 * Add option to enable or disable tooltips
 */
export const tooltips: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  const isTooltipsSet = typeof config.tooltips !== 'undefined'

  return {
    config: {
      ...config,
      tooltips: isTooltipsSet ? config.tooltips : true,
    },
    data,
    fields,
  }
}
