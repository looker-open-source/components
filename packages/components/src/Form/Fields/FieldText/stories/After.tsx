/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function After(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    after = '%',
    ...restProps
  } = props

  return <FieldText name={name} label={label} after={after} {...restProps} />
}
