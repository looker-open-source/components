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

import React, { forwardRef, Ref, useState } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  padding,
  PaddingProps,
  shouldForwardProp,
  typography,
  TypographyProps,
  tabShadowColor,
} from '@looker/design-tokens'

export interface TabProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    LayoutProps,
    PaddingProps,
    TypographyProps {
  disabled?: boolean
  focusVisible?: boolean
  index?: number
  selected?: boolean
  onSelect?: () => void
}

const TabStyle = styled.button.withConfig({ shouldForwardProp })<TabProps>`
  ${reset}
  ${layout}
  ${padding}
  ${typography}

  background: transparent;
  border: none;
  border-bottom: 3px solid;
  border-bottom-color: ${({ selected, theme }) =>
    selected ? theme.colors.key : 'transparent'};
  border-radius: 0;
  ${({ focusVisible }) => focusVisible && tabShadowColor}
  color: ${({ selected, theme }) =>
    selected ? theme.colors.text5 : theme.colors.text2};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.brand};
  /* Remove default margin button in Safari */
  margin: 0;

  &:active {
    border-bottom-color: ${({ selected, theme }) =>
      selected ? theme.colors.key : theme.colors.text2};
  }

  &:active,
  &:hover {
    border-bottom-color: transparent;
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

const TabJSX = forwardRef((props: TabProps, ref: Ref<HTMLButtonElement>) => {
  const {
    children,
    disabled,
    index,
    onBlur,
    onKeyUp,
    onSelect,
    selected,
    ...restProps
  } = props

  const [isFocusVisible, setFocusVisible] = useState(false)

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    setFocusVisible(true)
    onKeyUp && onKeyUp(event)
  }

  const handleOnBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    setFocusVisible(false)
    onBlur && onBlur(event)
  }

  const onClick = () => {
    if (!disabled && onSelect) {
      onSelect()
    }
    setFocusVisible(false)
  }

  return (
    <TabStyle
      aria-controls={`panel-${index}`}
      aria-orientation="horizontal"
      aria-selected={selected}
      disabled={disabled}
      focusVisible={isFocusVisible}
      id={`tab-${index}`}
      onBlur={handleOnBlur}
      onClick={onClick}
      onKeyUp={handleOnKeyUp}
      ref={ref}
      role="tab"
      selected={selected}
      tabIndex={-1}
      {...restProps}
    >
      {children}
    </TabStyle>
  )
})

TabJSX.displayName = 'TabJSX'

export const Tab = styled(TabJSX).attrs(
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
