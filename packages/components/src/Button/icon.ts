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

import { IconNames } from '@looker/icons'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { Icon } from '../Icon'
import { ButtonProps } from './ButtonBase'

export interface ButtonIconProps {
  iconBefore?: IconNames | undefined
  iconAfter?: IconNames | undefined
}

export const iconMargins = (props: ButtonProps) => {
  const spacing = { large: 0, small: 0 }
  switch (props.size) {
    case 'xsmall':
      spacing.small = 4
      spacing.large = 6
      break
    case 'small':
      spacing.small = 8
      spacing.large = 8
      break
    case 'large':
    default:
      spacing.small = 12
      spacing.large = 8
  }

  if (props.iconBefore) {
    return css`
      margin-left: -${rem(spacing.small)};
      margin-right: ${rem(spacing.large)};
    `
  } else if (props.iconAfter) {
    return css`
      margin-left: ${rem(spacing.large)};
      margin-right: -${rem(spacing.small)};
    `
  } else {
    return false
  }
}

export const iconSizes = (props: ButtonProps) => {
  let iconSize = 18
  switch (props.size) {
    case 'xsmall':
      iconSize = 12
      break
    case 'small':
      iconSize = 16
      break
    case 'large':
      iconSize = 20
      break
    case 'medium':
    default:
      iconSize = 18
  }

  return css`
    height: ${iconSize}px;
    width: ${iconSize}px;
  `
}

export const ButtonIcon = styled(Icon)``

export const buttonIcon = (props: ButtonProps) => css`
  ${ButtonIcon} {
    ${iconMargins(props)}
    ${iconSizes(props)}
  }
`
