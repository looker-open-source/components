/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useResize } from '../useResize'
import { useCallbackRef } from '../useCallbackRef'

export type UseOverflowProps = {
  hasOverflow: boolean
}

export const useOverflow = (
  ref?: Ref<HTMLElement>
): [boolean, (node: HTMLElement | null) => void] => {
  const [element, callbackRef] = useCallbackRef(ref)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [height, setHeight] = useState(0)

  const handleResize = useCallback(() => {
    if (element) {
      setHeight(element.offsetHeight)
    }
  }, [element])

  useResize(element, handleResize)

  useEffect(() => {
    if (element) {
      setHasOverflow(element.offsetHeight < element.scrollHeight)
    }
  }, [height, element])

  return [hasOverflow, callbackRef]
}
