/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Slider } from '..'
import type { SliderProps } from '../'

export default function MinMaxValue(props: SliderProps) {
  const { min = 10, max = 20, value = 15, ...restProps } = props

  return <Slider min={min} max={max} value={value} {...restProps} />
}
