/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { FormEvent } from 'react'
import { Tabs2, Tab2, FieldText } from '../..'

export default function StateChanges() {
  const [value, setValue] = useState('')
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <Tabs2>
      <Tab2 label="Tab 1">Go to Tab 2 and try entering text in the field</Tab2>
      <Tab2 label="Tab 2">
        <FieldText value={value} onChange={handleChange} />
      </Tab2>
    </Tabs2>
  )
}
