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
import type { SpaceProps } from '@looker/design-tokens'
import { reset, space, toggleSwitchShadowColor } from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { mergeClassNames } from '../../../utils'
import {
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../../../Ripple'
import type { InputProps } from '../InputProps'
import { pickInputProps } from '../InputProps'
import type { KnobProps } from './Knob'
import { KnobContainer } from './Knob'

export interface ToggleSwitchProps
  extends SpaceProps,
    Omit<InputProps, 'type'>,
    Omit<KnobProps, 'size'> {
  size?: number
}

const DisabledKnob = styled.div`
  ${reset}

  background: ${({ theme }) => theme.colors.ui3};
  border-radius: 1.25rem;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  position: absolute;
  right: 0;
  top: 0;
`

export const ToggleSwitch = styled(
  // eslint-disable-next-line react/display-name
  forwardRef(
    (
      {
        className,
        disabled,
        on,
        style,
        validationType,
        ...props
      }: ToggleSwitchProps,
      ref: Ref<HTMLInputElement>
    ) => {
      const {
        callbacks,
        className: rippleClassName,
        style: rippleStyle,
      } = useRipple({ color: on ? 'key' : 'neutral' })

      const rippleHandlers = useRippleHandlers(
        callbacks,
        {
          ...pick(props, rippleHandlerKeys),
        },
        disabled
      )

      return (
        <div
          className={mergeClassNames([className, rippleClassName])}
          style={{ ...style, ...rippleStyle }}
          {...rippleHandlers}
        >
          {' '}
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
          <KnobContainer on={on} disabled={disabled} />
          {disabled && <DisabledKnob />}
        </div>
      )
    }
  )
)`
  ${reset}
  ${space}
  ${rippleStyle}

  height: ${({ theme: { space } }) => space.u5};
  position: relative;
  width: ${({ theme: { space } }) => space.u9};

  ${KnobContainer} {
    padding: ${({ theme: { space } }) => space.u1};
  }
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

    &:focus + div {
      ${toggleSwitchShadowColor}
    }
  }
`

// height: 1.25rem;
// position: relative;
// 2.1875rem;
