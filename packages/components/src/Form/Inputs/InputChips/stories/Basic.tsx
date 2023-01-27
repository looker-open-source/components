/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function Basic() {
  const [values, setValues] = useState(['cheddar', 'gouda'])

  return (
    <InputChips
      placeholder="Enter multiple values"
      values={values}
      onChange={setValues}
    />
  )
}
