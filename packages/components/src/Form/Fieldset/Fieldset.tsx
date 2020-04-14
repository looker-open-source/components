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
import {
  border,
  BorderProps,
  color,
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import { BackgroundColorProps } from 'styled-system'
import { FlexItem } from '../../Layout'
import { FormControl, FormControlDirections } from '../FormControl'
import { Legend } from './Legend'

interface FieldsetBaseProps
  extends BackgroundColorProps,
    BorderProps,
    LayoutProps,
    SpaceProps,
    CompatibleHTMLProps<HTMLFieldSetElement> {}

export interface FieldsetProps extends FieldsetBaseProps {
  /**
   * Specifies where to render the legend in relation to the set of inputs. Can be placed `left`, `right`, `bottom`, or `top`.
   */
  alignLegend?: FormControlDirections
  /**
   * The legend, or heading, of this fieldset.
   */
  legend?: string
}

const FieldsetBase = styled.fieldset<FieldsetBaseProps>`
  ${reset}
  border: none;

  ${border}
  ${color}
  ${layout}
  ${space}
`

const FieldsetComponent = forwardRef(
  (
    { alignLegend, legend, ...props }: FieldsetProps,
    ref: Ref<HTMLFieldSetElement>
  ) => {
    return (
      <FieldsetBase {...props} ref={ref}>
        <FormControl mb="xsmall" alignLabel={alignLegend}>
          {legend ? (
            <FlexItem>
              <Legend>{legend}</Legend>
            </FlexItem>
          ) : null}
          <FlexItem>{props.children}</FlexItem>
        </FormControl>
      </FieldsetBase>
    )
  }
)

FieldsetComponent.displayName = 'FieldsetComponent'

export const Fieldset = styled(FieldsetComponent)``
