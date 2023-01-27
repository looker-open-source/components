/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { FocusEvent, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { FloatingLabelFieldProps } from '../Field/types'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'
import { useFormContext } from '../../Form'
import { useID } from '../../../utils'
import type { InputTimeProps } from '../../Inputs/InputTime'
import { InputTime } from '../../Inputs/InputTime'

export interface FieldTimeProps
  extends FloatingLabelFieldProps,
    InputTimeProps {}

const checkValueOnBlur = (e: FocusEvent) => {
  const target = e.currentTarget
  const inputs = Array.from(target.querySelectorAll('input'))
  // Check all 3 inputs for a value
  return inputs.some(input => input.value !== '')
}

const FieldTimeComponent = forwardRef(
  (props: FieldTimeProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FloatingLabelField
        {...pickFieldProps(props)}
        id={id}
        validationMessage={validationMessage}
        hasValue={getHasValue(props)}
        checkValueOnBlur={checkValueOnBlur}
      >
        <InputTime
          {...omitFieldProps(props)}
          width="100%"
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

export const FieldTime = styled(FieldTimeComponent)``
