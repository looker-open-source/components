/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { ButtonGroup } from '../../..'

export default function Options() {
  const options = [{ value: 'CA' }, { value: 'AK' }, { value: 'UT' }]
  const [value, setValue] = useState([options[0].value])
  return <ButtonGroup options={options} value={value} onChange={setValue} />
}
