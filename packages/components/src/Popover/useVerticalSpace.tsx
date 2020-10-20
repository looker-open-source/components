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

import { useEffect, CSSProperties, useState } from 'react'
import { Placement } from '@popperjs/core'

export const useVerticalSpace = (
  element: HTMLElement | null,
  pin: boolean,
  placement: Placement,
  isOpen: boolean,
  // Included to trigger an update if Popper's positioning moves
  popperStyle: CSSProperties
) => {
  const [spaceTop, setSpaceTop] = useState(0)
  const [spaceBottom, setSpaceBottom] = useState(0)
  const placementIsBottom = placement && placement.includes('bottom')
  const placementIsTop = placement && placement.includes('top')

  useEffect(() => {
    const getVerticalSpace = () => {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          const { top, bottom } = element.getBoundingClientRect()
          // If pin = true, we only care about the space on the placement side
          // Otherwise, we want both the top and bottom and pick the bigger
          if (!pin || placementIsTop) {
            setSpaceTop(top)
          } else if (pin) {
            setSpaceTop(0)
          }
          if (!pin || placementIsBottom) {
            setSpaceBottom(window.innerHeight - bottom)
          } else if (pin) {
            setSpaceBottom(0)
          }
        } else {
          // Horizontally placed Popovers can be as tall as the window
          setSpaceTop(window.innerHeight)
        }
      }
    }

    if (isOpen) {
      window.addEventListener('resize', getVerticalSpace)
      getVerticalSpace()
    }

    return () => {
      window.removeEventListener('resize', getVerticalSpace)
    }
  }, [
    element,
    pin,
    placementIsBottom,
    placementIsTop,
    isOpen,
    popperStyle.transform,
  ])

  // Set height to the larger, popper will take care of flipping as needed
  const max = Math.max(spaceTop, spaceBottom)

  const windowHeight = typeof window !== `undefined` ? window.innerHeight : 50

  // If the height of the overlay will be 50px or less,
  // it's too small to scroll
  // Popper will awkwardly move the overlay to try to fit in the window
  // but that's better than squishing it so small.
  return max > 50 ? max : windowHeight
}
