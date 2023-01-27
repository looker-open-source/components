/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FormEvent } from 'react'
import React, { useState } from 'react'
import { Button, Space, SpaceVertical } from '../../../../'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '../'

export default function Basic(props: FieldTextAreaProps) {
  const {
    name: _name,
    label: _label,
    value: valueProp = 'Initial Value',
    ...restProps
  } = props
  const [value, setValue] = useState(valueProp)
  const handleReset = () => setValue(valueProp)
  const handleClear = () => setValue('')
  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  return (
    <SpaceVertical>
      <Space>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleClear}>Clear</Button>
      </Space>
      <FieldTextArea
        width="100%"
        label="Controlled"
        value={value}
        onChange={handleChange}
        {...restProps}
      />
    </SpaceVertical>
  )
}
