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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { FocusEvent, KeyboardEvent, MouseEvent, useState, useMemo } from 'react'

// These 2 are helper interfaces for components using this hook
export interface FocusVisibleProps {
  focusVisible: boolean
}
export interface GenericClickProps<E extends HTMLElement>
  extends Omit<CompatibleHTMLProps<E>, 'onClick'> {
  onClick?: (e: MouseEvent<E> | KeyboardEvent<E>) => void
}

type Attributes = 'disabled' | 'onBlur' | 'onKeyUp' | 'role'

export interface UseClickableProps<E extends HTMLElement>
  extends Pick<CompatibleHTMLProps<E>, Attributes>,
    Pick<GenericClickProps<E>, 'onClick'> {}

export interface UseClickableResult<E extends HTMLElement>
  extends Pick<CompatibleHTMLProps<E>, Attributes | 'onClick' | 'tabIndex'>,
    FocusVisibleProps {}
/**
 * This hook provides keyboard accessibility for any component that renders a non-button element
 * that is both focus-able and clickable. The component should handle styling for focusVisible.
 */
export function useClickable<E extends HTMLElement>({
  disabled,
  onBlur,
  onClick,
  onKeyUp,
  role,
}: UseClickableProps<E>): UseClickableResult<E> {
  const [focusVisible, setFocusVisible] = useState(false)

  return useMemo(
    () => ({
      disabled,
      focusVisible,
      onBlur: (e: FocusEvent<E>) => {
        onBlur?.(e)
        setFocusVisible(false)
      },
      onClick: (e: MouseEvent<E>) => {
        if (!disabled) {
          onClick?.(e)
          setFocusVisible(false)
        }
      },
      onKeyUp: (e: KeyboardEvent<E>) => {
        const shouldHandle = !disabled && e.currentTarget === e.target
        if (shouldHandle) {
          switch (e.key) {
            case 'Enter':
            case ' ':
              onClick?.(e)
              break
            case 'Tab':
              setFocusVisible(true)
          }
        }
        onKeyUp?.(e)
      },
      // if onClick is used, role should be 'button' unless otherwise specified
      // otherwise undefined b/c depending on usage, 'button' could be misleading
      role: role || onClick ? 'button' : undefined,
      tabIndex: disabled ? undefined : 0,
    }),
    [disabled, focusVisible, onBlur, onClick, onKeyUp, role]
  )
}
