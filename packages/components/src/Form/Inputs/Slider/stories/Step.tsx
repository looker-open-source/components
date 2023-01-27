/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Slider } from '..'
import type { SliderProps } from '../'

export default function Step(props: SliderProps) {
  const { max = 10000, step = 2500, ...restProps } = props

  return <Slider max={max} step={step} {...restProps} />
}
