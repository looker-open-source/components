/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import { useFormContext } from '../../Form'
import type { CheckboxGroupProps } from '../../Inputs'
import { CheckboxGroup } from '../../Inputs'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldCheckboxGroupProps
  extends CheckboxGroupProps,
    Omit<FieldProps, 'detail'> {
  inputsInline?: boolean
}

const FieldCheckboxGroupLayout = ({
  id: propsID,
  options,
  value,
  name,
  inputsInline,
  ...props
}: FieldCheckboxGroupProps) => {
  const validationMessage = useFormContext(props)
  const id = useID(propsID)

  return (
    <Field {...pickFieldProps(props)} id={id}>
      <CheckboxGroup
        {...omitFieldProps(props)}
        aria-describedby={`describedby-${id}`}
        aria-labelledby={`labelledby-${id}`}
        id={id}
        inline={props.inline || inputsInline}
        name={name || id}
        options={options}
        validationType={validationMessage && validationMessage.type}
        value={value}
      />
    </Field>
  )
}

FieldCheckboxGroupLayout.displayName = 'FieldCheckboxGroupLayout'

export const FieldCheckboxGroup = styled(FieldCheckboxGroupLayout)``
