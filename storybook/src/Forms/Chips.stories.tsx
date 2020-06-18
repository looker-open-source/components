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

import React, { useState } from 'react'
import { FieldChips, Grid, InputChips, Paragraph } from '@looker/components'

export const All = () => (
  <Grid>
    <FieldChipOptions />
    <Basic />
    <Controlled />
    <ValidationDuplicate />
  </Grid>
)

export default {
  component: All,
  title: 'Forms/Chips',
}

export const FieldChipOptions = () => {
  const [values, setValues] = useState<string[]>(['apples'])
  const handleChange = (vals: string[]) => setValues(vals)

  return (
    <Grid columns={1}>
      <FieldChips
        label="FieldChip's Label"
        onChange={handleChange}
        values={values}
      />
      <FieldChips
        detail="5/50"
        description="this is a description"
        label="FieldChip's Label"
        onChange={handleChange}
        values={values}
      />
      <FieldChips
        label="FieldChip's Label"
        onChange={handleChange}
        validationMessage={{
          message: 'This is an error',
          type: 'error',
        }}
        values={values}
      />
    </Grid>
  )
}

export const Basic = () => {
  const [values, setValues] = useState<string[]>(['apples'])
  const handleChange = (vals: string[]) => setValues(vals)

  return <InputChips values={values} onChange={handleChange} />
}

export const Controlled = () => {
  const [values, setValues] = useState<string[]>(['bananas'])
  const [inputValue, setInputValue] = useState('oranges')
  const handleChange = (vals: string[]) => setValues(vals)
  const handleInputChange = (value: string) => setInputValue(value)

  return (
    <InputChips
      values={values}
      inputValue={inputValue}
      onChange={handleChange}
      onInputChange={handleInputChange}
      summary="summary"
    />
  )
}

const emailValidator = new RegExp(
  /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export const ValidationDuplicate = () => {
  const [values, setValues] = useState<string[]>(['bob@internet.com'])
  const [invalid, setInvalid] = useState('')
  const [duplicate, setDuplicate] = useState('')

  const handleChange = (vals: string[]) => {
    setInvalid('')
    setDuplicate('')
    setValues(vals)
  }

  const handleInvalid = (values: string[]) =>
    setInvalid(`Invalid email: ${values.join(', ')}`)

  const handleDuplicate = (values: string[]) =>
    setDuplicate(`Duplicate email: ${values.join(', ')}`)

  return (
    <>
      <InputChips
        values={values}
        onChange={handleChange}
        placeholder="Email validation"
        validate={(val: string) => emailValidator.test(val)}
        onValidationFail={handleInvalid}
        onDuplicate={handleDuplicate}
      />
      <Paragraph>
        {invalid} {duplicate}
      </Paragraph>
    </>
  )
}
