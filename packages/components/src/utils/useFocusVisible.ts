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

import { CompatibleHTMLProps } from '@looker/design-tokens'
import { FocusEvent, KeyboardEvent, useMemo, useState } from 'react'
import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components'

export interface FocusVisibleProps {
  focusVisible: boolean
}

export type UseFocusVisibleProps<E extends HTMLElement> = Pick<
  CompatibleHTMLProps<E>,
  'onBlur' | 'onKeyUp'
>

export const focusVisibleCSSWrapper = <Props extends FocusVisibleProps>(
  styleFn: (
    props: ThemedStyledProps<Props, DefaultTheme>
  ) => FlattenInterpolation<ThemedStyledProps<Props, DefaultTheme>>
) => css<Props>`
  &:focus-visible {
    ${styleFn}
  }
  ${(props) => props.focusVisible && styleFn(props)}
`

export const useFocusVisible = <E extends HTMLElement = HTMLElement>({
  onBlur,
  onKeyUp,
}: UseFocusVisibleProps<E>) => {
  const [isFocusVisible, setFocusVisible] = useState(false)

  return useMemo(() => {
    return {
      focusVisible: isFocusVisible,
      onBlur: (e: FocusEvent<E>) => {
        setFocusVisible(false)
        onBlur?.(e)
      },
      onKeyUp: (e: KeyboardEvent<E>) => {
        if (e.currentTarget === e.target) {
          setFocusVisible(true)
        }
        onKeyUp?.(e)
      },
    }
  }, [isFocusVisible, onBlur, onKeyUp])
}
