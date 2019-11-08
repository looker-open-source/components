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

import styled, { css } from 'styled-components'
import {
  CompatibleHTMLProps,
  pseudoClasses,
  PseudoProps,
  reset,
  SemanticColors,
  SpaceProps,
  space,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import React, { forwardRef, Ref } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'
import { buttonCSS } from './ButtonBase'
import { ButtonTransparent } from './ButtonTransparent'

export type IconButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

type ButtonColors = keyof SemanticColors

export interface IconButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'>,
    PseudoProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  color?: ButtonColors
  /*
   * this props refer to the keyboard expected focus behavior
   */
  focusVisible?: boolean
  outline?: boolean
  /**
   * The Icon to display inside of the button
   */
  icon: IconNames
  /**
   *  A hidden text label for the IconButton that is accessible to assistive technology
   */
  label: string
  /**
   *  Sets the size of the button
   * @default 'xsmall'
   */
  size?: IconButtonSizes
  /**
   *  Optional round icon button variant
   * @default 'square'
   */
  shape?: 'round' | 'square'
}

const iconSizeHelper = (size: IconButtonSizes) => {
  switch (size) {
    case 'xxsmall':
      return 12
    case 'xsmall':
      return 16
    case 'small':
      return 20
    case 'medium':
      return 28
    case 'large':
    default:
      return 36
  }
}

export const IconButtonStyle = styled.button<IconButtonProps>`
  ${buttonCSS}
  height: auto;
`

const IconButtonComponent = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { icon, size, label, ...rest } = props

    const actualSize = size === 'xxsmall' ? 'xsmall' : size

    return (
      <ButtonTransparent
        ref={ref}
        color="neutral"
        p="none"
        size={actualSize}
        {...rest}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon
          name={icon}
          size={iconSizeHelper(size || 'xsmall')}
          aria-hidden={true}
        />
      </ButtonTransparent>
    )
  }
)

IconButtonComponent.displayName = 'IconButtonComponent'

const outlineCSS = (props: IconButtonProps) => {
  const { color = 'primary' } = props

  return css`
    border: 1px solid
      ${props => props.theme.colors.semanticColors[color].borderColor};

    &:hover,
    &:focus,
    &.hover {
      border-color: ${props => props.theme.colors.semanticColors[color].main};
    }

    &:active,
    &.active {
      border-color: ${props => props.theme.colors.semanticColors[color].main};
    }

    &[disabled] {
      &:hover,
      &:active,
      &:focus {
        border-color: ${props =>
          props.theme.colors.semanticColors[color].borderColor};
      }
    }
  `
}

export const IconButton = styled(IconButtonComponent)<IconButtonProps>`
  ${reset}
  ${space}

  padding: 3px;

  ${props => props.outline && outlineCSS}

  ${pseudoClasses}
  ${({ shape }) => shape === 'round' && 'border-radius: 100%;'}
`
