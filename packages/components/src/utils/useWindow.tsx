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

import React, { Ref, useMemo } from 'react'
import {
  GetWindowedListBoundaryProps,
  getWindowedListBoundaries,
} from './getWindowedListBoundaries'
import { useCallbackRef } from './useCallbackRef'
import { useMeasuredElement } from './useMeasuredElement'
import { useScrollPosition } from './useScrollPosition'

export type WindowSpacerTag = 'div' | 'li' | 'tr'

export type UseWindowProps<E extends HTMLElement> = Omit<
  GetWindowedListBoundaryProps,
  'height' | 'scrollPosition'
> & {
  /**
   * Tag to use for the spacers above and below the window
   */
  spacerTag?: WindowSpacerTag
  ref?: Ref<E>
}

export const useWindow = <E extends HTMLElement = HTMLElement>({
  itemCount,
  enabled,
  itemHeight,
  ref,
  spacerTag = 'div',
}: UseWindowProps<E>) => {
  const [containerElement, callbackRef] = useCallbackRef<E>(ref)
  const [{ height }] = useMeasuredElement(enabled ? containerElement : null)
  const scrollPosition = useScrollPosition(enabled ? containerElement : null)

  const { start, end, beforeHeight, afterHeight } = useMemo(() => {
    return getWindowedListBoundaries({
      enabled,
      height,
      itemCount,
      itemHeight,
      scrollPosition,
    })
  }, [enabled, itemCount, height, itemHeight, scrollPosition])

  const Spacer = spacerTag
  // after & before are spacers to make scrolling smooth
  const before =
    beforeHeight > 0 ? (
      <Spacer style={{ height: `${beforeHeight}px` }} data-testid="before" />
    ) : null
  const after =
    afterHeight > 0 ? (
      <Spacer style={{ height: `${afterHeight}px` }} data-testid="after" />
    ) : null

  return {
    after,
    before,
    containerElement,
    end,
    ref: callbackRef,
    start,
  }
}
