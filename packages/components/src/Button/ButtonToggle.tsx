/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { MouseEvent, Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { inputHeight } from '../Form/Inputs/height'
import { ButtonItem } from './ButtonItem'
import type { ButtonGroupOrToggleBaseProps, ButtonSetType } from './ButtonSet'
import { ButtonSet } from './ButtonSet'

export interface ButtonToggleProps
  extends ButtonGroupOrToggleBaseProps<string> {
  nullable?: boolean
}

const ButtSetAsToggle = ButtonSet as ButtonSetType<string>

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
          onChange(deselecting ? '' : newValue)
        }
      }
    }

    return (
      <ButtSetAsToggle
        {...props}
        value={value}
        onItemClick={handleItemClick}
        ref={ref}
      />
    )
  }
)

export const ButtonToggle = styled(ButtonToggleLayout)`
  background-color: ${({ theme }) => theme.colors.background};
  border: solid 1px ${({ theme }) => theme.colors.ui3};
  border-left-width: 0;
  border-radius: ${({ theme }) => theme.radii.medium};

  ${ButtonItem} {
    border-left: solid 1px ${({ theme }) => theme.colors.ui3};
    height: calc(${inputHeight} - 2px);

    &:last-child {
      border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
      border-top-right-radius: ${({ theme }) => theme.radii.medium};
    }
    &:first-child {
      border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
      border-top-left-radius: ${({ theme }) => theme.radii.medium};
    }
  }

  &.wrapping {
    /* Creates horizontal rules between rows
  (and hide the last one that's flush with the bottom border) */

    background-image: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.background} 0,
        ${({ theme }) => theme.colors.background} 1px,
        transparent 1px,
        transparent 100%
      ),
      repeating-linear-gradient(
        180deg,
        transparent,
        transparent calc(${inputHeight} - 3px),
        ${({ theme }) => theme.colors.ui3} calc(${inputHeight} - 3px),
        ${({ theme }) => theme.colors.ui3} calc(${inputHeight} - 2px)
      );

    /* prevents items in the last row from growing */
    &::after {
      border-left: 1px solid ${({ theme }) => theme.colors.ui3};
      content: '';
      flex-grow: 100;
      height: calc(${inputHeight} - 2px);
    }

    ${ButtonItem} {
      /* Items in complete rows need to fill the full width evenly */
      flex-grow: 1;
      /* Removes some item-level rounded corners */
      &:first-child {
        border-bottom-left-radius: 0;
      }
      &:last-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      /* Fixes bottom "border" when the item background obscures the parent's horizontal rows */
      &[aria-pressed='false']:hover:not(:focus),
      &[aria-pressed='true']:not(:focus) {
        box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.ui3};
      }
    }
  }
`
