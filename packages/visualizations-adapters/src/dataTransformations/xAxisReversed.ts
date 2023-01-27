/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ConfigHelper, CommonCartesianProperties } from '../types'

/**
 * Data transformation reverses order when config.x_axis[0].reversed is true
 */

export const xAxisReversed: ConfigHelper<CommonCartesianProperties> = ({
  data,
  fields,
  config,
}) => {
  const xAxisReversed = (config as CommonCartesianProperties)?.x_axis?.[0]
    .reversed

  const dataCopy = xAxisReversed ? data.slice().reverse() : data

  return { data: dataCopy, fields, config }
}
