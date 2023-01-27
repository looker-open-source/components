/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '../..'

export default function NoResize(props: FieldTextAreaProps) {
  const {
    resize = false,
    name = 'firstName',
    label = 'First Name',
    ...restProps
  } = props

  return (
    <FieldTextArea name={name} label={label} resize={resize} {...restProps} />
  )
}
