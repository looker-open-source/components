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
import { useForkedRef } from '../../../utils'
import { Checkbox } from '../Checkbox'
import {
  ComboboxMultiContext,
  ComboboxMultiContextProps,
} from './ComboboxContext'
import {
  comboboxOptionStyle,
  ComboboxOptionWrapper,
  ComboboxOptionText,
} from './ComboboxOption'
import { ComboboxOptionIndicator } from './ComboboxOptionIndicator'
import { ComboboxOptionProps } from './types'
import { useAddOptionToContext } from './utils/useAddOptionToContext'
import { useOptionEvents } from './utils/useOptionEvents'
import { useOptionStatus } from './utils/useOptionStatus'
import { useOptionScroll } from './utils/useOptionScroll'

const ComboboxMultiOptionInternal = forwardRef(
  (
    {
      children,
      indicator,
      highlightText = true,
      scrollIntoView,
      ...props
    }: ComboboxOptionProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const { label, value } = props

    useAddOptionToContext<ComboboxMultiContextProps>(
      ComboboxMultiContext,
      value,
      label,
      scrollIntoView
    )
    const optionEvents = useOptionEvents<ComboboxMultiContextProps>(
      props,
      ComboboxMultiContext
    )
    const { isActive, isSelected } = useOptionStatus<ComboboxMultiContextProps>(
      ComboboxMultiContext,
      value
    )

    const scrollRef = useOptionScroll(
      ComboboxMultiContext,
      value,
      label,
      scrollIntoView,
      isActive
    )
    const ref = useForkedRef(scrollRef, forwardedRef)

    return (
      <ComboboxOptionWrapper
        {...props}
        {...optionEvents}
        ref={ref}
        aria-selected={isActive}
        isSelected={isSelected}
      >
        <ComboboxOptionIndicator
          indicator={indicator}
          isActive={isActive}
          isSelected={isSelected}
          isMulti={true}
        >
          <Checkbox checked={isSelected} mt="xxxsmall" />
        </ComboboxOptionIndicator>
        {children || <ComboboxOptionText highlightText={highlightText} />}
      </ComboboxOptionWrapper>
    )
  }
)

ComboboxMultiOptionInternal.displayName = 'ComboboxMultiOptionInternal'

export const ComboboxMultiOption = styled(ComboboxMultiOptionInternal).attrs(
  ({
    color = 'text4',
    display = 'flex',
    fontSize = 'small',
    lineHeight = 'small',
    px = 'xsmall',
    py = 'xxsmall',
  }) => ({
    color,
    display,
    fontSize,
    lineHeight,
    px,
    py,
  })
)`
  ${comboboxOptionStyle}
`
