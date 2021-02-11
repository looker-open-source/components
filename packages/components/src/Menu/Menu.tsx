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

import React, { cloneElement, forwardRef, Ref, ReactElement } from 'react'
import { Placement } from '@popperjs/core'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import { useID } from '../utils'
import {
  Popover,
  PopoverProps,
  UsePopoverResponseDom,
  popoverPropKeys,
} from '../Popover'
import { ListProps } from '../List'
import { MenuList } from './MenuList'

export interface MenuDomProps extends UsePopoverResponseDom {
  'aria-controls': string
}

export interface MenuProps
  extends Omit<PopoverProps, 'children'>,
    Omit<ListProps, 'children' | 'content'> {
  /**
   * A ReactElement that accepts dom props
   */
  children: ReactElement<MenuDomProps>
  /**
   * The ref to be passed to the list element (`ref` is passed to the triggering element)
   */
  listRef?: Ref<HTMLUListElement>
  /**
   * Can be one of: top, bottom, left, right, auto, with the modifiers: start,
   * end. This value comes directly from popper.js. See
   * https://popper.js.org/popper-documentation.html#Popper.placements for more
   * info.
   * @default bottom
   */
  placement?: Placement
  /**
   * By default MenuList will reposition itself if they overflow the widow.
   * You can use the pin property to override this behavior.
   */
  pin?: boolean
  /**
   * Allow the overlay to break out of the scroll parent
   */
  escapeWithReference?: boolean
}

export const Menu = forwardRef(
  (
    { children, content, id: propsID, listRef, ...props }: MenuProps,
    ref: Ref<any>
  ) => {
    const popoverProps = pick(props, popoverPropKeys)
    const listProps = omit(props, popoverPropKeys)

    const id = useID(propsID)
    const list = content && (
      <MenuList id={id} {...listProps} ref={listRef} data-autofocus="true">
        {content}
      </MenuList>
    )
    children = cloneElement(children, { 'aria-controls': id })

    return (
      <Popover content={list} ref={ref} {...popoverProps}>
        {children}
      </Popover>
    )
  }
)
