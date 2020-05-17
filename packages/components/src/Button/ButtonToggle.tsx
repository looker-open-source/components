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

import React, { forwardRef, Ref, useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import { useControlWarn, useID } from '../utils'
import { ButtonItemLabel } from './ButtonItem'
import {
  ButtonGroupOrToggleBaseProps,
  ButtonSet,
  ButtonSetType,
} from './ButtonSet'

const ButtonToggleComponent = (ButtonSet as unknown) as ButtonSetType<string>

const ButtonToggleLayout = forwardRef(
  (
    {
      onChange,
      value: controlledValue,
      ...props
    }: ButtonGroupOrToggleBaseProps<string>,
    ref: Ref<HTMLDivElement>
  ) => {
    //
    const name = useID(props.name)

    const isControlled = useControlWarn({
      controllingProps: ['onChange', 'value'],
      isControlledCheck: () => onChange !== undefined,
      name: 'ButtonToggle',
    })

    const [value, setValue] = useState<string>()

    function handleChange(e?: ChangeEvent<HTMLInputElement>) {
      const newValue = e ? e.target.value : ''
      if (onChange) {
        onChange(newValue)
      } else {
        setValue(newValue)
      }
    }
    return (
      <ButtonToggleComponent
        {...props}
        onChange={handleChange}
        isToggle
        ref={ref}
        {...(isControlled
          ? {
              value: controlledValue,
            }
          : {
              name,
              value,
            })}
      />
    )
  }
)

export const ButtonToggle = styled(ButtonToggleLayout)`
  border: solid 1px ${({ theme }) => theme.colors.palette.charcoal200};
  border-radius: ${({ theme }) => theme.radii.medium};

  /* prevents items in the last row from growing */
  &::after {
    content: '';
    flex-grow: 100;
  }

  ${ButtonItemLabel} {
    /* In a wrapping scenario we want items in complete rows
    to fill the full width evenly */
    flex-grow: 1;
    position: relative;
    height: 36px;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: ${({ theme }) => theme.radii.medium};
      border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
    }
    &:last-child {
      border-top-right-radius: ${({ theme }) => theme.radii.medium};
      border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
    }

    &::before,
    &::after {
      content: '';
      display: block;
      background: ${(props) => props.theme.colors.palette.charcoal200};
      position: absolute;
      z-index: 1;
    }
    &::before {
      height: 1px;
      width: 100%;
      left: 0;
      bottom: -1px;
    }
    &::after {
      height: 100%;
      width: 1px;
      right: -1px;
      top: 0;
    }
  }
`
