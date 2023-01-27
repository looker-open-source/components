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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import pick from 'lodash/pick'
import type { CompatibleHTMLProps } from '@looker/design-tokens'
import {
  color,
  flexbox,
  layout,
  reset,
  space,
  typography,
  omitStyledProps,
} from '@looker/design-tokens'
import type { Ref } from 'react'
import React, { forwardRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReplaceText } from '../../../../ReplaceText'
import { useForkedRef } from '../../../../utils'
import {
  rippleHandlerKeys,
  rippleStyle,
  useBoundedRipple,
  useRippleHandlers,
} from '../../../../Ripple'
import { makeHash } from '../utils/makeHash'
import type { ComboboxContextProps } from '../ComboboxContext'
import {
  OptionContext,
  ComboboxContext,
  ComboboxMultiContext,
} from '../ComboboxContext'
import { ComboboxOptionIndicator } from '../ComboboxOptionIndicator'
import type { ComboboxOptionProps, HighlightTextProps } from '../types'
import type { ComboboxData } from '../utils/state'
import { getComboboxText } from '../utils/getComboboxText'
import { useOptionEvents } from '../utils/useOptionEvents'
import { useOptionStatus } from '../utils/useOptionStatus'
import { useAddOptionToContext } from '../utils/useAddOptionToContext'
import { useOptionScroll } from '../utils/useOptionScroll'

interface ComboboxOptionWrapperProps extends ComboboxOptionProps {
  isSelected?: boolean
}

export const ComboboxOptionWrapper = styled(
  forwardRef(
    (props: ComboboxOptionWrapperProps, forwardedRef: Ref<HTMLLIElement>) => {
      const { children, className, isSelected, label, style, value, ...rest } =
        props

      const { callbacks, ...rippleProps } = useBoundedRipple({
        className,
        color: isSelected ? 'key' : 'neutral',
        ref: forwardedRef,
        style,
      })

      const rippleHandlers = useRippleHandlers(
        callbacks,
        pick(rest, rippleHandlerKeys),
        rest.disabled
      )
      return (
        <OptionContext.Provider value={{ label, value }}>
          <li
            {...omitStyledProps(rest)}
            id={String(makeHash(value))}
            role="option"
            {...rippleProps}
            {...rippleHandlers}
            // without this the menu will close from `onBlur`, but with it the
            // element can be `document.activeElement` and then our focus checks in
            // onBlur will work as intended
            tabIndex={-1}
          >
            {children}
          </li>
        </OptionContext.Provider>
      )
    }
  )
)`
  ${rippleStyle}
  background-color: ${({ isSelected, theme }) =>
    isSelected && theme.colors.keySubtle};
  &[aria-selected='true'] {
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.keyAccent : theme.colors.ui1};
  }
`

const ComboboxOptionInternal = forwardRef(
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

    useAddOptionToContext<ComboboxContextProps>(
      ComboboxContext,
      value,
      label,
      scrollIntoView
    )
    const optionEvents = useOptionEvents<ComboboxContextProps>(
      props,
      ComboboxContext
    )
    const { isActive, isSelected } = useOptionStatus<ComboboxContextProps>(
      ComboboxContext,
      value
    )

    const scrollRef = useOptionScroll(
      ComboboxContext,
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
        />
        {children || <ComboboxOptionText highlightText={highlightText} />}
      </ComboboxOptionWrapper>
    )
  }
)

export const comboboxOptionStyle = css`
  ${reset}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
  align-items: stretch;
  cursor: default;
  outline: none;
`

export const ComboboxOption = styled(ComboboxOptionInternal).attrs(
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

export function ComboboxOptionTextInternal({
  highlightText = true,
  ...props
}: CompatibleHTMLProps<HTMLSpanElement> & HighlightTextProps) {
  const context = useContext(ComboboxContext)
  const contextMulti = useContext(ComboboxMultiContext)
  const contextToUse = context.transition ? context : contextMulti

  const { data } = contextToUse
  const { inputValue } = data
  const contextOption = (data as ComboboxData).option

  const option = useContext(OptionContext)
  const text = getComboboxText(option)

  if (
    !highlightText ||
    !inputValue ||
    inputValue === '' ||
    // inputValue is reflecting the currently selected option
    // highlighting it would be weird
    inputValue === getComboboxText(contextOption)
  ) {
    return <span {...props}>{text}</span>
  }
  return (
    <span {...props}>
      <ReplaceText match={inputValue}>{text}</ReplaceText>
    </span>
  )
}

export const ComboboxOptionText = styled(ComboboxOptionTextInternal)`
  max-width: 100%;
  word-wrap: break-word;
`
