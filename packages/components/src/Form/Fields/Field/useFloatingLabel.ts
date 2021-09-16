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

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import type { FocusEvent } from 'react'
import { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { getPortalRoot } from '../../../Portal'
import { useSyncedState, getNextFocusTarget } from '../../../utils'
import type { UseFloatingLabelProps } from './types'

const defaultCheckValueOnBlur = (e: FocusEvent) => {
  const target = e.currentTarget
  const input =
    target.querySelector('input') || target.querySelector('textarea')
  return input?.value !== undefined && input.value !== ''
}

/**
 * A helper function to derive the hasValue prop from the value and defaultValue props.
 * Use custom logic for fields that have different value-related props (see FieldChips).
 */
export const getHasValue = <
  Props extends {
    value?: any
    defaultValue?: any
  } = CompatibleHTMLProps<HTMLInputElement>
>({
  value,
  defaultValue,
}: Pick<Props, 'value' | 'defaultValue'>) => {
  if (value !== undefined) return value !== ''
  if (defaultValue !== undefined) return defaultValue !== ''
  return false
}

/**
 * Controls the label position for FloatingLabelField
 */
export const useFloatingLabel = ({
  checkValueOnBlur = defaultCheckValueOnBlur,
  hasValue: propsHasValue,
  labelOffset = '0rem',
}: UseFloatingLabelProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useSyncedState(propsHasValue)

  const theme = useContext(ThemeContext)
  // Limitations of style/CSSProperties type
  // https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
  const style = {
    ['--label-translate' as any]: `${labelOffset}, ${theme.space.u4}`,
  }

  return {
    className: hasValue || isFocused ? 'label-up' : 'label-down',
    handlers: {
      onBlur: (e: FocusEvent<HTMLDivElement>) => {
        const nextFocusTarget = getNextFocusTarget(e)
        if (checkValueOnBlur) {
          setHasValue(checkValueOnBlur(e))
        }

        const portalRoot = getPortalRoot()
        if (
          nextFocusTarget &&
          !e.currentTarget.contains(nextFocusTarget) &&
          !portalRoot.contains(nextFocusTarget)
        ) {
          setIsFocused(false)
        }
      },
      onFocus: () => {
        setIsFocused(true)
      },
    },
    isFocused,
    style,
  }
}
