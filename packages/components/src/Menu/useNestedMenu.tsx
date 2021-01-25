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

import { CompatibleHTMLProps, transitions } from '@looker/design-tokens'
import { Placement } from '@popperjs/core'
import omit from 'lodash/omit'
import React, {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { DialogContext } from '../Dialog'
import { usePopover } from '../Popover'
import { useWrapEvent } from '../utils'
import { MenuList } from './MenuList'
import { NestedMenuContext } from './NestedMenuProvider'
import { NestedMenuSurface } from './NestedMenuSurface'

interface MousePosition {
  x: number
  y: number
}

const movingTowardPlacement = (
  newPos: MousePosition,
  prevPos?: MousePosition,
  placement?: Placement
) => {
  if (!prevPos || !placement) return false
  switch (placement) {
    case 'right-start':
      // Moving right & down
      return newPos.x > prevPos.x && newPos.y > prevPos.y
    case 'right-end':
      // Moving right & up
      return newPos.x > prevPos.x && newPos.y < prevPos.y
    case 'left-start':
      // Moving left & down
      return newPos.x < prevPos.x && newPos.y > prevPos.y
    case 'left-end':
      // Moving left & up
      return newPos.x < prevPos.x && newPos.y < prevPos.y
    default:
      // Return the same result as 'right-start' for testing
      // when placement is inexplicably 'bottom' with jsdom
      return newPos.x > prevPos.x && newPos.y > prevPos.y
  }
}

export interface UseNestedMenuProps
  // Pick the events that need to be wrapped with various handlers from MenuItem's props.
  extends Pick<
    CompatibleHTMLProps<HTMLLIElement>,
    'onClick' | 'onKeyDown' | 'onMouseEnter' | 'onMouseLeave'
  > {
  id: string
  compact?: boolean
  /**
   * A list of menu items that will open to the right when the user hovers
   * or hits the right arrow key. Only supports one level of nesting.
   */
  nestedMenu?: ReactNode
}

const noop = () => undefined

export const useNestedMenu = ({
  compact,
  id,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  nestedMenu,
}: UseNestedMenuProps) => {
  const mousePosition = useRef<MousePosition>()
  const focusRef = useRef<Element | null>(null)
  const { value, change, delayChange, waitChange } = useContext(
    NestedMenuContext
  )

  const { closeModal } = useContext(DialogContext)

  // Show the nestedMenu by updating the context with the id for this one
  // Hide it by updating the context to an empty string
  const isOpen = value === id
  const openNestedMenu = () => change(id)
  const closeNestedMenu = () => change('')

  const itemHandlers = {
    onClick: useWrapEvent((e: MouseEvent<HTMLLIElement>) => {
      // If there's an onClick in MenuItem props, that wins
      // Otherwise preventDefault to keep the parent Menu open
      if (nestedMenu && !onClick) {
        openNestedMenu()
        e.preventDefault()
      }
    }, onClick),
    onKeyDown: useWrapEvent(
      nestedMenu
        ? (e: KeyboardEvent<HTMLLIElement>) => {
            if (e.key === 'ArrowRight') {
              openNestedMenu()
            }
          }
        : noop,
      onKeyDown
    ),
    onMouseEnter: useWrapEvent(
      nestedMenu
        ? (e: MouseEvent<HTMLLIElement>) => {
            // Use waitChange since there may be a delay on the close of the previous nestedMenu
            if (value === '') {
              delayChange(id, 100)
            } else {
              waitChange(id)
            }
            focusRef.current = e.currentTarget
          }
        : noop,
      onMouseEnter
    ),
    onMouseLeave: useWrapEvent(
      nestedMenu
        ? (e: MouseEvent<HTMLLIElement>) => {
            if (isOpen) {
              // If the mouse is moving toward the nestedMenu
              // keep it open for long enough to get there
              if (
                movingTowardPlacement(
                  { x: e.screenX, y: e.screenY },
                  mousePosition.current,
                  popperInstanceRef.current?.state.placement
                )
              ) {
                delayChange('', transitions.complex)
              } else {
                change('')
              }
              mousePosition.current = undefined
            } else {
              change('')
            }
          }
        : noop,
      onMouseLeave
    ),
    onMouseMove: (e: MouseEvent<HTMLElement>) => {
      mousePosition.current = { x: e.screenX, y: e.screenY }
    },
  }
  const listHandlers = nestedMenu
    ? {
        onKeyDown: (e: KeyboardEvent<HTMLUListElement>) => {
          switch (e.key) {
            case 'ArrowLeft':
              closeNestedMenu()
              break
            case 'Escape':
              closeModal()
              break
          }
        },
        onMouseEnter: openNestedMenu,
      }
    : {}

  const { popover, popperInstanceRef, domProps } = usePopover({
    content: (
      <MenuList data-autofocus="true" {...listHandlers} compact={compact}>
        {nestedMenu}
      </MenuList>
    ),
    disabled: nestedMenu === undefined,
    // The nestedMenu is only open if the current id matches the one stored in context
    isOpen,
    placement: 'right-start',
    // For long menus, the user may need to scroll away
    // The resulting mouseleave will close the nestedMenu
    scrollLock: false,
    // Since domProps.onClick is not being used, setOpen only needs to close
    // (on click outside or esc key)
    setOpen: closeNestedMenu,
    surface: NestedMenuSurface,
    // Clicking on the MenuItem again should not close the nestedMenu
    triggerToggle: false,
  })

  useEffect(() => {
    if (isOpen && focusRef.current) {
      // Focus the menu item so that when the nestedMenu closes, focus trap will
      // return focus here instead of the first item in the list
      const button = focusRef.current.querySelector('a,button') as HTMLElement
      button?.focus()
    }
  }, [isOpen])

  return {
    domProps: { ...itemHandlers, ...omit(domProps, 'onClick') },
    popover,
  }
}
