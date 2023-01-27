/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { FieldSelectMulti } from '../../FieldSelectMulti'

export default function Description() {
  return (
    <FieldSelectMulti
      description="this is the description"
      label="Label"
      options={[
        { icon: <MaterialIcons.Add />, label: 'Grape', value: 'grape' },
        { icon: <MaterialIcons.Add />, label: 'Banana', value: 'banana' },
        { icon: <MaterialIcons.Add />, label: 'Apple', value: 'apple' },
      ]}
      placeholder="Search fruits"
      isFilterable={true}
    />
  )
}
