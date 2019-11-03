/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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
import React, { forwardRef, Ref, useState, ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { useControlWarn } from '../utils'
import { ButtonItemLabel } from './ButtonItem'
import { ButtonGroupOrToggleProps, ButtonSet, ButtonSetType } from './ButtonSet'

const ButtonToggleComponent = (ButtonSet as unknown) as ButtonSetType<string>

const ButtonToggleFactory = forwardRef(
  (
    {
      onChange,
      value: controlledValue,
      ...props
    }: ButtonGroupOrToggleProps<string>,
    ref: Ref<HTMLDivElement>
  ) => {
    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonToggle',
    })

    const [value, setValue] = useState<string>()

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      if (onChange) {
        onChange(e.target.value)
      } else {
        setValue(e.target.value)
      }
    }
    return (
      <ButtonToggleComponent
        {...props}
        borderRadius="4px"
        onChange={handleChange}
        isToggle
        ref={ref}
        {...(isControlled
          ? {
              name: props.name || uniqueId(),
              value: controlledValue,
            }
          : { value })}
      />
    )
  }
)

export const ButtonToggle = styled<FC<ButtonGroupOrToggleProps<string>>>(
  ButtonToggleFactory
)`
  border: solid 1px ${props => props.theme.colors.palette.charcoal200};

  ${ButtonItemLabel} {
    position: relative;
    height: 36px;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    /* stylelint-disable */
    & + ${ButtonItemLabel} {
      &::after {
        content: '';
        display: block;
        height: 20px;
        width: 1px;
        background: ${props => props.theme.colors.palette.charcoal200};
        position: absolute;
        left: 0;
        top: 8px;
      }
    }
    /* stylelint-enable */
  }
`
