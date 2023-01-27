/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Slider } from '..'
import type { SliderProps } from '../'

export default function Disabled(props: SliderProps) {
  const { disabled = true, ...restProps } = props

  return <Slider disabled={disabled} {...restProps} />
}
