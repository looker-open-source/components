/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { InputChips } from '..'
import { Space } from '../../../..'

export default function FormatInputFalse() {
  const [values, setValues] = useState([' initial  ', '  values'])
  return (
    <Space>
      <InputChips
        values={values}
        onChange={setValues}
        formatInputValue={false}
        width={400}
      />
      <pre data-testid="pre">{JSON.stringify(values)}</pre>
    </Space>
  )
}
