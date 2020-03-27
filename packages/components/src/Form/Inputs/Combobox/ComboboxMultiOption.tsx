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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { CheckboxContainer, FauxCheckbox, CheckMark } from '../Checkbox'
import {
  ComboboxMultiContext,
  ComboboxMultiContextProps,
} from './ComboboxContext'
import {
  comboboxOptionDefaultProps,
  ComboboxOptionDetail,
  ComboboxOptionProps,
  comboboxOptionStyle,
  ComboboxOptionWrapper,
  ComboboxOptionText,
} from './ComboboxOption'
import { useAddOptionToContext } from './utils/useAddOptionToContext'
import { useOptionStatus } from './utils/useOptionStatus'
import { useOptionEvents } from './utils/useOptionEvents'

const ComboboxMultiOptionInternal = forwardRef(
  (
    { children, ...props }: ComboboxOptionProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const { label, value } = props

    useAddOptionToContext<ComboboxMultiContextProps>(
      ComboboxMultiContext,
      value,
      label
    )
    const optionEvents = useOptionEvents<ComboboxMultiContextProps>(
      props,
      ComboboxMultiContext
    )
    const { isActive, isSelected } = useOptionStatus<ComboboxMultiContextProps>(
      ComboboxMultiContext,
      value
    )

    return (
      <ComboboxOptionWrapper
        {...props}
        {...optionEvents}
        ref={forwardedRef}
        aria-selected={isActive}
      >
        <ComboboxOptionDetail>
          <CheckboxContainer checked={isSelected}>
            <FauxCheckbox>
              <CheckMark />
            </FauxCheckbox>
          </CheckboxContainer>
        </ComboboxOptionDetail>
        {children || <ComboboxOptionText />}
      </ComboboxOptionWrapper>
    )
  }
)

ComboboxMultiOptionInternal.displayName = 'ComboboxMultiOptionInternal'

export const ComboboxMultiOption = styled(ComboboxMultiOptionInternal)`
  ${comboboxOptionStyle}
  grid-template-columns: ${(props) => props.theme.space.xlarge} 1fr;
`

ComboboxMultiOption.defaultProps = {
  ...comboboxOptionDefaultProps,
}
