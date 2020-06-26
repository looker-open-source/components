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
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  StatefulColor,
} from '@looker/design-tokens'
import { rgba } from 'polished'
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
import { buttonSize, ButtonSizes, ButtonSizeProps } from './size'
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

export const buttonCSS = css<ButtonBaseProps>`
  ${reset}
  ${maxWidth}
  ${minWidth}
  ${width}

  ${(props) =>
    props.focusVisible &&
    `
    box-shadow: 0 0 0 0.15rem
      ${rgba(props.theme.colors[props.color || 'key'], 0.25)};
  `}

  align-items: center;
  border-radius: ${({ theme }) => theme.radii.medium};
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
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

const ButtonOuter = styled.button<ButtonProps>`
  ${buttonCSS}
  ${(props) => props.fullWidth && `width: 100%;`}
`

const ButtonJSX = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      children,
      iconBefore,
      iconAfter,
      onBlur,
      onKeyUp,
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

    return (
      <ButtonOuter
        {...restProps}
        focusVisible={isFocusVisible}
        onKeyUp={handleOnKeyUp}
        onBlur={handleOnBlur}
        ref={ref}
      >
        {iconBefore && <ButtonIcon name={iconBefore} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} />}
      </ButtonOuter>
    )
  }
)

ButtonJSX.displayName = 'ButtonJSX'

export const ButtonBase = styled(ButtonJSX)<ButtonProps>`
  ${buttonIcon}
`

ButtonBase.defaultProps = { size: 'medium' }
