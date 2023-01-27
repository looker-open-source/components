/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { FieldChips } from '../../FieldChips'
import type { FieldChipsProps } from '../../FieldChips'

export default function Basic(props: FieldChipsProps) {
  const [values, setValues] = useState<string[]>(['apples'])

  return <FieldChips {...props} values={values} onChange={setValues} />
}
