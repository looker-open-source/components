/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useID } from '../../../utils'
import type { SliderProps } from '../../Inputs/Slider'
import { Slider } from '../../Inputs/Slider'
import type { FieldProps } from '../Field'
import { Field, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldSliderProps
  extends SliderProps,
    Omit<FieldProps, 'validationMessage'> {}

const FieldSliderComponent = forwardRef(
  (props: FieldSliderProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    return (
      <Field data-testid="FieldSliderId" {...pickFieldProps(props)} id={id}>
        <Slider
          {...omitFieldProps(props)}
          aria-describedby={`describedby-${id}`}
          id={id}
          ref={ref}
        />
      </Field>
    )
  }
)

FieldSliderComponent.displayName = 'FieldSliderComponent'

export const FieldSlider = styled(FieldSliderComponent)``
