/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import type { RangeSliderProps } from '../../Inputs/RangeSlider'
import { RangeSlider } from '../../Inputs/RangeSlider'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldRangeSliderProps
  extends RangeSliderProps,
    Omit<FieldProps, 'validationMessage'> {}

const FieldRangeSliderComponent = forwardRef(
  (props: FieldRangeSliderProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    return (
      <Field
        data-testid="FieldSliderId"
        {...pickFieldProps(props)}
        id={id}
        ariaLabelOnly
      >
        <RangeSlider
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          aria-labelledby={`labelledby-${id}`}
          id={id}
          ref={ref}
        />
      </Field>
    )
  }
)

FieldRangeSliderComponent.displayName = 'FieldRangeSliderComponent'

export const FieldRangeSlider = styled(FieldRangeSliderComponent)``
