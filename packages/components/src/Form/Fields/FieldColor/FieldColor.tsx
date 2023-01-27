/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { InputColorProps } from '../../Inputs/InputColor/InputColor'
import { InputColor } from '../../Inputs/InputColor/InputColor'
import type { FloatingLabelFieldProps, FieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldColorProps
  extends FieldProps,
    FloatingLabelFieldProps,
    InputColorProps {}

const FieldColorComponent = forwardRef(
  (props: FieldColorProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    const validationMessage = useFormContext(props)
    return (
      <FloatingLabelField
        hasValue={!!props.defaultValue || !!props.value}
        labelOffset="24px"
        id={id}
        ariaLabelOnly
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <InputColor
          {...omitFieldProps(props)}
          id={id}
          aria-labelledby={`labelledby-${id}`}
          aria-describedby={`describedby-${id}`}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </FloatingLabelField>
    )
  }
)

FieldColorComponent.displayName = 'FieldColorComponent'

export const FieldColor = styled(FieldColorComponent)``
