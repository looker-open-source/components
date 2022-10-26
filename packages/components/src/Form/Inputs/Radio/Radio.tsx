/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { SpaceProps } from '@looker/design-tokens'
import { reset, space } from '@looker/design-tokens'
import {
  inputRippleColor,
  RIPPLE_RATIO,
  rippleHandlerKeys,
  rippleStyle,
  useRipple,
  useRippleHandlers,
} from '../../../Ripple'
import type { InputProps } from '../InputProps'
import { pickInputProps } from '../InputProps'
import type { ValidationType } from '../../ValidationMessage'
import { FauxRadio } from './FauxRadio'

export interface RadioProps
  extends SpaceProps,
    Omit<InputProps, 'readOnly' | 'type' | 'checked' | 'onClick'> {
  checked?: boolean
  validationType?: ValidationType
}

export const Radio = styled(
  forwardRef((props: RadioProps, ref: Ref<HTMLInputElement>) => {
    const { className, style, validationType, ...restProps } = props

    const { callbacks, ...rippleProps } = useRipple({
      className,
      color: inputRippleColor(
        props.checked === true,
        validationType === 'error'
      ),
      // Only define size for density -6,
      // to make the halo slightly bigger than the container
      size: RIPPLE_RATIO,
      style,
    })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      pick(restProps, rippleHandlerKeys),
      restProps.disabled
    )
    return (
      <div {...rippleProps}>
        <input
          {...pickInputProps(restProps)}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          ref={ref}
          type="radio"
          {...rippleHandlers}
        />
        <FauxRadio />
      </div>
    )
  })
)`
  ${reset}
  ${space}
  ${rippleStyle}

  align-items: center;
  display: flex;
  height: ${({ theme: { space } }) => space.u6};
  justify-content: center;
  position: relative;
  width: ${({ theme: { space } }) => space.u6};

  input {
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &:checked + ${FauxRadio} {
      color: ${({ theme }) => theme.colors.key};
      &::after {
        background: currentColor;
      }
    }
    &[aria-invalid='true'] + ${FauxRadio} {
      color: ${({ theme }) => theme.colors.critical};
    }
    &:disabled {
      cursor: not-allowed;
      + ${FauxRadio}, &:not(:checked):hover + ${FauxRadio} {
        color: ${({ theme }) => theme.colors.ui2};
      }
    }
    &:not(:checked):not([aria-invalid='true']):not(:disabled) {
      &:hover,
      &:focus {
        + ${FauxRadio} {
          color: ${({ theme }) => theme.colors.ui5};
        }
      }
    }
  }
`
