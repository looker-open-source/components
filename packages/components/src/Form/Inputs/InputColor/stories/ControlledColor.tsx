/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Select } from '../../Select'
import { Space } from '../../../../Layout'
import { Text } from '../../../../Text'
import { InputColor } from '../InputColor'

export default function ControlledColor() {
  const [color, setColor] = useState('red')

  function handleChange(value: string) {
    setColor(value)
  }

  function handleColorChange(e: React.FormEvent<HTMLInputElement>) {
    setColor(e.currentTarget.value)
  }
  return (
    <Space>
      <Select
        options={[{ value: 'green' }, { value: 'purple' }, { value: 'red' }]}
        value={color}
        onChange={handleChange}
        autoResize
      />
      <InputColor value={color} onChange={handleColorChange} />
      <Text>{color}</Text>
    </Space>
  )
}
