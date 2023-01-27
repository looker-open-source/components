/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { InputSearch } from '../'
import type { SelectOptionObject } from '../../'
import { Space } from '../../../../'

export default function Options() {
  const cheeses = [
    {
      description: 'Delicious cheese',
      detail: 'Netherlands ',
      value: 'Gouda',
    },
    { value: 'Cheddar' },
  ]

  const cheeses2 = [{ value: 'Jack' }, { value: 'Swiss' }]

  const handleSelectOption = (option?: SelectOptionObject) =>
    option && alert(`You picked ${option.value}`)

  return (
    <Space>
      <InputSearch
        options={cheeses}
        onSelectOption={handleSelectOption}
        changeOnSelect={false}
        placeholder="Options act like results"
      />
      <InputSearch
        options={cheeses2}
        placeholder="Options act like suggestions"
      />
    </Space>
  )
}
