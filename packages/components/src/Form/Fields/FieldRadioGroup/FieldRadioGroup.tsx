/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'
import type { RadioGroupProps } from '../../Inputs'
import { RadioGroup } from '../../Inputs'

export interface FieldRadioGroupProps
  extends RadioGroupProps,
    Omit<FieldProps, 'detail'> {
  inputsInline?: boolean
}

const FieldRadioGroupLayout = ({
  id: propsID,
  options,
  name,
  inputsInline,
  ...props
}: FieldRadioGroupProps) => {
  const validationMessage = useFormContext(props)
  const id = useID(propsID)

  return (
    <Field {...pickFieldProps(props)} id={id}>
      <RadioGroup
        {...omitFieldProps(props)}
        aria-describedby={`describedby-${id}`}
        aria-labelledby={`labelledby-${id}`}
        id={id}
        inline={props.inline || inputsInline}
        name={name || id}
        options={options}
        validationType={validationMessage && validationMessage.type}
      />
    </Field>
  )
}

FieldRadioGroupLayout.displayName = 'FieldRadioGroupLayout'

export const FieldRadioGroup = styled(FieldRadioGroupLayout)``
