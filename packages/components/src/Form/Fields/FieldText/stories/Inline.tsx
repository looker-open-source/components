/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Inline(props: FieldTextProps) {
  const {
    inline = true,
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props

  return (
    <FieldText
      name={name}
      label={label}
      inline={inline}
      detail={detail}
      {...restProps}
    />
  )
}
