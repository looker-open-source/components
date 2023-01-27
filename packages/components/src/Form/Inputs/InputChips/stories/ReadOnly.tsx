/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '../'

export default function ReadOnly() {
  const [values, setValues] = useState(['you', "can't", 'change', 'me', 'here'])

  return <InputChips readOnly values={values} onChange={setValues} />
}
