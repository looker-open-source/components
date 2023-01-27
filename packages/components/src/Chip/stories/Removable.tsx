/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Chip, Space } from '../..'

export default function Removable() {
  const [values, setValues] = useState(['Cheddar', 'Gouda', 'Swiss'])
  function getDeleteHandler(item: string) {
    return () => {
      const newValues = values.filter(value => value !== item)
      setValues(newValues)
    }
  }
  return (
    <Space>
      {values.map(item => (
        <Chip onDelete={getDeleteHandler(item)} role="option" key={item}>
          {item}
        </Chip>
      ))}
    </Space>
  )
}
