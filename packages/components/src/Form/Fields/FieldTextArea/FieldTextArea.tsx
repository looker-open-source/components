/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { TextAreaProps } from '../../Inputs/TextArea'
import { TextArea } from '../../Inputs/TextArea'
import type { FloatingLabelFieldProps } from '../Field'
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field'
import { getHasValue } from '../Field/useFloatingLabel'

export interface FieldTextAreaProps
  extends FloatingLabelFieldProps,
    TextAreaProps {}

export const FieldTextArea = styled((props: FieldTextAreaProps) => {
  const id = useID(props.id)
  const validationMessage = useFormContext(props)
  return (
    <FloatingLabelField
      {...pickFieldProps(props)}
      id={id}
      validationMessage={validationMessage}
      hasValue={getHasValue(props)}
    >
      <TextArea
        {...omitFieldProps(props)}
        id={id}
        aria-describedby={`describedby-${id}`}
        validationType={validationMessage && validationMessage.type}
      />
    </FloatingLabelField>
  )
})``
