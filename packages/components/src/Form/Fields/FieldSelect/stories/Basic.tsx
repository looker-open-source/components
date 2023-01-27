/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldSelect } from '../../FieldSelect'
import type { FieldSelectProps } from '../../FieldSelect'

export default function Basic(props: FieldSelectProps) {
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
      {...props}
    />
  )
}
