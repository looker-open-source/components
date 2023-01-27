/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import type { RangeModifier } from '../../../../Calendar'
import { InputDateRange } from '../InputDateRange'

export default function Disabled() {
  const [value, setValue] = useState<RangeModifier>({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  })
  return <InputDateRange disabled value={value} onChange={setValue} />
}
