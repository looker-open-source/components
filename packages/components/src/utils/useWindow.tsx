/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import React, { useMemo } from 'react'
import type { GetWindowedListBoundaryProps } from './getWindowedListBoundaries'
import { getWindowedListBoundaries } from './getWindowedListBoundaries'
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
