/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Slider } from '..'
import type { SliderProps } from '../'

export default function InvalidValue(props: SliderProps) {
  const { min = 0, max = 10, value = 5000, ...restProps } = props

  return <Slider min={min} max={max} value={value} {...restProps} />
}
