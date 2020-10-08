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

import some from 'lodash/some'
import isFunction from 'lodash/isFunction'
import styled, { css } from 'styled-components'
import {
  CompatibleHTMLProps,
  reset,
  SpaceProps,
  space,
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
  StatefulColor,
} from '@looker/design-tokens'
import { IconNames } from '@looker/icons'
import { Property } from 'csstype'
import React, { forwardRef, Ref } from 'react'
import { Placement } from '@popperjs/core'
import { lighten } from 'polished'
import { Icon } from '../Icon'
import { useTooltip } from '../Tooltip'
import { useForkedRef, useWrapEvent } from '../utils'
import { VisuallyHidden } from '../VisuallyHidden'
import { ButtonBase, ButtonBaseProps, buttonCSS } from './ButtonBase'
import { buttonSizeMap } from './size'

const iconButtonDefaultColor = 'neutral'

interface IconButtonVariantProps {
  /**
   * Defines the color of the button. Can be the string name of a color listed in the color theme, or a color object.
   * @default "neutral"
   */
  color?: StatefulColor

  /**
   * Defines the variant or mapping of colors to style properties, like border of the button.
   * @default false
   */
  outline?: boolean
}

export type IconButtonSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export interface IconButtonProps
  extends Omit<CompatibleHTMLProps<HTMLButtonElement>, 'children' | 'type'>,
    ButtonBaseProps,
    IconButtonVariantProps,
    SpaceProps {
  type?: 'button' | 'submit' | 'reset'
  /*
   * @default 'neutral'
   */
  color?: StatefulColor
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
  /**
   * By default IconButton shows a Tooltip with the Button's label text. Setting disableTooltip will disable that behavior.
   * @default false
   */
  tooltipDisabled?: boolean
  /**
   * Placement of the built-in Tooltip.
   */
  tooltipPlacement?: Placement
  /**
   * Width of the built-in Tooltip.
   */
  tooltipWidth?: string
  /**
   * Text alignment of the built-in Tooltip.
   */
  tooltipTextAlign?: Property.TextAlign
}

export const IconButtonStyle = styled.button<IconButtonProps>`
  ${buttonCSS}
  height: auto;
`

const IconButtonComponent = forwardRef(
  (props: IconButtonProps, forwardRef: Ref<HTMLButtonElement>) => {
    const {
      icon,
      id,
      size = 'xsmall',
      label,
      color,
      tooltipDisabled,
      tooltipPlacement,
      tooltipTextAlign,
      tooltipWidth,
      onFocus: propsOnFocus,
      onBlur: propsOnBlur,
      onMouseOver: propsOnMouseOver,
      onMouseOut: propsOnMouseOut,
      ...rest
    } = props

    // any of the hover/focus handlers being present disables built-in tooltip
    const hasOuterTooltip = some(
      [propsOnFocus, propsOnBlur, propsOnMouseOver, propsOnMouseOut],
      isFunction
    )

    const {
      'aria-describedby': ariaDescribedBy,
      ref,
      tooltip,
      onFocus,
      onBlur,
      onMouseOver,
      onMouseOut,
    } = useTooltip({
      content: label,
      disabled: tooltipDisabled || hasOuterTooltip,
      id: id ? `${id}-tooltip` : undefined,
      placement: tooltipPlacement,
      textAlign: tooltipTextAlign,
      width: tooltipWidth,
    })

    const eventHandlers = {
      onBlur: useWrapEvent(onBlur, propsOnBlur),
      onFocus: useWrapEvent(onFocus, propsOnFocus),
      onMouseOut: useWrapEvent(onMouseOut, propsOnMouseOut),
      onMouseOver: useWrapEvent(onMouseOver, propsOnMouseOver),
    }

    const actualRef = useForkedRef<HTMLButtonElement>(forwardRef, ref)

    return (
      <ButtonBase
        aria-describedby={ariaDescribedBy}
        ref={actualRef}
        color={color}
        p="none"
        size={size}
        width={buttonSizeMap[size]}
        {...eventHandlers}
        {...rest}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon name={icon} size={buttonSizeMap[size] - 6} aria-hidden={true} />
        {tooltip}
      </ButtonBase>
    )
  }
)

IconButtonComponent.displayName = 'IconButtonComponent'

const outlineCSS = (props: IconButtonProps) => {
  const { shape, color = iconButtonDefaultColor } = props

  return css`
    border: 1px solid ${({ theme: { colors } }) => colors.ui3};
    ${shape === 'round' && 'border-radius: 100%;'}

    &:hover,
    &:focus,
    &.hover {
      border-color: ${({ theme: { colors } }) => colors[color]};
    }

    &:active,
    &.active {
      border-color: ${({ theme: { colors } }) => colors[`${color}Interactive`]};
    }

    &[disabled] {
      &:hover,
      &:active,
      &:focus {
        border-color: ${({ theme: { colors } }) => colors.ui3};
      }
    }
  `
}

export const iconButtonColor = css<Pick<IconButtonProps, 'color'>>`
  color: ${({ theme, color = iconButtonDefaultColor }) =>
    lighten(0.14, theme.colors[color])};

  &:hover,
  &:focus,
  &.hover {
    color: ${({ theme, color = iconButtonDefaultColor }) =>
      theme.colors[`${color}Interactive`]};
  }

  &:active,
  &.active {
    color: ${({ theme, color = iconButtonDefaultColor }) =>
      theme.colors[`${color}Pressed`]};
  }
`

export const IconButton = styled(IconButtonComponent)<IconButtonProps>`
  ${reset}
  ${space}
  /* remove padding applied to transparent buttons, so icon size is preserved correctly */

  background: none;
  border: none;
  ${iconButtonColor}
  padding: 0;

  ${(props) => props.outline && outlineCSS}

  svg {
    pointer-events: none;
  }
`

IconButton.defaultProps = { type: 'button' }
