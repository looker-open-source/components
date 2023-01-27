/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSlider } from '../../FieldSlider'

export default function FloatingSteps() {
  return (
    <FieldSlider label="Floating step" max={3} min={0} step={0.5} value={1.5} />
  )
}
