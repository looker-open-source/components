/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { CheckboxProps } from '../../Inputs/Checkbox/Checkbox'
import { Checkbox } from '../../Inputs/Checkbox/Checkbox'
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field'
import type { FieldBaseProps } from '../Field'

export interface FieldCheckboxProps extends CheckboxProps, FieldBaseProps {}

const FieldCheckboxLayout = forwardRef(
  (props: FieldCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FieldInline
        {...pickFieldProps(props)}
        validationMessage={validationMessage}
        id={id}
      >
        <Checkbox
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          id={id}
          validationType={
            (validationMessage && validationMessage.type) ||
            props.validationType
          }
          ref={ref}
        />
      </FieldInline>
    )
  }
)

FieldCheckboxLayout.displayName = 'FieldCheckboxLayout'

export const FieldCheckbox = styled(FieldCheckboxLayout)``
