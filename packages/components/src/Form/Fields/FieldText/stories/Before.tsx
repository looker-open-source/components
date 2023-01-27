/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Before(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    before = '$',
    ...restProps
  } = props

  return <FieldText name={name} label={label} before={before} {...restProps} />
}
