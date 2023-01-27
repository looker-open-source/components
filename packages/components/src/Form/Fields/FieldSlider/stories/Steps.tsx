/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSlider } from '../../FieldSlider'

export default function Steps() {
  return <FieldSlider label="Step" max={1000} min={0} step={100} />
}
