/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { FocusEvent, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { SelectMultiProps } from '../../Inputs/Select/SelectMulti'
import { SelectMulti } from '../../Inputs/Select/SelectMulti'
import type { FloatingLabelFieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldSelectMultiProps
  extends FloatingLabelFieldProps,
    SelectMultiProps {}

const getHasValue = ({ values, defaultValues }: SelectMultiProps) => {
  if (values !== undefined) return values.length > 0
  if (defaultValues !== undefined) return defaultValues.length > 0
  return false
}

const checkValueOnBlur = (e: FocusEvent) => {
  const target = e.currentTarget
  const options = target.querySelectorAll('[role="option"]')
  return options.length !== 0
}

const FieldSelectMultiComponent = forwardRef(
  (props: FieldSelectMultiProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FloatingLabelField
        data-testid="FieldSelectMultiId"
        {...pickFieldProps(props)}
        id={id}
        ariaLabelOnly
        validationMessage={validationMessage}
        hasValue={getHasValue(props)}
        checkValueOnBlur={checkValueOnBlur}
      >
        <SelectMulti
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </FloatingLabelField>
    )
  }
)

FieldSelectMultiComponent.displayName = 'FieldSelectMultiComponent'

export const FieldSelectMulti = styled(FieldSelectMultiComponent)`
  width: 100%;
`
