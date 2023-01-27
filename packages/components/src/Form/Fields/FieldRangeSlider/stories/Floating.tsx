/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldRangeSlider } from '../'

export default function Floating() {
  return <FieldRangeSlider max={3.7} min={0.1} step={0.1} />
}
