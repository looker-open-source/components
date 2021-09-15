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

import type { Ref } from 'react'
import React, { forwardRef, useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { InputTextProps } from '../../Inputs/InputText'
import { InputText, InputTextContext } from '../../Inputs/InputText'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'

export interface FieldTextProps extends FieldProps, InputTextProps {}

const FieldTextComponent = forwardRef(
  (props: FieldTextProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    const validationMessage = useFormContext(props)
    const { space } = useContext(ThemeContext)
    const [beforeWidth, setBeforeWidth] = useState(0)
    return (
      <InputTextContext.Provider value={{ beforeWidth, setBeforeWidth }}>
        <Field
          id={id}
          validationMessage={validationMessage}
          hasValue={getHasValue(props)}
          labelOffset={
            props.iconBefore
              ? space.u8
              : props.before
              ? `${beforeWidth}px`
              : undefined
          }
          {...pickFieldProps(props)}
        >
          <InputText
            {...omitFieldProps(props)}
            id={id}
            aria-describedby={`describedby-${id}`}
            validationType={validationMessage && validationMessage.type}
            ref={ref}
          />
        </Field>
      </InputTextContext.Provider>
    )
  }
)

FieldTextComponent.displayName = 'FieldTextComponent'

export const FieldText = styled(FieldTextComponent)``
