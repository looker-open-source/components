/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  layout,
  reset,
  padding,
  typography,
  tabShadowColor,
} from '@looker/design-tokens'
import type { FocusVisibleProps } from '../utils'
import { focusVisibleCSSWrapper, useFocusVisible, useWrapEvent } from '../utils'
import type { Tab2Props } from './types'

type Tab2StyleProps = Omit<Tab2Props, 'label'> & FocusVisibleProps

export const Tab2Style = styled.button.attrs<Tab2StyleProps>(
  ({
    fontFamily = 'brand',
    fontSize = 'small',
    fontWeight = 'medium',
    pb = 'small',
    pt = 'xsmall',
  }) => ({
    fontFamily,
    fontSize,
    fontWeight,
    pb,
    pt,
  })
)<Tab2StyleProps>`
  ${reset}
  ${layout}
  ${padding}
  ${typography}

  background: transparent;
  border: none;
  border-bottom: 3px solid
    ${({ selected, theme }) => (selected ? theme.colors.key : 'transparent')};
  border-radius: 0;
  ${focusVisibleCSSWrapper(tabShadowColor)}
  color: ${({ selected, theme }) =>
    selected ? theme.colors.text5 : theme.colors.text2};
  cursor: pointer;
  /* this is here to remove default margin button in Safari */
  margin: 0;

  &:active {
    border-bottom-color: ${({ selected, theme }) =>
      selected ? theme.colors.key : theme.colors.text2};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border-bottom-color: ${({ selected, theme }) =>
      selected ? theme.colors.key : theme.colors.ui3};
  }

  &:disabled {
    border-bottom-color: transparent;
    color: ${({ theme }) => theme.colors.text1};
    cursor: default;
  }
`

export const Tab2 = styled(
  forwardRef(
    (
      { id, onBlur, onClick, onKeyUp, onSelect, ...restProps }: Tab2Props,
      ref: Ref<HTMLButtonElement>
    ) => {
      const handleClick = useWrapEvent(() => {
        if (!restProps.disabled && onSelect) {
          onSelect()
        }
      }, onClick)

      const focusVisibleProps = useFocusVisible({ onBlur, onKeyUp })

      return (
        <Tab2Style
          aria-controls={`panel-${id}`}
          aria-orientation="horizontal"
          aria-selected={restProps.selected}
          id={`tab-${id}`}
          onClick={handleClick}
          ref={ref}
          role="tab"
          tabIndex={-1}
          type="button"
          {...focusVisibleProps}
          {...restProps}
        />
      )
    }
  )
)``
