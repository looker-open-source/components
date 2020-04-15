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

import React from 'react'
import { Divider, Box, InputChips, Paragraph } from '@looker/components'

const emailValidator = new RegExp(
  /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export function InputChipsDemo() {
  const [values, setValues] = React.useState<string[]>(['apples'])
  const [values2, setValues2] = React.useState<string[]>(['bananas'])
  const [values3, setValues3] = React.useState<string[]>(['someone@looker.com'])
  const [inputValue, setInputValue] = React.useState('oranges')
  const [invalid, setInvalid] = React.useState('')
  const [duplicate, setDuplicate] = React.useState('')

  function handleChange(vals: string[]) {
    setValues(vals)
  }
  function handleChange2(vals: string[]) {
    setValues2(vals)
  }
  function handleChange3(vals: string[]) {
    setInvalid('')
    setDuplicate('')
    setValues3(vals)
  }
  function handleInputChange(value: string) {
    setInputValue(value)
  }
  function handleInvalid(values: string[]) {
    setInvalid(`Invalid email: ${values.join(', ')}`)
  }
  function handleDuplicate(values: string[]) {
    setDuplicate(`Duplicate email: ${values.join(', ')}`)
  }
  return (
    <Box m="xlarge">
      <InputChips
        width={300}
        values={values}
        onChange={handleChange}
        placeholder="Uncontrolled input text"
      />
      <Divider my="large" />
      <InputChips
        width={300}
        values={values2}
        inputValue={inputValue}
        onChange={handleChange2}
        onInputChange={handleInputChange}
      />
      <Divider my="large" />
      <InputChips
        width={400}
        values={values3}
        onChange={handleChange3}
        placeholder="Email validation"
        validate={(val) => emailValidator.test(val)}
        onValidationFail={handleInvalid}
        onDuplicate={handleDuplicate}
      />
      <Paragraph>
        {invalid} {duplicate}
      </Paragraph>
    </Box>
  )
}
