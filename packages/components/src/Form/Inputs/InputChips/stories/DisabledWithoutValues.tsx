/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '..'

export default function DisabledWithoutValues() {
  const [values, setValues] = useState<string[]>([])

  return <InputChips disabled values={values} onChange={setValues} />
}
