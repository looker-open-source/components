/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { FieldSelect } from '../../FieldSelect'

export default function OptionIcons() {
  return (
    <FieldSelect
      name="Cheeses"
      label="Cheeses"
      defaultValue="cheddar"
      options={[
        { icon: <MaterialIcons.Add />, label: 'Cheddar', value: 'cheddar' },
        { icon: <MaterialIcons.Add />, label: 'Gouda', value: 'gouda' },
        { icon: <MaterialIcons.Add />, label: 'Swiss', value: 'swiss' },
      ]}
    />
  )
}
