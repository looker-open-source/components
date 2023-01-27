/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Field } from '../../Field'
import { InputText } from '../../../Inputs'
import { Space } from '../../../../Layout'
import type { FieldProps } from '../../Field'
export default function Basic(props: FieldProps) {
  const id = 'coolField'
  return (
    <Field
      id={id}
      label="A combo field"
      description="Please fill out both inputs"
      detail="with 2 inputs"
      validationMessage={{ message: 'An error message', type: 'error' }}
      width={300}
      {...props}
    >
      <Space gap="u3">
        <InputText id={id} aria-describedby={`${id}-describedby`} width={100} />
        <InputText
          id={id}
          aria-describedby={`${id}-describedby`}
          validationType={'error'}
        />
      </Space>
    </Field>
  )
}
