/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldRangeSlider } from '../'

export default function Steps() {
  return <FieldRangeSlider max={1000} min={100} step={100} />
}
