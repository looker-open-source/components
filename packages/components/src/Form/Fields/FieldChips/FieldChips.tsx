/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { InputChipsProps } from '../../Inputs/InputChips/InputChips'
import { InputChips } from '../../Inputs/InputChips/InputChips'
import type { FloatingLabelFieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldChipsProps
  extends FloatingLabelFieldProps,
    InputChipsProps {}

const FieldChipsComponent = forwardRef(
  (props: FieldChipsProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    const validationMessage = useFormContext(props)

    return (
      <FloatingLabelField
        id={id}
        validationMessage={validationMessage}
        hasValue={props.values.length > 0}
        checkValueOnBlur={false}
        {...pickFieldProps(props)}
      >
        <InputChips
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          id={id}
          onChange={props.onChange}
          ref={ref}
          validationType={validationMessage && validationMessage.type}
          values={props.values}
        />
      </FloatingLabelField>
    )
  }
)

FieldChipsComponent.displayName = 'FieldChipsComponent'

export const FieldChips = styled(FieldChipsComponent)``
