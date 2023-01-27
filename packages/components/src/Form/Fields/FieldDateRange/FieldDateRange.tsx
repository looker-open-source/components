/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FocusEvent, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FloatingLabelField } from '../Field/FloatingLabelField'
import { omitFieldProps, pickFieldProps } from '../Field/Field'
import { useFormContext } from '../../Form'
import { useID } from '../../../utils'
import type { InputDateRangeProps } from '../../Inputs/InputDateRange'
import { InputDateRange } from '../../Inputs/InputDateRange'
import type { FieldProps, FloatingLabelFieldProps } from '../Field'

export interface FieldInputDateRangeProps
  extends FieldProps,
    FloatingLabelFieldProps,
    InputDateRangeProps {
  ref: Ref<HTMLInputElement>
}

const checkValueOnBlur = (e: FocusEvent) => {
  const inputs = Array.from(e.currentTarget.querySelectorAll('input'))
  // Check both inputs (to - from) for a value
  return inputs.some(input => input.value !== '')
}

export const FieldDateRange = styled(
  forwardRef((props: FieldInputDateRangeProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)

    return (
      <FloatingLabelField
        {...pickFieldProps(props)}
        checkValueOnBlur={checkValueOnBlur}
        hasValue={!!props.value}
        id={id}
        validationMessage={validationMessage}
      >
        <InputDateRange
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={id}
          onChange={props.onChange}
          value={props.value}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </FloatingLabelField>
    )
  })
)``
