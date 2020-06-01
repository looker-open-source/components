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

import React, { forwardRef, MouseEvent, Ref, useState } from 'react'
import styled from 'styled-components'
import { ButtonItem } from './ButtonItem'
import {
  ButtonGroupOrToggleBaseProps,
  ButtonSet,
  ButtonSetType,
} from './ButtonSet'

export interface ButtonToggleProps
  extends ButtonGroupOrToggleBaseProps<string> {
  nullable?: boolean
}

const ButtonToggleComponent = ButtonSet as ButtonSetType<string>

const ButtonToggleLayout = forwardRef(
  (
    { nullable, onChange, value = '', ...props }: ButtonToggleProps,
    ref: Ref<HTMLDivElement>
  ) => {
    function handleItemClick(e: MouseEvent<HTMLButtonElement>) {
      const newValue = e.currentTarget.value
      const deselecting = newValue === value
      if (!deselecting || nullable) {
        if (onChange) {
          onChange(newValue)
        }
      }
    }

    return (
      <ButtonToggleComponent
        {...props}
        value={value}
        onItemClick={handleItemClick}
        ref={ref}
      />
    )
  }
)

ButtonToggleLayout.displayName = 'ButtonToggleLayout'

export const ButtonToggle = styled(ButtonToggleLayout)`
  border: solid 1px ${({ theme }) => theme.colors.ui2};
  border-radius: ${({ theme }) => theme.radii.medium};

  /* prevents items in the last row from growing */
  &::after {
    content: '';
    flex-grow: 100;
  }

  ${ButtonItem} {
    border: none;
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
      background: ${({ theme }) => theme.colors.ui2};
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
