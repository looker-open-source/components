/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { InputTextProps } from '../../Inputs/InputText'
import { InputText, InputTextContext } from '../../Inputs/InputText'
import type { FieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'

export interface FieldTextProps extends FieldProps, InputTextProps {}

const FieldTextComponent = forwardRef(
  (props: FieldTextProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    const validationMessage = useFormContext(props)
    const { space } = useTheme()
    const [beforeWidth, setBeforeWidth] = useState(0)
    let labelOffset
    if (props.iconBefore) {
      labelOffset = space.u8
    } else if (props.before) {
      labelOffset = `${beforeWidth}px`
    }

    return (
      <InputTextContext.Provider value={{ beforeWidth, setBeforeWidth }}>
        <FloatingLabelField
          id={id}
          validationMessage={validationMessage}
          hasValue={getHasValue(props)}
          labelOffset={labelOffset}
          {...pickFieldProps(props)}
        >
          <InputText
            {...omitFieldProps(props)}
            id={id}
            aria-describedby={`describedby-${id}`}
            validationType={validationMessage && validationMessage.type}
            ref={ref}
          />
        </FloatingLabelField>
      </InputTextContext.Provider>
    )
  }
)

FieldTextComponent.displayName = 'FieldTextComponent'

export const FieldText = styled(FieldTextComponent)``
