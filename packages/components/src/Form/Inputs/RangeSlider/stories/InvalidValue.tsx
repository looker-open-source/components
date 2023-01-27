/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function InvalidValue(props: RangeSliderProps) {
  const {
    min = 100,
    max = 200,
    defaultValue = [105, 1950],
    ...restProps
  } = props

  return (
    <RangeSlider
      min={min}
      max={max}
      defaultValue={defaultValue}
      {...restProps}
    />
  )
}
