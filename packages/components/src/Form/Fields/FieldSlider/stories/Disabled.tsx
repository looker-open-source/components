/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSlider } from '../../FieldSlider'

export default function Disabled() {
  return <FieldSlider disabled={true} label="Disabled" max={5} min={0} />
}
