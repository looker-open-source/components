/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { RadioProps } from '../../Inputs/Radio/Radio'
import { Radio } from '../../Inputs/Radio/Radio'
import { FieldInline, omitFieldProps, pickFieldProps } from '../Field'
import type { FieldBaseProps } from '../Field'

export interface FieldRadioProps extends RadioProps, FieldBaseProps {}

const FieldRadioLayout = forwardRef(
  (props: FieldRadioProps, ref: Ref<HTMLInputElement>) => {
    const validationMessage = useFormContext(props)
    const id = useID(props.id)
    return (
      <FieldInline
        id={id}
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <Radio
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          id={id}
          ref={ref}
          validationType={
            (validationMessage && validationMessage.type) ||
            props.validationType
          }
        />
      </FieldInline>
    )
  }
)

FieldRadioLayout.displayName = 'FieldRadioLayout'

export const FieldRadio = styled(FieldRadioLayout)``
