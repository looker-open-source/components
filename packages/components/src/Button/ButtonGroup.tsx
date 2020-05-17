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

import xor from 'lodash/xor'
import React, { ChangeEvent, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useControlWarn, useID } from '../utils'
import { ButtonItem, ButtonItemLabel } from './ButtonItem'
import { ButtonGroupOrToggleBaseProps, ButtonSet } from './ButtonSet'

export interface ButtonGroupProps
  extends Omit<ButtonGroupOrToggleBaseProps<string[]>, 'nullable'> {
  /**
   * Change callback for controlling the component
   */
  onChange?: (value: string[]) => void
}

const ButtonGroupLayout = forwardRef(
  (
    { onChange, value, ...props }: ButtonGroupProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const name = useID(props.name)

    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonGroup',
    })

    function handleChange(e?: ChangeEvent<HTMLInputElement>) {
      // event is only ever missing for nullable ButtonToggle
      if (e) {
        const newValue = xor(value, [e.target.value])
        onChange && onChange(newValue)
      }
    }

    return (
      <ButtonSet
        {...props}
        ref={ref}
        {...(isControlled
          ? {
              onChange: handleChange,
              value,
            }
          : { name })}
      />
    )
  }
)

export const ButtonGroup = styled(ButtonGroupLayout)`
  --spacing: ${({ theme }) => theme.space.xxsmall};
  margin-bottom: calc(var(--spacing) * -1);
  margin-right: calc(var(--spacing) * -1);
  ${ButtonItem} {
    height: 36px;
    border-radius: ${({ theme }) => theme.radii.medium};
    margin-bottom: var(--spacing);
    margin-right: var(--spacing);
  }

  ${ButtonItemLabel} {
    border-style: solid;
    border-width: 1px;
  }
`
