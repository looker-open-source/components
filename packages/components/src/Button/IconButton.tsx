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

import pick from 'lodash/pick'
import some from 'lodash/some'
import isFunction from 'lodash/isFunction'
import styled from 'styled-components'
import { reset, space } from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import { Icon } from '../Icon'
import {
  rippleHandlerKeys,
  rippleStyle,
  RippleStyleProps,
  useRipple,
  useRippleHandlers,
} from '../Ripple'
import { useTooltip } from '../Tooltip'
import { mergeClassNames, useForkedRef, useWrapEvent } from '../utils'
import { VisuallyHidden } from '../VisuallyHidden'
import { ButtonOuter } from './ButtonBase'
import { iconButtonColor, ICON_BUTTON_DEFAULT_COLOR } from './iconButtonColor'
import { iconButtonOutline } from './iconButtonOutline'
import { iconButtonIconSizeMap, buttonSizeMap } from './size'
import { IconButtonProps, ToggleColorProps } from './iconButtonTypes'

const ButtonRipple = styled(ButtonOuter)<RippleStyleProps & ToggleColorProps>`
  ${({ color, toggle, toggleColor, ...props }) =>
    rippleStyle({ color: toggle ? toggleColor : undefined, ...props })}
`

/**
 * Appears as just an `Icon` but with proper HTML semantics to produce a `button`
 * DOM element that is properly announced to screen-readers as well as providing
 * keyboard tooltip support.
 */
export const IconButton = styled(
  forwardRef((props: IconButtonProps, forwardedRef: Ref<HTMLButtonElement>) => {
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

    const bounded = rest.shape !== 'round' && (toggleBackground || rest.outline)
    const {
      className: rippleClassName,
      ref: rippleRef,
      callbacks,
      ...rippleProps
    } = useRipple({ bounded })

    const ref = useForkedRef(forwardedRef, rippleRef)

    // any of the hover/focus handlers being present disables built-in tooltip
    const hasOuterTooltip = some(
      [propsOnFocus, propsOnBlur, propsOnMouseOver, propsOnMouseOut],
      isFunction
    )

    const {
      domProps: {
        'aria-describedby': ariaDescribedBy,
        className: tooltipClassName = '',
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

    const rippleHandlers = useRippleHandlers(
      callbacks,
      {
        onBlur: useWrapEvent(onBlur, propsOnBlur),
        onFocus: useWrapEvent(onFocus, propsOnFocus),
        ...pick(rest, rippleHandlerKeys),
      },
      rest.disabled
    )

    const otherHandlers = {
      onMouseOut: useWrapEvent(onMouseOut, propsOnMouseOut),
      onMouseOver: useWrapEvent(onMouseOver, propsOnMouseOver),
    }

    return (
      <ButtonRipple
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-pressed={toggle ? true : undefined}
        ref={ref}
        p="none"
        size={size}
        width={buttonSizeMap[size]}
        className={mergeClassNames([
          className,
          tooltipClassName,
          rippleClassName,
        ])}
        toggle={toggle}
        toggleColor={toggleColor}
        {...rippleProps}
        {...rippleHandlers}
        {...otherHandlers}
        {...rest}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon icon={icon} size={iconButtonIconSizeMap[size]} />
        {tooltip}
      </ButtonRipple>
    )
  })
).attrs(({ type = 'button', toggleColor = ICON_BUTTON_DEFAULT_COLOR }) => ({
  toggleColor,
  type,
}))<IconButtonProps>`
  ${reset}
  ${space}

  background: none;
  background-color: ${({ theme, toggle, toggleBackground, toggleColor }) =>
    toggle && toggleBackground && theme.colors[`${toggleColor}Subtle`]};
  border: none;
  border-radius: ${({ shape }) => shape === 'round' && '100%'};
  ${iconButtonColor}
  padding: 0;

  ${({ outline }) => outline && iconButtonOutline}
`
