/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { FC } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import { CheckboxGroup, CheckboxGroupProps } from '../../Inputs'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldCheckboxGroupProps
  extends CheckboxGroupProps,
    Omit<FieldProps, 'detail'> {
  inputsInline?: boolean
}

const FieldCheckboxGroupLayout: FC<FieldCheckboxGroupProps> = ({
  id: propsID,
  options,
  value,
  name,
  inputsInline,
  ...props
}) => {
  const validationMessage = useFormContext(props)
  const id = useID(propsID)

  return (
    <Field {...pickFieldProps(props)} id={id}>
      <CheckboxGroup
        {...omitFieldProps(props)}
        aria-describedby={`describedby-${id}`}
        aria-labelledby={`labelledby-${id}`}
        id={id}
        inline={props.inline || inputsInline}
        name={name || id}
        options={options}
        validationType={validationMessage && validationMessage.type}
        value={value}
      />
    </Field>
  )
}

FieldCheckboxGroupLayout.displayName = 'FieldCheckboxGroupLayout'

export const FieldCheckboxGroup = styled(FieldCheckboxGroupLayout)``
