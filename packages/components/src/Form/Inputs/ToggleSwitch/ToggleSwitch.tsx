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
  reset,
  space,
  SpaceProps,
  toggleSwitchShadowColor,
} from '@looker/design-tokens'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { InputProps, pickInputProps } from '../InputProps'
import { KnobContainer, KnobProps } from './Knob'

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

export const ToggleSwitchLayout = forwardRef(
  (
    { className, disabled, on, validationType, ...props }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
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

ToggleSwitchLayout.displayName = 'ToggleSwitchLayout'

export const ToggleSwitch = styled(ToggleSwitchLayout)`
  ${reset}
  ${space}

  display: inline-block;
  height: 1.25rem;
  position: relative;
  vertical-align: middle;
  width: 2.1875rem;

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
