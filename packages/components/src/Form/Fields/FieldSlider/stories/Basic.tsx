/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSlider } from '../../FieldSlider'
import type { FieldSliderProps } from '../../FieldSlider'

export default function Basic(props: FieldSliderProps) {
  return <FieldSlider label="Basic" max={5} min={0} {...props} />
}
