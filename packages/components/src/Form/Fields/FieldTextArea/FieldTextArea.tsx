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

import React, { FC } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { useFormContext } from '../../Form'
import { TextArea, TextAreaProps } from '../../Inputs/TextArea'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldTextAreaProps extends FieldProps, TextAreaProps {}

const FieldTextAreaComponent: FC<FieldTextAreaProps> = ({ ...props }) => {
  const { id = uuid() } = props
  const validationMessage = useFormContext(props)
  return (
    <Field
      id={id}
      validationMessage={validationMessage}
      {...pickFieldProps(props)}
    >
      <TextArea
        {...omitFieldProps(props)}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

FieldTextAreaComponent.displayName = 'FieldTextAreaComponent'

export const FieldTextArea = styled(FieldTextAreaComponent)``
FieldTextArea.defaultProps = { width: '13rem' }
