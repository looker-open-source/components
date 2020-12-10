/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { ChangeEvent, FC, useState } from 'react'
import { FieldText, Form } from '@looker/components'

interface ValidationErrors {
  [key: string]: { message?: string; type?: 'error' }
}

interface FormValidationState {
  val1: string
  val2: string
  validationErrors: ValidationErrors
}

export const FormValidationDemo: FC<{}> = () => {
  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')
  const [validationErrors, setValidationErrors] = useState({})

  const validate = (value1: string, value2: string) => {
    const errors: ValidationErrors = {}
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
