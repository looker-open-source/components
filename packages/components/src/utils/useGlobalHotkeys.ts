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

import { useEffect } from 'react'
import type { ElementOrRef } from './getCurrentNode'
import { getCurrentNode } from './getCurrentNode'

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
const keyCommandCollection: { [key: string]: Command[] } = {}

const getCommandGroup = (keyCommand: string) => {
  const commandGroup: Command[] = keyCommandCollection[keyCommand] || []
  if (!keyCommandCollection[keyCommand]) {
    keyCommandCollection[keyCommand] = commandGroup
  }
  return commandGroup
}

const addCommand = (keyCommand: string, cb: CB, target: HTMLElement) => {
  const commandGroup = getCommandGroup(keyCommand)
  commandGroup.push({ cb, target })
}

const removeCommand = (keyCommand: string, target: HTMLElement | null) => {
  const commandGroup = getCommandGroup(keyCommand)
  const index = commandGroup.findIndex(command => command.target === target)
  commandGroup.splice(index, 1)
}

/*
 * doRectsIntersect calculates whether two elements (often two focus traps)
 * are layered on top of each other.
 */
const doRectsIntersect = (r1: DOMRect, r2: DOMRect) => {
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
const calculateIntersectionPoint = (r1: DOMRect, r2: DOMRect) => {
  const y = Math.max(r2.top, r1.top)
  const x = Math.max(r1.left, r2.left)
  return { x, y }
}

/*
 * organizeKeyCommands grabs a key command array and returns an ordered array.
 * Array sorted by dom stacking order.
 */
const organizeKeyCommands = (keyCommand: string) => {
  const commandGroup = [...getCommandGroup(keyCommand)]

  // sort elements by dom nesting order
  commandGroup.sort((ev1, ev2) => {
    const rect1 = ev1.target.getBoundingClientRect()
    const rect2 = ev2.target.getBoundingClientRect()

    if (!doRectsIntersect(rect1, rect2)) {
      // no intersection – check where focus is
      // could be comparing a popover and dialog that don't intersect
      if (ev1.target.contains(document.activeElement)) {
        return -1
      }
      if (ev2.target.contains(document.activeElement)) {
        return 1
      }
      // return 0 to specify equal stacking order.
      return 0
    } else {
      // elements intersect! sort by dom stacking order
      const { x, y } = calculateIntersectionPoint(rect1, rect2)
      const stackedElements = document.elementsFromPoint(x, y)
      const idx1 = stackedElements.findIndex(el => el === ev1.target)
      const idx2 = stackedElements.findIndex(el => el === ev2.target)
      return idx1 > idx2 ? 1 : -1
    }
  })

  return commandGroup
}

/**
 * Registers a global key command tied to a given element
 * @param keyCommand A single key to be used in the keydown listener
 * @param cb The function to be called on keydown
 * @param elementOrRef The element or ref associated with the key command
 */
export const useGlobalHotkeys = (
  keyCommand: string,
  cb: CB,
  elementOrRef: ElementOrRef
) => {
  useEffect(() => {
    const target = getCurrentNode(elementOrRef)

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === keyCommand) {
        // Compare with other existing key command elements and if this is
        // the 1st one (stacked on top or focused), call the handler
        const orderedCommands = organizeKeyCommands(keyCommand)
        if (orderedCommands[0]?.target === target) {
          orderedCommands[0].cb()
        }
      }
    }

    if (target) {
      addCommand(keyCommand, cb, target)
      document.addEventListener('keydown', handleKeydown)
    }

    return () => {
      removeCommand(keyCommand, target)
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [keyCommand, cb, elementOrRef])
}
