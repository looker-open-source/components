/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function MinMax(props: RangeSliderProps) {
  const { min = 10, max = 20, defaultValue = [13, 17], ...restProps } = props

  return (
    <RangeSlider
      min={min}
      max={max}
      defaultValue={defaultValue}
      {...restProps}
    />
  )
}
