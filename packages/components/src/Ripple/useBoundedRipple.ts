/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useMeasuredElement, useCallbackRef } from '../utils'
import { useRipple } from './useRipple'
import type { UseBoundedRippleProps, UseBoundedRippleResponse } from './types'

/**
 * @returns callbacks should be mapped to DOM event handlers (see useRippleHandlers)
 * and remaining props should be passed to an internal element that includes rippleStyle
 */
export const useBoundedRipple = <T extends HTMLElement = HTMLElement>({
  ref: forwardedRef,
  ...props
}: UseBoundedRippleProps<T>): UseBoundedRippleResponse<T> => {
  const [element, ref] = useCallbackRef(forwardedRef)
  const [{ height, width }] = useMeasuredElement(element)
  const result = useRipple({ ...props, bounded: true, height, width })
  return { ...result, ref }
}
