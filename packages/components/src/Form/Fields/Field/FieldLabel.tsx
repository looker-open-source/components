/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useContext } from 'react'
import styled from 'styled-components'
import { FieldsetContext } from '../../../Fieldset'
import { VisuallyHidden } from '../../../VisuallyHidden'
import { Label } from '../../Label'
import { RequiredStar } from './RequiredStar'
import type { FieldLabelProps } from './types'

export const FieldLabel = styled(
  ({
    ariaLabelOnly,
    hideLabel,
    id,
    label,
    required,
    ...props
  }: FieldLabelProps) => {
    if (!label) return null

    const { fieldsHideLabel } = useContext(FieldsetContext)
    const shouldHideLabel =
      (fieldsHideLabel || hideLabel) && hideLabel !== false
    const labelComponent = (
      <Label
        htmlFor={ariaLabelOnly ? undefined : id}
        id={`labelledby-${id}`}
        {...props}
      >
        {label}
        {required && <RequiredStar />}
      </Label>
    )
    return shouldHideLabel ? (
      <VisuallyHidden>{labelComponent}</VisuallyHidden>
    ) : (
      labelComponent
    )
  }
)``
