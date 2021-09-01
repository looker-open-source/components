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
import type {
  CompatibleHTMLProps,
  LayoutProps,
  PaddingProps,
  TypographyProps,
} from '@looker/design-tokens'
import { useFocusVisible, useWrapEvent } from '../utils'
import { Tab2Style } from '../Tabs2/Tab2'

export interface TabProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    LayoutProps,
    PaddingProps,
    TypographyProps {
  disabled?: boolean
  index?: number
  selected?: boolean
  onSelect?: () => void
}

/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export const Tab = styled(
  forwardRef((props: TabProps, ref: Ref<HTMLButtonElement>) => {
    const {
      disabled,
      index,
      onBlur,
      onClick,
      onKeyUp,
      onSelect,
      selected,
      ...restProps
    } = props

    const handleClick = useWrapEvent(() => {
      if (!disabled && onSelect) {
        onSelect()
      }
    }, onClick)

    const focusVisibleProps = useFocusVisible({ onBlur, onKeyUp })

    return (
      <Tab2Style
        aria-controls={`panel-${index}`}
        aria-orientation="horizontal"
        aria-selected={selected}
        disabled={disabled}
        id={`tab-${index}`}
        onClick={handleClick}
        ref={ref}
        role="tab"
        selected={selected}
        tabIndex={-1}
        type="button"
        {...focusVisibleProps}
        {...restProps}
      />
    )
  })
).attrs(
  ({
    fontSize = 'small',
    fontWeight = 'medium',
    pb = 'small',
    pt = 'xsmall',
  }) => ({
    fontSize,
    fontWeight,
    pb,
    pt,
  })
)``
