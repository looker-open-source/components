/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Checkbox } from '../Checkbox'

export default function OnChange() {
  const [checked, setChecked] = useState(true)
  const handleChange = () => setChecked(!checked)
  return <Checkbox checked={checked} onChange={handleChange} />
}
