/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ChangeEvent } from 'react'
import React, { useState } from 'react'
import type { ValidationMessages } from '../..'
import { FieldText, Form } from '../..'

export default function Validation() {
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [validationErrors, setValidationErrors] = useState<ValidationMessages>(
    {}
  )
  const validate = (value1: typeof val1, value2: typeof val2) => {
    const errors: typeof validationErrors = {}
    if (value1.length >= 5) {
      errors.val1 = {
        message: 'Error! String greater than 5 characters.',
        type: 'error',
      }
    }
    if (value2.length <= 5) {
      errors.val2 = {
        message: 'Error! String less than 5 characters.',
        type: 'error',
      }
    }
    setValidationErrors(errors)
  }
  const onChangeVal1 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal1(event.currentTarget.value)
    validate(event.currentTarget.value, val2)
  }
  const onChangeVal2 = (event: ChangeEvent<HTMLInputElement>) => {
    setVal2(event.currentTarget.value)
    validate(val1, event.currentTarget.value)
  }
  return (
    <Form validationMessages={validationErrors}>
      <FieldText
        name="val1"
        value={val1}
        label="A Field requiring less than 5 characters"
        onChange={onChangeVal1}
      />
      <FieldText
        name="val2"
        value={val2}
        label="A Field requiring more than 5 characters"
        onChange={onChangeVal2}
      />
    </Form>
  )
}
