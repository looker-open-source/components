/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
