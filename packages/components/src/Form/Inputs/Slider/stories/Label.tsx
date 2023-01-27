/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Slider } from '..'
import { Label } from '../../../'
import type { SliderProps } from '../'

export default function LabeledSlider(props: SliderProps) {
  return (
    <>
      <Label id="slider-label">Slider:</Label>
      <Slider aria-labelledby="slider-label" {...props} />
    </>
  )
}
