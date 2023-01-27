/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '..'

export default function DisabledStory(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    defaultValue = 'Default value',
    disabled = true,
    ...restProps
  } = props

  return (
    <FieldTextArea
      name={name}
      label={label}
      defaultValue={defaultValue}
      disabled={disabled}
      {...restProps}
    />
  )
}
