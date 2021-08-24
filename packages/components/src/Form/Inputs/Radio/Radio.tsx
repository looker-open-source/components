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
import type { Ref } from 'react'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { SpaceProps } from '@looker/design-tokens'
import { reset, space } from '@looker/design-tokens'
import { mergeClassNames } from '../../../utils'
import {
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

const RadioLayout = forwardRef(
  (props: RadioProps, ref: Ref<HTMLInputElement>) => {
    const { className, style, validationType, ...restProps } = props

    const {
      callbacks,
      className: rippleClassName,
      style: rippleStyle,
    } = useRipple({ color: props.checked ? 'key' : 'neutral' })

    const rippleHandlers = useRippleHandlers(
      callbacks,
      {
        ...pick(restProps, rippleHandlerKeys),
      },
      restProps.disabled
    )

    return (
      <div
        className={mergeClassNames([className, rippleClassName])}
        style={{ ...style, ...rippleStyle }}
        {...rippleHandlers}
      >
        <input
          {...pickInputProps(restProps)}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          ref={ref}
          type="radio"
        />
        <FauxRadio />
      </div>
    )
  }
)

RadioLayout.displayName = 'RadioLayout'

export const Radio = styled(RadioLayout)`
  ${reset}
  ${space}
  ${rippleStyle}

  height: ${({ theme: { space } }) => space.u6};
  padding: ${({ theme: { space } }) => space.u1};
  position: relative;
  width: ${({ theme: { space } }) => space.u6};

  input {
    background: ${(props) => props.theme.colors.field};
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input + ${FauxRadio} {
    border-color: ${({ theme, validationType }) =>
      validationType === 'error'
        ? theme.colors.criticalBorder
        : theme.colors.ui2};
  }

  input:checked + ${FauxRadio} {
    color: ${({ theme }) => theme.colors.key};
  }

  input:not(:checked) + ${FauxRadio} {
    background: ${({ theme }) => theme.colors.field};
  }

  input:focus + ${FauxRadio} {
    border-color: ${({ theme }) => theme.colors.keyFocus};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.keyAccent};
    outline: none;
  }

  input:disabled + ${FauxRadio} {
    color: ${({ theme }) => theme.colors.text1};
  }

  input:disabled:not(:checked) + ${FauxRadio} {
    background: ${({ theme }) => theme.colors.ui1};
    color: transparent;

    &::after {
      background: ${({ theme }) => theme.colors.ui1};
    }
  }
`
