/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react';
import { useMemo } from 'react';
import type { GetWindowedListBoundaryProps } from './getWindowedListBoundaries';
import { getWindowedListBoundaries } from './getWindowedListBoundaries';
import { useCallbackRef } from './useCallbackRef';
import { useMeasuredElement } from './useMeasuredElement';
import { useScrollPosition } from './useScrollPosition';

export type UseWindowProps<E extends HTMLElement> = Omit<
  GetWindowedListBoundaryProps,
  'height' | 'scrollPosition'
> & {
  ref?: Ref<E>;
};

export const useWindow = <E extends HTMLElement = HTMLElement>({
  itemCount,
  enabled,
  itemHeight,
  ref,
  spacerTag,
}: UseWindowProps<E>) => {
  const [containerElement, callbackRef] = useCallbackRef<E>(ref);
  const [{ height }] = useMeasuredElement(enabled ? containerElement : null);
  const scrollPosition = useScrollPosition(enabled ? containerElement : null);

  const windowOptions = useMemo(() => {
    return getWindowedListBoundaries({
      enabled,
      height,
      itemCount,
      itemHeight,
      scrollPosition,
      spacerTag,
    });
  }, [enabled, itemCount, height, itemHeight, scrollPosition, spacerTag]);

  return {
    ...windowOptions,
    ref: callbackRef,
  };
};
