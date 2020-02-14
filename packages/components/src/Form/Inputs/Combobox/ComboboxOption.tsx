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
import React, { forwardRef, useEffect, useRef, useContext, Ref } from 'react'
import styled, { css } from 'styled-components'
import { useWrapEvent } from '../../../utils'
import { Icon } from '../../../Icon'
import { makeHash } from './helpers'
import { OptionContext, ComboboxContext } from './ComboboxContext'
import { ComboboxActionType } from './state'

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

export function getComboboxText(
  value?: string | ComboboxOptionObject,
  options?: ComboboxOptionObject[]
): string {
  if (!value) return ''
  if (typeof value === 'string') {
    if (options && options.length > 0) {
      const currentOption = options.find(option => option.value === value)
      return getComboboxText(currentOption)
    }
    return value
  }
  return value.label || value.value
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

export const ComboboxOptionDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`

const ComboboxOptionInternal = forwardRef(function ComboboxOption(
  {
    children,
    label,
    value,
    onClick,
    onMouseEnter,
    ...props
  }: ComboboxOptionProps,
  forwardedRef: Ref<HTMLLIElement>
) {
  const {
    data: { option: contextOption, navigationOption },
    onChange,
    transition,
    optionsRef,
  } = useContext(ComboboxContext)

  const indexRef = useRef<number>(-1)

  useEffect(() => {
    const option = { label, value }
    const optionsRefCurrent = optionsRef && optionsRef.current
    if (optionsRefCurrent) {
      // Was this option already in the list?
      // If so, re-insert it at the same spot
      if (indexRef.current > -1) {
        optionsRefCurrent.splice(indexRef.current, 0, option)
      } else {
        optionsRefCurrent.push(option)
      }
    }
    return () => {
      // Delete option from the array but save the index so it can be re-inserted there
      if (optionsRefCurrent) {
        const index = optionsRefCurrent.indexOf(option)
        indexRef.current = index
        optionsRefCurrent.splice(index, 1)
      }
    }
  }, [value, label, optionsRef])

  const isActive = navigationOption && navigationOption.value === value
  const isCurrent = contextOption && contextOption.value === value

  function handleClick() {
    const option = { label, value }
    onChange && onChange(option)
    transition && transition(ComboboxActionType.SELECT_WITH_CLICK, { option })
  }

  function handleMouseEnter() {
    const option = { label, value }
    transition && transition(ComboboxActionType.NAVIGATE, { option })
  }

  const wrappedOnClick = useWrapEvent(handleClick, onClick)
  const wrappedOnMouseEnter = useWrapEvent(handleMouseEnter, onMouseEnter)

  return (
    <OptionContext.Provider value={{ label, value }}>
      <li
        {...omit(props, 'color')}
        ref={forwardedRef}
        id={String(makeHash(value))}
        role="option"
        aria-selected={isActive}
        // without this the menu will close from `onBlur`, but with it the
        // element can be `document.activeElement` and then our focus checks in
        // onBlur will work as intended
        tabIndex={-1}
        onClick={wrappedOnClick}
        onMouseEnter={wrappedOnMouseEnter}
      >
        <ComboboxOptionDetail>
          {isCurrent && <Icon name="Check" mr="xxsmall" size={16} />}
        </ComboboxOptionDetail>
        {children || <ComboboxOptionText />}
      </li>
    </OptionContext.Provider>
  )
})

ComboboxOptionInternal.displayName = 'ComboboxOptionInternal'

export const comboboxOptionGrid = css`
  display: grid;
  grid-gap: ${props => props.theme.space.xxsmall};
  grid-template-columns: ${props => props.theme.space.medium} 1fr;
`

export const ComboboxOption = styled(ComboboxOptionInternal)`
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

ComboboxOption.defaultProps = {
  color: 'palette.charcoal700',
  display: 'flex',
  fontSize: 'small',
  px: 'xsmall',
  py: 'xxsmall',
}

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
