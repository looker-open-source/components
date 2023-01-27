/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSelect } from '../../FieldSelect'

export default function Error() {
  return (
    <FieldSelect
      name="Cheeses"
      label="Cheeses"
      defaultValue="cheddar"
      options={[
        { label: 'Cheddar', value: 'cheddar' },
        { label: 'Gouda', value: 'gouda' },
        { label: 'Swiss', value: 'swiss' },
      ]}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
}
