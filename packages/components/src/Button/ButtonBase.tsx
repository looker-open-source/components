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

import {
  buttonShadow,
  maxWidth,
  minWidth,
  reset,
  space,
  shouldForwardProp,
  width,
} from '@looker/design-tokens'
import { StyledIconBase } from '@styled-icons/styled-icon'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import type { FocusVisibleProps } from '../utils'
import { useFocusVisible, focusVisibleCSSWrapper } from '../utils'
import { buttonSize, buttonIconSizeMap, buttonPadding } from './size'
import { buttonIcon } from './icon'
import type { ButtonColorProps, ButtonProps } from './types'

const buttonCSS = css<ButtonColorProps>`
  ${reset}
  ${maxWidth}
  ${minWidth}
  ${width}

  align-items: center;
  border-radius: ${({ theme }) => theme.radii.medium};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }) => theme.fonts.brand};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  justify-content: center;
  line-height: 1;
  outline: none;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;

  &[disabled] {
    cursor: default;
    filter: grayscale(0.3);
    opacity: 0.25;
  }

  ${buttonSize}
  ${space}
`

export const buttonIconSize = css<ButtonProps>`
  ${StyledIconBase} {
    height: ${({ theme, size = 'medium' }) =>
      theme.sizes[buttonIconSizeMap[size]]};
    width: ${({ theme, size = 'medium' }) =>
      theme.sizes[buttonIconSizeMap[size]]};
  }
`

export const ButtonOuter = styled.button
  .withConfig({ shouldForwardProp })
  .attrs(({ color = 'key' }) => ({ color }))<ButtonProps>`
  ${buttonCSS}
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
`

const ButtonOuterFocusVisible = styled(ButtonOuter)<
  ButtonProps & FocusVisibleProps
>`
  ${focusVisibleCSSWrapper(({ color }) => buttonShadow(color))}
`

export const ButtonBase = styled(
  forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      children,
      iconBefore,
      iconAfter,
      onBlur,
      onKeyUp,
      size = 'medium',
      ...restProps
    } = props

    const focusVisibleProps = useFocusVisible({ onBlur, onKeyUp })

    return (
      <ButtonOuterFocusVisible
        {...focusVisibleProps}
        {...restProps}
        size={size}
        ref={ref}
        px={buttonPadding(!!(iconBefore || iconAfter), size)}
      >
        {iconBefore}
        {children}
        {iconAfter}
      </ButtonOuterFocusVisible>
    )
  })
)`
  ${buttonIcon}
  ${buttonIconSize}
`
