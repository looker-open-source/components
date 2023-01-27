/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { SelectMulti } from '..'
import { Space } from '../../../../../Layout'

export default function ClearIconLabel() {
  return (
    <Space>
      <SelectMulti
        clearIconLabel="remove all chips"
        defaultValues={['Cheddar']}
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
        placeholder="Cheeses"
      />
      <SelectMulti
        defaultValues={['Gouda', 'Feta']}
        chipIconLabel="remove this chip"
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
      />
      <SelectMulti
        clearIconLabel="remove all chips"
        defaultValues={['Cheddar', 'Swiss']}
        chipIconLabel="remove this chip"
        flex={1}
        options={[
          { value: 'Cheddar' },
          { value: 'Gouda' },
          { value: 'Swiss' },
          { value: 'Feta' },
        ]}
      />
    </Space>
  )
}
