/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import omit from 'lodash/omit'
import { useID } from '../../../utils'
import { Slider, SliderProps } from '../../Inputs/Slider'
import { Field, FieldProps, omitFieldProps, pickFieldProps } from '../Field'

export interface FieldSliderProps
  extends SliderProps,
    Omit<FieldProps, 'validationMessage'> {}

const FieldSliderComponent = forwardRef(
  (props: FieldSliderProps, ref: Ref<HTMLInputElement>) => {
    const id = useID(props.id)
    return (
      <Field
        data-testid="FieldSliderId"
        {...pickFieldProps(omit(props, 'validationMessage'))}
        id={id}
      >
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
