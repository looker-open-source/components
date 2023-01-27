/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function ClearIconLabel() {
  const [values, setValues] = useState(['cheddar', 'gouda'])

  return (
    <InputChips
      clearIconLabel="remove all chips"
      chipIconLabel="remove this chip"
      values={values}
      onChange={setValues}
    />
  )
}
