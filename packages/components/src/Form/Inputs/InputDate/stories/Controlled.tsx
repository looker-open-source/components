/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputDate } from '..'
import type { InputDateProps } from '..'

export default () => {
  const [value, setValue] = useState<InputDateProps['value']>(
    new Date('June 30, 2022')
  )
  const onChange = (date: InputDateProps['value']) => setValue(date)
  return <InputDate onChange={onChange} value={value} />
}
