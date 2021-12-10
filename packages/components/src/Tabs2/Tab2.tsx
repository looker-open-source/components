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

import pick from 'lodash/pick'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { layout, reset, padding, typography } from '@looker/design-tokens'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import {
  mergeClassNames,
  useCallbackRef,
  useMeasuredElement,
  useWrapEvent,
} from '../utils'
import type { Tab2Props } from './types'

export const Indicator = styled.span<{
  selected: boolean | undefined
}>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.key : 'transparent'};
  border-radius: 3px 3px 0 0;
  height: 3px;
  margin-top: ${({ theme }) => theme.space.u05};
  padding-left: ${({ theme }) => theme.space.u05};
  padding-right: ${({ theme }) => theme.space.u05};
  width: 100%;
`

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

    // find the dimensions of button for ripple behavior
    const [element, ref] = useCallbackRef(forwardedRef)
    const [{ height, width }] = useMeasuredElement(element)

    const {
      callbacks,
      className: rippleClassName,
      style: rippleStyle,
    } = useRipple({
      bounded: true,
      color: selected ? 'key' : 'neutral',
      height,
      width,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      {
        ...pick(restProps, rippleHandlerKeys),
      },
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
        className={mergeClassNames([className, rippleClassName])}
        id={`tab-${id}`}
        onClick={handleClick}
        ref={ref}
        role="tab"
        style={{ ...style, ...rippleStyle }}
        tabIndex={-1}
        type="button"
        {...restProps}
        {...rippleHandlers}
      >
        <span>{children}</span>
        <Indicator selected={selected} />
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
  display: inline-flex;
  flex-direction: column;
  height: ${({ theme }) => theme.space.u12};
  justify-content: flex-end;
  /* this is here to remove default margin button in Safari */
  margin: 0;
  min-width: fit-content;
  padding-left: ${({ theme }) => theme.space.u4};
  padding-right: ${({ theme }) => theme.space.u4};

  ${({ disabled }) =>
    disabled &&
    css`
      border-bottom-color: transparent;
      color: ${({ theme }) => theme.colors.text1};
      cursor: default;
    `}
`
