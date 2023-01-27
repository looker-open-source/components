/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function Value(props: RangeSliderProps) {
  const { value = [3, 8], defaultValue = [3, 8], ...restProps } = props

  return (
    <>
      <RangeSlider defaultValue={defaultValue} {...restProps} />
      <RangeSlider value={value} {...restProps} />
    </>
  )
}
