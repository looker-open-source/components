/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '../..'

export default function Inline(props: FieldTextAreaProps) {
  const {
    inline = true,
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props

  return (
    <FieldTextArea
      name={name}
      label={label}
      inline={inline}
      detail={detail}
      {...restProps}
    />
  )
}
