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

import React, { cloneElement, forwardRef, Ref, ReactElement } from 'react'
import { useID } from '../utils'
import {
  Popover,
  PopoverProps,
  UsePopoverResponseDom,
  popoverPropKeys,
} from '../Popover'
import { MenuList, MenuListProps } from './MenuList'

export interface MenuDomProps extends UsePopoverResponseDom {
  'aria-controls': string
}

export interface MenuProps
  extends Omit<PopoverProps, 'children'>,
    Omit<MenuListProps, 'children' | 'content'> {
  /**
   * A ReactElement that accepts dom props
   */
  children: ReactElement<MenuDomProps>
  /**
   * The ref to be passed to the list element (`ref` is passed to the triggering element)
   */
  listRef?: Ref<HTMLUListElement>
}

// Returns two object, the first being Popover props and the second being List props
const partitionMenuProps = (
  props: Omit<MenuProps, 'children' | 'content' | 'id' | 'listRef'>,
  popoverPropKeys: Array<keyof PopoverProps>
) => {
  const allProps = { ...props }

  const popoverProps = {}
  popoverPropKeys.forEach((key) => {
    if (props[key] !== undefined) {
      popoverProps[key] = props[key]
    }
    delete allProps[key]
  })

  const listProps = allProps

  return [popoverProps, listProps]
}

export const Menu = forwardRef(
  (
    { children, content, id: propsID, listRef, ...restProps }: MenuProps,
    ref: Ref<any>
  ) => {
    const [popoverProps, listProps] = partitionMenuProps(
      restProps,
      popoverPropKeys
    )

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
