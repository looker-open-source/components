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

import {
  useState,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
} from 'react'

export interface UseButtonProps<E extends HTMLElement> {
  onBlur: (e: FocusEvent<E>) => void
  onClick: (e: SyntheticEvent<E>) => void
  onKeyDown: (e: KeyboardEvent<E>) => void
  onKeyUp: (e: KeyboardEvent<E>) => void
}

export function useButton<E extends HTMLElement>({
  onBlur,
  onClick,
  onKeyUp,
}: UseButtonProps<E>) {
  const [focusVisible, setFocusVisible] = useState(false)

  return {
    focusVisible,
    onBlur: (e: FocusEvent<E>) => {
      setFocusVisible(false)
      onBlur(e)
    },
    onClick: (e: MouseEvent<E>) => {
      setFocusVisible(false)
      onClick(e)
    },
    onKeyUp: (e: KeyboardEvent<E>) => {
      const isCorrectTarget = e.currentTarget === e.target
      if (e.key === 'Tab' && isCorrectTarget) {
        setFocusVisible(true)
      }
      onKeyUp(e)
    },
  }
}
