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

import {
  buttonShadow,
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  StatefulColor,
  shouldForwardProp,
} from '@looker/design-tokens'
import React, { forwardRef, Ref, useState } from 'react'
import styled, { css } from 'styled-components'
import {
  minWidth,
  MinWidthProps,
  maxWidth,
  MaxWidthProps,
  WidthProps,
  width,
} from 'styled-system'
import {
  buttonSize,
  ButtonSizes,
  ButtonSizeProps,
  buttonIconSizeMap,
  buttonPadding,
} from './size'
import { ButtonIcon, buttonIcon, ButtonIconProps } from './icon'

export interface ButtonBaseProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonSizeProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'

  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "key"
   */
  color?: StatefulColor

  focusVisible?: boolean
}

export interface ButtonProps extends ButtonBaseProps, ButtonIconProps {
  size?: ButtonSizes
  /**
   * If true, the button's width will be set to 100%.
   */
  fullWidth?: boolean
}

export const buttonCSS = (color: StatefulColor, focusVisible?: boolean) => css`
  ${reset}
  ${maxWidth}
  ${minWidth}
  ${width}

  ${focusVisible && buttonShadow(color)}

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

const ButtonOuter = styled.button
  .withConfig({ shouldForwardProp })
  .attrs(({ color = 'key' }) => ({ color }))<ButtonProps>`
  ${({ color, focusVisible }) => buttonCSS(color, focusVisible)}
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
`

const ButtonJSX = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      children,
      iconBefore,
      iconAfter,
      onBlur,
      onKeyUp,
      size = 'medium',
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

    const iconSize = buttonIconSizeMap[size]

    return (
      <ButtonOuter
        {...restProps}
        size={size}
        focusVisible={isFocusVisible}
        onKeyUp={handleOnKeyUp}
        onBlur={handleOnBlur}
        ref={ref}
        px={buttonPadding(!!(iconBefore || iconAfter), size)}
      >
        {iconBefore && <ButtonIcon name={iconBefore} size={iconSize} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} size={iconSize} />}
      </ButtonOuter>
    )
  }
)

ButtonJSX.displayName = 'ButtonJSX'

export const ButtonBase = styled(ButtonJSX)<ButtonProps>`
  ${buttonIcon}
`
