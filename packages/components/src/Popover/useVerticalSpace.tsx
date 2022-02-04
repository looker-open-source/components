/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import type { Placement } from '@popperjs/core'

const topPlacements: Placement[] = [
  'top',
  'top-start',
  'top-end',
  'right-end',
  'left-end',
]

const bottomPlacements: Placement[] = [
  'bottom',
  'bottom-start',
  'bottom-end',
  'right-start',
  'left-start',
]

const sidePlacements: Placement[] = [
  'left-start',
  'left-end',
  'left',
  'right-start',
  'right-end',
  'right',
]

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
  const placementIsBottom = placement && bottomPlacements.includes(placement)
  const placementIsTop = placement && topPlacements.includes(placement)
  const placementIsSide = placement && sidePlacements.includes(placement)

  useEffect(() => {
    const getVerticalSpace = () => {
      if (element) {
        if (placementIsBottom || placementIsTop) {
          const { top, bottom } = element.getBoundingClientRect()
          // If pin = true, we only care about the space on the placement side
          // Otherwise, we want both the top and bottom and pick the bigger
          if (!pin || placementIsTop) {
            // If placement is to the side, the height of the trigger should be included
            const spaceTop = placementIsSide ? bottom : top
            setSpaceTop(spaceTop)
          } else if (pin) {
            setSpaceTop(0)
          }
          if (!pin || placementIsBottom) {
            // If placement is to the side, the height of the trigger should be included
            const sideToUse = placementIsSide ? top : bottom
            setSpaceBottom(window.innerHeight - sideToUse)
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
    placementIsSide,
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
