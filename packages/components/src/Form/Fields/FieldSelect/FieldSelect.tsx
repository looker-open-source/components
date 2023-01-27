/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { SelectProps } from '../../Inputs/Select/Select'
import { Select } from '../../Inputs/Select/Select'
import type { FloatingLabelFieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'

export interface FieldSelectProps
  extends FloatingLabelFieldProps,
    SelectProps {}

const FieldSelectComponent = forwardRef(
  (props: FieldSelectProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FloatingLabelField
        {...pickFieldProps(props)}
        id={id}
        validationMessage={validationMessage}
        hasValue={getHasValue(props)}
      >
        <Select
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
          wrapperAriaLabel={`${props.label}`}
        />
      </FloatingLabelField>
    )
  }
)

FieldSelectComponent.displayName = 'FieldSelectComponent'

export const FieldSelect = styled(FieldSelectComponent)``
