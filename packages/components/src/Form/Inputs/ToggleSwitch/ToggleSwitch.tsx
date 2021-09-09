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

import type { SpaceProps } from '@looker/design-tokens'
import { reset, space } from '@looker/design-tokens'
import pick from 'lodash/pick'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import {
  inputRippleColor,
  RIPPLE_RATIO,
  rippleHandlerKeys,
  useRipple,
  useRippleHandlers,
} from '../../../Ripple'
import type { InputProps } from '../InputProps'
import { pickInputProps } from '../InputProps'
import type { OnProps } from './types'
import { Handle } from './Handle'
import { Track } from './Track'

export interface ToggleSwitchProps
  extends SpaceProps,
    Omit<InputProps, 'type'>,
    OnProps {
  size?: number
}

export const ToggleSwitchLayout = forwardRef(
  (
    { className, disabled, on, validationType, ...props }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const {
      callbacks,
      className: rippleClassName,
      style,
    } = useRipple({
      color: inputRippleColor(!!on, validationType === 'error'),
      // Only define size for density -6,
      // to make the halo slightly bigger than the container
      size: RIPPLE_RATIO,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      {
        ...pick(props, rippleHandlerKeys),
      },
      disabled
    )

    // Ripple event handlers go on the container but the ripple styles go on the handle
    return (
      <div className={className} {...rippleHandlers}>
        <input
          type="checkbox"
          checked={on}
          disabled={disabled}
          role="switch"
          aria-checked={on}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          ref={ref}
          {...pickInputProps(props)}
        />
        <Track on={on} />
        <Handle on={on} className={rippleClassName} style={style}></Handle>
      </div>
    )
  }
)

ToggleSwitchLayout.displayName = 'ToggleSwitchLayout'

export const ToggleSwitch = styled(ToggleSwitchLayout)`
  ${reset}
  ${space}

  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.space.u6};
  justify-content: center;
  opacity: ${({ disabled }) => disabled && '0.4'};
  position: relative;
  width: ${({ theme }) => theme.space.u10};

  input {
    cursor: ${({ disabled }) => (disabled ? undefined : 'pointer')};
    height: 100%;
    left: 0;
    margin: 0; /* Suppress browser default styling */
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`
