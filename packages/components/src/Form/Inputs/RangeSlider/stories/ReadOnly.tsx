/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function ReadOnly(props: RangeSliderProps) {
  const { defaultValue = [2, 3], readOnly = true, ...restProps } = props

  return (
    <RangeSlider
      defaultValue={defaultValue}
      readOnly={readOnly}
      {...restProps}
    />
  )
}
