/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function Disabled(props: RangeSliderProps) {
  const { defaultValue = [2, 3], disabled = true, ...restProps } = props

  return (
    <RangeSlider
      defaultValue={defaultValue}
      disabled={disabled}
      {...restProps}
    />
  )
}
