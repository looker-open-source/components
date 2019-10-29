/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  radii,
  RadiusSizes,
  reset,
  SemanticColors,
  space,
  SpaceProps,
} from 'looker-design-tokens'
import { rgba } from 'polished'
import React, { forwardRef, Ref } from 'react'
import styled, { css } from 'styled-components'
import {
  minWidth,
  MinWidthProps,
  maxWidth,
  MaxWidthProps,
  WidthProps,
  width,
} from 'styled-system'
import { buttonSize, ButtonSizeProps } from './size'
import { ButtonIcon, buttonIcon, ButtonIconProps } from './icon'

export interface CustomizableButtonAttributes {
  borderRadius: RadiusSizes
}

export const CustomizableButtonAttributes: CustomizableButtonAttributes = {
  borderRadius: 'medium',
}

type ButtonColors = keyof SemanticColors

export interface ButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'type'>,
    ButtonIconProps,
    ButtonSizeProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  forwardedAs?: 'a'

  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "primary"
   */
  color?: ButtonColors

  className?: string
}

const ButtonJSX = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, className, iconBefore, iconAfter, ...restProps } = props

    return (
      <button className={className} ref={ref} {...restProps}>
        {iconBefore && <ButtonIcon name={iconBefore} />}
        {children}
        {iconAfter && <ButtonIcon name={iconAfter} />}
      </button>
    )
  }
)

ButtonJSX.displayName = 'ButtonJSX'

export const buttonCSS = css`
  ${reset}
  ${maxWidth}
  ${minWidth}
  ${width}

  &:focus {
    box-shadow: 0 0 0 0.15rem
      ${({ theme, color = 'primary' }) =>
        rgba(theme.colors.semanticColors[color].main, 0.25)};
  }

  align-items: center;
  border-radius: ${radii[CustomizableButtonAttributes.borderRadius]};
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  outline: none;
  text-align: center;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;

  &[disabled] {
    cursor: default;
    filter: grayscale(0.3);
    opacity: 0.25;
  }

  ${buttonSize}
  ${buttonIcon}

  ${space}
`

export const ButtonBase = styled(ButtonJSX)<ButtonProps>`
  ${buttonCSS}
`

ButtonBase.defaultProps = { size: 'medium' }
