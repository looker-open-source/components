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

import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { useFormContext } from '../../Form'
import { Radio, RadioProps } from '../../Inputs/Radio/Radio'
import {
  FieldInline,
  FieldInlineProps,
  pickFieldProps,
  omitFieldProps,
} from '../FieldInline'

export interface FieldRadioProps
  extends RadioProps,
    Omit<FieldInlineProps, 'validationMessage'> {}

const FieldRadioLayout = forwardRef(
  (props: FieldRadioProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const { id = uuid() } = props
    return (
      <FieldInline
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <Radio {...omitFieldProps(props)} id={id} ref={ref} />
      </FieldInline>
    )
  }
)

FieldRadioLayout.displayName = 'FieldRadioLayout'

export const FieldRadio = styled(FieldRadioLayout)``
