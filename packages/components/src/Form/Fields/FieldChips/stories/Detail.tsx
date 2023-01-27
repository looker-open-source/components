/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'

export default function Detail() {
  const [values, setValues] = useState<string[]>(['apples'])

  return <FieldChips detail="Detail..." values={values} onChange={setValues} />
}
