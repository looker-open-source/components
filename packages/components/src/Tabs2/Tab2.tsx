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

import pick from 'lodash/pick'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { layout, reset, padding, typography } from '@looker/design-tokens'
import {
  rippleHandlerKeys,
  rippleStyle,
  useBoundedRipple,
  useRippleHandlers,
} from '../Ripple'
import { useWrapEvent } from '../utils'
import { TabIndicator } from './TabIndicator'
import { TabLabel } from './TabLabel'
import type { Tab2Props } from './types'

export const Tab2 = styled(
  forwardRef((props: Tab2Props, forwardedRef: Ref<HTMLButtonElement>) => {
    const {
      children,
      className,
      disabled,
      id,
      onClick,
      onSelect,
      selected,
      style,
      ...restProps
    } = props

    const { callbacks, ...rippleProps } = useBoundedRipple({
      className,
      color: selected ? 'key' : 'neutral',
      ref: forwardedRef,
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(restProps, rippleHandlerKeys),
      disabled
    )

    const handleClick = useWrapEvent(() => {
      if (!disabled && onSelect) {
        onSelect()
      }
    }, onClick)
    return (
      <button
        aria-controls={`panel-${id}`}
        aria-orientation="horizontal"
        aria-selected={selected}
        id={`tab-${id}`}
        onClick={handleClick}
        role="tab"
        tabIndex={-1}
        type="button"
        {...restProps}
        {...rippleProps}
        {...rippleHandlers}
      >
        <TabLabel>{children}</TabLabel>
        <TabIndicator selected={selected} />
      </button>
    )
  })
).attrs<Tab2Props>(
  ({ fontFamily = 'brand', fontSize = 'small', fontWeight = 'medium' }) => ({
    fontFamily,
    fontSize,
    fontWeight,
  })
)<Tab2Props>`
  ${reset}
  ${layout}
  ${padding}
  ${rippleStyle}
  ${typography}

  align-items: center;
  background: transparent;
  border: none;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.key : theme.colors.text5};
  cursor: pointer;
  height: ${({ theme }) => theme.space.u12};
  /* this is here to remove default margin button in Safari */
  margin: 0;
  min-width: fit-content;
  position: relative;

  ${({ disabled }) =>
    disabled &&
    css`
      border-bottom-color: transparent;
      color: ${({ theme }) => theme.colors.text1};
      cursor: default;
    `}
`
