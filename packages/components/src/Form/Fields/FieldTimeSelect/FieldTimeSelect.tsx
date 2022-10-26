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

import type { Ref } from 'react'
import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import type { FloatingLabelFieldProps } from '../Field/types'
import type { ValidationMessageProps } from '../../ValidationMessage'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'
import { useFormContext } from '../../Form'
import { Tooltip } from '../../../Tooltip'
import { useID, useTranslation } from '../../../utils'
import type { InputTimeSelectProps } from '../../Inputs/InputTimeSelect'
import { InputTimeSelect } from '../../Inputs/InputTimeSelect'
import { VisuallyHidden } from '../../../VisuallyHidden'

export interface FieldTimeSelectProps
  extends FloatingLabelFieldProps,
    InputTimeSelectProps {}

export const FieldTimeSelect = styled(
  forwardRef((props: FieldTimeSelectProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    const fieldProps = omit(omitFieldProps(props), ['onChange'])
    const [formatError, setFormatError] = useState('')
    const { t } = useTranslation('FieldTimeSelect')
    const onChange = (value?: string) => {
      props.onChange && props.onChange(value)
      if (value) {
        setFormatError('')
      } else {
        setFormatError(t('Please use format HHMM'))
      }
    }

    const onBlur = () => {
      // Clear the format errors on blur since the combobox will revert back to
      // the previously selected value or the new value is it is valid
      setFormatError('')
    }
    const errorMessage = (formatError
      ? { message: formatError, type: 'error' }
      : validationMessage) as ValidationMessageProps
    return (
      <FloatingLabelField
        data-testid="FieldSelectMultiId"
        {...pickFieldProps(props)}
        id={id}
        hasValue={getHasValue(props)}
      >
        <Tooltip
          placement="top-end"
          content={formatError}
          isOpen={true}
          canClose={() => false}
        >
          <div>
            <VisuallyHidden aria-live="polite">{formatError}</VisuallyHidden>
            <InputTimeSelect
              {...fieldProps}
              aria-labelledby={`labelledby-${id}`}
              id={id}
              validationType={errorMessage?.type}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
        </Tooltip>
      </FloatingLabelField>
    )
  })
)``
