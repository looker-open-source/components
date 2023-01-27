/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import throttle from 'lodash/throttle'
import { useEffect, useState } from 'react'

/**
 * Returns the scroll top position of an element
 * @param element the element that is being scrolled
 */
export const useScrollPosition = (element: HTMLElement | null) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const scrollListener = throttle(
      () => {
        if (element) {
          setScrollPosition(element.scrollTop)
        }
      },
      50,
      { leading: true, trailing: true }
    )

    if (element) {
      element.addEventListener('scroll', scrollListener)
      scrollListener()
    }

    return () => {
      element && element.removeEventListener('scroll', scrollListener)
      setScrollPosition(0)
    }
  }, [element])

  return scrollPosition
}
