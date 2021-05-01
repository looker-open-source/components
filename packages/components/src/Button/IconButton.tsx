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

import some from 'lodash/some'
import isFunction from 'lodash/isFunction'
import styled, { css } from 'styled-components'
import { reset, space } from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import { Icon } from '../Icon'
import { useTooltip } from '../Tooltip'
import { useForkedRef, useWrapEvent } from '../utils'
import { VisuallyHidden } from '../VisuallyHidden'
import { GenericButtonBase } from './ButtonBase'
import { iconButtonColor, ICON_BUTTON_DEFAULT_COLOR } from './iconButtonColor'
import { iconButtonIconSizeMap, buttonSizeMap } from './size'
import { IconButtonProps } from './iconButtonTypes'

const IconButtonComponent = forwardRef(
  (props: IconButtonProps, forwardRef: Ref<HTMLButtonElement>) => {
    const {
      'aria-expanded': ariaExpanded,
      className,
      icon,
      id,
      size = 'xsmall',
      label,
      toggle,
      toggleBackground,
      toggleColor = ICON_BUTTON_DEFAULT_COLOR,
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
      domProps: {
        'aria-describedby': ariaDescribedBy,
        className: tooltipClassName,
        ref,
        onFocus,
        onBlur,
        onMouseOver,
        onMouseOut,
      },
      tooltip,
    } = useTooltip({
      content: label,
      // ariaExpanded = true indicates an open Popover or Menu – don't show the tooltip
      disabled: tooltipDisabled || hasOuterTooltip || ariaExpanded === true,
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
      <GenericButtonBase
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-pressed={toggle ? true : undefined}
        ref={actualRef}
        p="none"
        size={size}
        width={buttonSizeMap[size]}
        className={`${className} ${tooltipClassName}`.trim()}
        toggleColor={toggleColor}
        {...eventHandlers}
        {...rest}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon icon={icon} size={iconButtonIconSizeMap[size]} />
        {tooltip}
      </GenericButtonBase>
    )
  }
)

IconButtonComponent.displayName = 'IconButtonComponent'

const outlineCSS = () => {
  return css`
    border: 1px solid ${({ theme: { colors } }) => colors.ui3};

    &:hover,
    &:focus,
    &.hover {
      border-color: ${({ theme: { colors } }) => colors.neutral};
    }

    &[aria-expanded='true'],
    &:active,
    &.active {
      border-color: ${({ theme: { colors } }) => colors.neutralInteractive};
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

export const IconButton = styled(IconButtonComponent).attrs(
  ({ type = 'button', toggleColor = ICON_BUTTON_DEFAULT_COLOR }) => ({
    toggleColor,
    type,
  })
)<IconButtonProps>`
  ${reset}
  ${space}

  background: none;
  background-color: ${({ theme, toggle, toggleBackground, toggleColor }) =>
    toggle && toggleBackground && theme.colors[`${toggleColor}Subtle`]};
  border: none;
  border-radius: ${({ shape }) => shape === 'round' && '100%'};
  ${iconButtonColor}
  padding: 0;

  ${({ outline }) => outline && outlineCSS}
`
