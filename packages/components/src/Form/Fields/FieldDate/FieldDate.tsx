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

import { getDateLocale } from '@looker/i18n'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { FieldProps, FloatingLabelFieldProps } from '../Field/types'
import { FloatingLabelField } from '../Field/FloatingLabelField'
import { omitFieldProps, pickFieldProps } from '../Field/Field'
import { useFormContext } from '../../Form'
import { useID } from '../../../utils/useID'
import type { InputDateProps } from '../../Inputs/InputDate'
import { InputDate } from '../../Inputs/InputDate'

export interface FieldDateProps
  extends FieldProps,
    FloatingLabelFieldProps,
    InputDateProps {}

export const FieldDate = styled(
  // eslint-disable-next-line react/display-name
  forwardRef((props: FieldDateProps, ref: Ref<HTMLInputElement>) => {
    const {
      dateStringFormat,
      defaultValue,
      id,
      locale = getDateLocale(),
      onChange,
      value,
    } = props
    const validationMessage = useFormContext(props)
    return (
      <FloatingLabelField
        checkValueOnBlur={false}
        description={
          dateStringFormat ||
          locale.formatLong?.date({ width: 'short' }).toUpperCase()
        }
        hasValue={!!defaultValue || !!value}
        id={useID(id)}
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <InputDate
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={useID(id)}
          onChange={onChange}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </FloatingLabelField>
    )
  })
)``
