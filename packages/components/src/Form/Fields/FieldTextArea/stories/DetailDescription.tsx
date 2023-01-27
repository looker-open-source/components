/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '..'

export default function DetailDescription(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'This is a description',
    detail = '0/50',
    ...restProps
  } = props

  return (
    <FieldTextArea
      name={name}
      label={label}
      description={description}
      detail={detail}
      {...restProps}
    />
  )
}
