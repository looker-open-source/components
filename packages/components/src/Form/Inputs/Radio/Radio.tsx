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

import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { reset, space } from 'looker-design-tokens'
import {
  CheckboxRadioContainerProps,
  InputProps,
  inputPropKeys,
} from '../InputProps'
import { inputColor } from '../style'

export interface RadioProps
  extends CheckboxRadioContainerProps,
    Omit<InputProps, 'type'> {}

const FauxRadio = styled.div`
  ${reset}
  position: relative;
  width: 100%;
  height: 100%;
  border: ${props => `solid 1px ${props.theme.colors.palette.charcoal200}`};
  border-radius: 50%;
  color: transparent;
  transition: background-color 25ms linear, border-color 25ms linear,
    box-shadow 25ms linear;
`

const dotSize = 6

const RadioContainer = styled.div<CheckboxRadioContainerProps>`
  ${reset}
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin: 3px;
  vertical-align: middle;
  input[type='radio'] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  ${FauxRadio} {
    background: ${props => props.theme.colors.palette.white};
  }
  input[type='radio']:checked {
    & + ${FauxRadio} {
      ${inputColor}
    }
    & + ${/* sc-selector */ FauxRadio}::after {
      content: '';
      position: absolute;
      background: #fff;
      width: ${dotSize}px;
      height: ${dotSize}px;
      border-radius: 50%;
      top: calc(50% - ${dotSize / 2}px);
      right: calc(50% - ${dotSize / 2}px);
    }
  }
  input[type='radio']:focus {
    & + ${FauxRadio} {
      box-shadow: ${props =>
        `0 0 .5px 1px ${props.theme.colors.semanticColors.primary.borderColor}`};
    }
  }
  input[type='radio']:disabled {
    & + ${FauxRadio} {
      opacity: 0.5;
    }
  }
  ${space}
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  ${reset}
`

const RadioComponent = forwardRef(
  (props: RadioProps, ref: Ref<HTMLInputElement>) => {
    return (
      <RadioContainer {...omit(props, inputPropKeys)}>
        <RadioInput {...pick(props, inputPropKeys)} ref={ref} />
        <FauxRadio />
      </RadioContainer>
    )
  }
)
RadioComponent.displayName = 'RadioComponent'

export const Radio = styled(RadioComponent)``
