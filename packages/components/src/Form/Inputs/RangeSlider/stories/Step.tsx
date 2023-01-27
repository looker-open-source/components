/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import type { RangeSliderProps } from '../'

export default function Step(props: RangeSliderProps) {
  const { max = 10000, step = 2500, ...restProps } = props

  return <RangeSlider max={max} step={step} {...restProps} />
}
