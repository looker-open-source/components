/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Description(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    ...restProps
  } = props

  return (
    <FieldText
      name={name}
      label={label}
      description={description}
      {...restProps}
    />
  )
}
