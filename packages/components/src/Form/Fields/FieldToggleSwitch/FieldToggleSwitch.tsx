/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { ToggleSwitchProps } from '../../Inputs/ToggleSwitch/ToggleSwitch'
import { ToggleSwitch } from '../../Inputs/ToggleSwitch/ToggleSwitch'
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field'
import type { FieldBaseProps } from '../Field'

export interface FieldToggleSwitchProps
  extends FieldBaseProps,
    ToggleSwitchProps {}

const FieldToggleSwitchLayout = forwardRef(
  (props: FieldToggleSwitchProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FieldInline
        {...pickFieldProps(props)}
        validationMessage={validationMessage}
        id={id}
      >
        <ToggleSwitch
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          id={id}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
          mr="u1"
        />
      </FieldInline>
    )
  }
)

FieldToggleSwitchLayout.displayName = 'FieldToggleSwitchLayout'

export const FieldToggleSwitch = styled(FieldToggleSwitchLayout)``
