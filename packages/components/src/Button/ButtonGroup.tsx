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

import uniqueId from 'lodash/uniqueId'
import xor from 'lodash/xor'
import React, { ChangeEvent, FC, forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { useControlWarn } from '../utils'
import { ButtonItem, ButtonItemLabel } from './ButtonItem'
import { ButtonGroupOrToggleProps, ButtonSet } from './ButtonSet'

const ButtonGroupFactory = forwardRef(
  (
    { onChange, value, ...props }: ButtonGroupOrToggleProps<string[]>,
    ref: Ref<HTMLDivElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonGroup',
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      const newValue = xor(value, [e.target.value])
      onChange && onChange(newValue)
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
          : { name: props.name || uniqueId() })}
      />
    )
  }
)

export const ButtonGroup = styled<FC<ButtonGroupOrToggleProps<string[]>>>(
  ButtonGroupFactory
)`
  ${ButtonItem} {
    height: 36px;
    border-radius: 4px;

    + ${ButtonItem} {
      margin-left: ${props => props.theme.space.xxsmall};
    }
  }

  ${ButtonItemLabel} {
    border-style: solid;
    border-width: 1px;
  }
`
