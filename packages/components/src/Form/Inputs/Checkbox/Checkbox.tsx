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
import { reset, space } from '@looker/design-tokens'
import {
  CheckboxRadioContainerProps,
  InputProps,
  inputPropKeys,
} from '../InputProps'

interface CheckboxContainerProps extends CheckboxRadioContainerProps {
  checked: true | false | 'mixed'
}

export interface CheckboxProps
  extends Omit<InputProps, 'type' | 'checked'>,
    CheckboxContainerProps {}

const CheckMark = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8L7 11L12 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CheckMarkMixed = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="5" y1="5" x2="11" y2="11"></line>
      </g>
    </svg>
  )
}

const FauxCheckbox = styled.div`
  ${reset}
  position: relative;
  width: 100%;
  height: 100%;
  border: ${props => `solid 1px ${props.theme.colors.palette.charcoal200}`};
  border-radius: ${props => props.theme.radii.small};
  color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckboxContainer = styled.div<CheckboxContainerProps>`
  ${reset}
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin: 3px;
  vertical-align: middle;
  input[type='checkbox'] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  ${FauxCheckbox} {
    ${({ theme, checked, branded }) => {
      const inputColor = branded
        ? theme.colors.semanticColors.primary.main
        : theme.colors.semanticColors.primary.linkColor
      return `
        background: ${checked ? inputColor : theme.colors.palette.white};
        border-color: ${
          checked ? inputColor : theme.colors.palette.charcoal200
        };
          `
    }}
    color: ${({ theme }) => theme.colors.palette.white};
  }
  input[type='checkbox']:focus {
    & + ${FauxCheckbox} {
      box-shadow: ${props =>
        `0 0 .5px 1px ${props.theme.colors.semanticColors.primary.borderColor}`};
    }
  }
  input[type='checkbox']:disabled {
    & + ${FauxCheckbox} {
      opacity: 0.5;
    }
  }
  ${space}
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  ${reset}
`

const CheckboxComponent = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { checked, ...restProps } = props
    return (
      <CheckboxContainer {...omit(props, inputPropKeys)} checked={checked}>
        <CheckboxInput
          {...pick(restProps, inputPropKeys)}
          ref={ref}
          checked={checked === true}
        />
        <FauxCheckbox>
          {checked === 'mixed' ? <CheckMarkMixed /> : <CheckMark />}
        </FauxCheckbox>
      </CheckboxContainer>
    )
  }
)
CheckboxComponent.displayName = 'CheckboxComponent'

export const Checkbox = styled(CheckboxComponent)``
