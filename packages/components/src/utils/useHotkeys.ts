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

import { useHotkeys as useHotkeysHook } from 'react-hotkeys-hook'
import { MutableRefObject } from 'react'
import get from 'lodash/get'
import set from 'lodash/set'
import uniqBy from 'lodash/uniqBy'
import filter from 'lodash/filter'
import debounce from 'lodash/debounce'

type CB = (e?: KeyboardEvent) => void

interface Event {
  cb: CB
  target: HTMLElement
}

const eventsList: { [key: string]: Event[] } = {}

const doRectsIntersect = (r1: ClientRect, r2: ClientRect) => {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  )
}

const calculateIntersectionPoint = (r1: ClientRect, r2: ClientRect) => {
  const y = Math.max(r2.top, r1.top)
  const x = Math.max(r1.left, r2.left)
  return { x, y }
}

const organizeEventsList = (shortcut: string) => {
  const listSlice = [...(get(eventsList, shortcut, []) as Event[])]

  // filter out elements that are no longer in the document
  const newListSlice: Event[] = filter(listSlice, (event) =>
    document.body.contains(event.target)
  )

  // sort elements by dom nesting order
  newListSlice.sort((ev1, ev2) => {
    const rect1 = ev1.target.getBoundingClientRect()
    const rect2 = ev2.target.getBoundingClientRect()

    if (!doRectsIntersect(rect1, rect2)) {
      // no intersection
      return 0
    } else {
      // elements intersect! sort by dom stacking order
      const { x, y } = calculateIntersectionPoint(rect1, rect2)
      const stackedElements = document.elementsFromPoint(x, y)
      const idx1 = stackedElements.findIndex((el) => el === ev1.target)
      const idx2 = stackedElements.findIndex((el) => el === ev2.target)
      return idx1 > idx2 ? 1 : -1
    }
  })

  eventsList[shortcut] = newListSlice
}

const executeStackedKeyCommand = debounce(
  (e: KeyboardEvent, cbStack: Event[]) => {
    cbStack[0].cb(e)
  },
  50
)

export const useHotkeys = (
  keyCommand: string,
  cb: CB,
  containerRef: MutableRefObject<null | HTMLElement>
) => {
  if (containerRef.current) {
    const newEvent: Event = { cb, target: containerRef.current }
    set(
      eventsList,
      keyCommand,
      uniqBy([...get(eventsList, keyCommand, []), newEvent], (el) => {
        return el.target
      })
    )
  }
  const wrappedCb = (e: KeyboardEvent, handler: any) => {
    organizeEventsList(handler.shortcut)
    executeStackedKeyCommand(e, eventsList[handler.shortcut])

    // TODO: support focus event (multiple menus)
    // if (
    //   containerRef.current &&
    //   containerRef.current.contains(document.activeElement)
    // ) {
    //   // console.log('NEW EVENT', e.target)
    //   // only fire event within active dom context
    //   // cb(e)
    // } else {
    //   // console.log(containerRef.current, document.activeElement)
    //   // console.log('NEW EVENT NOT NESTED')
    //   // cb()
    // }
  }
  useHotkeysHook(keyCommand, wrappedCb)
}
