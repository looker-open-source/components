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

import { useHotkeys } from 'react-hotkeys-hook'
import type { HotkeysEvent } from 'hotkeys-js'
import { MutableRefObject } from 'react'
import get from 'lodash/get'
import filter from 'lodash/filter'
import debounce from 'lodash/debounce'

type CB = (e?: KeyboardEvent) => void

interface Command {
  cb: CB
  target: HTMLElement
}

/*
 * keyCommandCollection is a collection of all global hotkeys callbacks, grouped by key command.
 * This will mutate as global hotkeys are added or target elements are removed.
 * Example: {
 *   esc: [{ cb: () => {}, target: HTMLDivElement }],
 * }
 */
const keyCommandCollection: { [key: string]: Set<Command> } = {}

/*
 * doRectsIntersect calculates whether two elements (often two focus traps)
 * are layered on top of each other.
 */
const doRectsIntersect = (r1: ClientRect, r2: ClientRect) => {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  )
}

/*
 * calculateIntersectionPoint returns a pixel coordinate where two elements
 * are layered on top of each other.
 */
const calculateIntersectionPoint = (r1: ClientRect, r2: ClientRect) => {
  const y = Math.max(r2.top, r1.top)
  const x = Math.max(r1.left, r2.left)
  return { x, y }
}

/*
 * organizeKeyCommands grabs a key command Set and returns an ordered array.
 * Array sorted by dom stacking order.
 */
const organizeKeyCommands = (shortcut: string) => {
  // convert from Set to array for sorting
  const commandGroup = [
    ...(get(keyCommandCollection, shortcut, []) as Command[]),
  ]

  // sort elements by dom nesting order
  commandGroup.sort((ev1, ev2) => {
    const rect1 = ev1.target.getBoundingClientRect()
    const rect2 = ev2.target.getBoundingClientRect()

    if (!doRectsIntersect(rect1, rect2)) {
      // no intersection. return 0 to specify equal stacking order.
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

  return commandGroup
}

/*
 * executeFirstKeyCommand calls a single keyboard event callback taken from the
 * top of the Command array. The function is Debounced to prevent event bubbling
 * from firing multiple callbacks.
 */
const executeFirstKeyCommand = debounce(
  (e: KeyboardEvent, cbStack: Command[]) => {
    cbStack[0] && cbStack[0].cb(e)
  },
  50
)

/*
 * discardStaleCommands filters out event listeners for elements that are
 * no longer in the document
 */
const discardStaleCommands = (keyCommand: string) => {
  const commandSet = keyCommandCollection[keyCommand]
  keyCommandCollection[keyCommand] = new Set(
    filter(
      [...commandSet],
      // filter out elements that are no longer in the document
      (event) => document.body.contains(event.target)
    )
  )
}

/*
 * useGlobalHotkeys takes a keyCommand, callback, and dom ref.
 * It then adds a unique copy to keyCommandCollection, and passes a wrapped
 * version to the useHotkeys function.
 */
export const useGlobalHotkeys = (
  keyCommand: string,
  cb: CB,
  containerRef: MutableRefObject<null | HTMLElement>
) => {
  if (containerRef.current) {
    const newCommand: Command = { cb, target: containerRef.current }
    const commandSet = get(
      keyCommandCollection,
      keyCommand,
      new Set()
    ) as Set<Command>
    commandSet.add(newCommand)
    keyCommandCollection[keyCommand] = commandSet
  }

  // wrappedCb organizes the list by dom stacking order and only calls the
  // callback associated with the focused element
  const wrappedCb = (e: KeyboardEvent, handler: HotkeysEvent) => {
    discardStaleCommands(handler.shortcut)
    const orderedEventListeners = organizeKeyCommands(handler.shortcut)
    executeFirstKeyCommand(e, orderedEventListeners)
  }

  useHotkeys(keyCommand, wrappedCb, {
    filter: () => {
      // By default, useHotkeys filters out events when form inputs are focused.
      // We can return true here to allow all events regardless of context.
      // for more information on usage: https://github.com/jaywcjlove/hotkeys/#filter
      return true
    },
  })
}
