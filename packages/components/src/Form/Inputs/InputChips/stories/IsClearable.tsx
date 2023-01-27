/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function IsClearable() {
  const [values, setValues] = useState(['cheddar', 'gouda'])

  return <InputChips isClearable={false} values={values} onChange={setValues} />
}
