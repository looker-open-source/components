/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { RangeSlider } from '..'
import { Label } from '../../../../'
import type { RangeSliderProps } from '../'

export default function WithLabel(props: RangeSliderProps) {
  return (
    <>
      <Label id="slider-label">Slider:</Label>
      <RangeSlider aria-labelledby="slider-label" {...props} />
    </>
  )
}
