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
import omit from 'lodash/omit'
import React, { KeyboardEvent, MouseEvent, ReactNode, useContext } from 'react'
import { NestedSurface } from '../Overlay/OverlaySurface'
import { usePopover } from '../Popover'
import { useWrapEvent } from '../utils'
import { MenuList } from './MenuList'
import { SubmenuContext } from './SubmenuProvider'

export interface UseSubmenuProps
  extends Pick<
    CompatibleHTMLProps<HTMLLIElement>,
    'onClick' | 'onKeyDown' | 'onMouseEnter' | 'onMouseLeave'
  > {
  id: string
  compact?: boolean
  /**
   * A list of menu items that will open to the right when the user hovers
   * or hits the right arrow key
   */
  submenu?: ReactNode
}

const noop = () => undefined

export const useSubmenu = ({
  compact,
  id,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  submenu,
}: UseSubmenuProps) => {
  const { value, change, delayChange } = useContext(SubmenuContext)
  const openSubmenu = () => change(id)
  const closeSubmenu = () => change('')

  const itemHandlers = {
    onClick: useWrapEvent((e: MouseEvent<HTMLLIElement>) => {
      if (submenu && !onClick) {
        openSubmenu()
        e.preventDefault()
      }
    }, onClick),
    onKeyDown: useWrapEvent(
      submenu
        ? (e: KeyboardEvent<HTMLLIElement>) => {
            if (e.key === 'ArrowRight') {
              openSubmenu()
            }
          }
        : noop,
      onKeyDown
    ),
    onMouseEnter: useWrapEvent(
      submenu
        ? (e) => {
            delayChange(id, transitions.simple)
            // Focus the button so that when the submenu closes, focus trap will
            // return focus here instead of the first item in the list
            const button = e.currentTarget.querySelector('button')
            button?.focus()
          }
        : noop,
      onMouseEnter
    ),
    onMouseLeave: useWrapEvent(
      submenu
        ? () => {
            delayChange('', transitions.simple)
          }
        : noop,
      onMouseLeave
    ),
  }
  const listHandlers = submenu
    ? {
        onKeyDown: (e: KeyboardEvent<HTMLUListElement>) => {
          if (e.key === 'ArrowLeft') {
            closeSubmenu()
          }
        },
        onMouseEnter: openSubmenu,
        onMouseLeave: closeSubmenu,
      }
    : {}

  const { popover, domProps } = usePopover({
    content: (
      <MenuList data-autofocus="true" {...listHandlers} compact={compact}>
        {submenu}
      </MenuList>
    ),
    disabled: submenu === undefined,
    isOpen: value === id,
    placement: 'right-start',
    scrollLock: false,
    setOpen: closeSubmenu,
    surface: NestedSurface,
    triggerToggle: false,
  })

  return {
    domProps: { ...itemHandlers, ...omit(domProps, 'onClick') },
    popover,
  }
}
