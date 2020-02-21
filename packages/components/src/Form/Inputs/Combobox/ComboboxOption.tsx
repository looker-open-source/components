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

import {
  CompatibleHTMLProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import React, { forwardRef, useContext, Ref } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../../../Icon'
import { makeHash } from './utils/makeHash'
import {
  OptionContext,
  ComboboxContext,
  ComboboxContextProps,
} from './ComboboxContext'
import { getComboboxText } from './utils/getComboboxText'
import { useOptionEvents } from './utils/useOptionEvents'
import { useOptionStatus } from './utils/useOptionStatus'
import { useAddOptionToContext } from './utils/useAddOptionToContext'

export interface ComboboxOptionObject {
  /**
   * Additional data associated with the option, will be passed to onChange.
   */
  label?: string
  /**
   * The value to match against when suggesting.
   */
  value: string
}

export interface ComboboxOptionProps
  extends ComboboxOptionObject,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    Omit<CompatibleHTMLProps<HTMLLIElement>, 'data' | 'value'> {
  /**
   * Optional. If omitted, the `value` will be used as the children like:
   * `<ComboboxOption value="Seattle, Tacoma, Washington" />`. But if you need
   * to control a bit more, you can put whatever children you want, but make
   * sure to render a `ComboboxOptionText` as well, so the value is still
   * displayed with the text highlighting on the matched portions.
   *
   * @example
   *   <ComboboxOption value="Apple" />
   *     🍎 <ComboboxOptionText />
   *   </ComboboxOption>
   */
  children?: React.ReactNode
}

export const ComboboxOptionWrapper = forwardRef(
  (
    { children, label, value, ...rest }: ComboboxOptionProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => (
    <OptionContext.Provider value={{ label, value }}>
      <li
        {...omit(rest, 'color')}
        ref={forwardedRef}
        id={String(makeHash(value))}
        role="option"
        // without this the menu will close from `onBlur`, but with it the
        // element can be `document.activeElement` and then our focus checks in
        // onBlur will work as intended
        tabIndex={-1}
      >
        {children}
      </li>
    </OptionContext.Provider>
  )
)

ComboboxOptionWrapper.displayName = 'ComboboxOptionWrapper'

const ComboboxOptionInternal = forwardRef(
  (
    { children, ...props }: ComboboxOptionProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const { label, value } = props

    useAddOptionToContext<ComboboxContextProps>(ComboboxContext, value, label)
    const optionEvents = useOptionEvents<ComboboxContextProps>(
      props,
      ComboboxContext
    )
    const { isActive, isSelected } = useOptionStatus<ComboboxContextProps>(
      ComboboxContext,
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
          {isSelected && <Icon name="Check" mr={0} />}
        </ComboboxOptionDetail>
        {children || <ComboboxOptionText />}
      </ComboboxOptionWrapper>
    )
  }
)

ComboboxOptionInternal.displayName = 'ComboboxOptionInternal'

export const ComboboxOptionDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.space.large};
`

export const comboboxOptionGrid = css`
  display: grid;
  grid-gap: ${props => props.theme.space.xxsmall};
  grid-template-columns: ${props => props.theme.space.medium} 1fr;
`

export const comboboxOptionStyle = css`
  ${reset}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
  cursor: default;
  align-items: flex-start;
  ${comboboxOptionGrid}
  outline: none;

  &[aria-selected='true'] {
    background-color: ${props =>
      props.theme.colors.semanticColors.primary.lighter};
    color:  ${props => props.theme.colors.semanticColors.primary.darker};
  }
`

export const ComboboxOption = styled(ComboboxOptionInternal)`
  ${comboboxOptionStyle}
`
export const comboboxOptionDefaultProps: Partial<ComboboxOptionProps> = {
  color: 'palette.charcoal700',
  display: 'flex',
  fontSize: 'small',
  px: 'xsmall',
  py: 'xxsmall',
}

ComboboxOption.defaultProps = comboboxOptionDefaultProps

// ComboboxOptionText

// We don't forwardRef or spread props because we render multiple spans or null,
// should be fine 🤙
export function ComboboxOptionTextInternal(
  props: CompatibleHTMLProps<HTMLSpanElement>
) {
  const option = useContext(OptionContext)
  return <span {...props}>{getComboboxText(option)}</span>
}

export const ComboboxOptionText = styled(ComboboxOptionTextInternal)``
