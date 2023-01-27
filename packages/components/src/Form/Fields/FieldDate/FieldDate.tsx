/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { FieldProps, FloatingLabelFieldProps } from '../Field/types'
import { FloatingLabelField } from '../Field/FloatingLabelField'
import { omitFieldProps, pickFieldProps } from '../Field/Field'
import { useFormContext } from '../../Form'
import { useID } from '../../../utils/useID'
import type { InputDateProps } from '../../Inputs/InputDate'
import { InputDate } from '../../Inputs/InputDate'

export interface FieldDateProps
  extends FieldProps,
    FloatingLabelFieldProps,
    InputDateProps {}

export const FieldDate = styled(
  // eslint-disable-next-line react/display-name
  forwardRef((props: FieldDateProps, ref: Ref<HTMLInputElement>) => {
    const { defaultValue, id, onChange, value } = props
    const validationMessage = useFormContext(props)
    return (
      <FloatingLabelField
        checkValueOnBlur={false}
        hasValue={!!defaultValue || !!value}
        id={useID(id)}
        validationMessage={validationMessage}
        {...pickFieldProps(props)}
      >
        <InputDate
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={useID(id)}
          onChange={onChange}
          validationType={validationMessage && validationMessage.type}
          ref={ref}
        />
      </FloatingLabelField>
    )
  })
)``
