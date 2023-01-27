/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { PageSize } from '..'

export default function AlwaysVisible() {
  const [value, setValue] = useState(100)
  return <PageSize alwaysVisible total={3} value={value} onChange={setValue} />
}
