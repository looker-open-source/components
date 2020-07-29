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
import { rgba } from 'polished'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'

export interface TabProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    LayoutProps,
    SpaceProps,
    TypographyProps {
  disabled?: boolean
  focusVisible?: boolean
  selected?: boolean
  onSelect?: () => void
}

const TabStyle = styled.button<TabProps>`
  ${reset}
  ${layout}
  ${space}
  ${typography}

  background: transparent;
  border: none;
  border-bottom: 3px solid;
  border-bottom-color: ${(props) =>
    props.selected ? props.theme.colors.key : 'transparent'};
  border-radius: 0;
  color: ${(props) =>
    props.selected ? props.theme.colors.text5 : props.theme.colors.text2};
  cursor: pointer;

  &:active {
    border-bottom-color: ${(props) =>
      props.selected ? props.theme.colors.key : props.theme.colors.text2};
  }

  &:active,
  &:hover {
    border-bottom-color: transparent;
  }

  &:focus {
    outline: none;
  }

  ${({ focusVisible, theme }) =>
    focusVisible &&
    `box-shadow: 0 0 0 0.15rem ${rgba(theme.colors.keyFocus, 0.25)};`}

  &:hover {
    border-bottom-color: ${(props) =>
      props.selected ? props.theme.colors.key : props.theme.colors.ui3};
  }

  &:disabled {
    border-bottom-color: transparent;
    color: ${({ theme }) => theme.colors.text1};
    cursor: default;
  }
`

const TabJSX = forwardRef((props: TabProps, ref: Ref<HTMLButtonElement>) => {
  const { children, disabled, onBlur, onKeyUp, onSelect, ...restProps } = props

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
      focusVisible={isFocusVisible}
      onKeyUp={handleOnKeyUp}
      onBlur={handleOnBlur}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
      ref={ref}
    >
      {children}
    </TabStyle>
  )
})

TabJSX.displayName = 'TabJSX'

export const Tab = styled(TabJSX)``

Tab.defaultProps = {
  fontSize: 'small',
  fontWeight: 'semiBold',
  pb: 'small',
  pt: 'xsmall',
}
