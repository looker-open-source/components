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
import { useID } from '../utils'
import { Popover, PopoverProps, UsePopoverResponseDom } from '../Popover'
import { MenuList, MenuListProps } from './MenuList'

export interface MenuDomProps extends UsePopoverResponseDom {
  'aria-controls': string
  disabled?: boolean
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

export const Menu = forwardRef(
  (
    {
      children,
      content,
      id: propsID,
      disabled,
      listRef,

      // Popover props to pass through
      canClose,
      cancelClickOutside,
      focusTrap,
      hoverDisclosureRef,
      isOpen,
      onClose,
      pin,
      placement,
      setOpen,
      triggerElement,
      triggerToggle,

      // List props to pass through
      ...props
    }: MenuProps,
    ref: Ref<any>
  ) => {
    const id = useID(propsID)
    const list = content && (
      <MenuList id={id} {...props} ref={listRef}>
        {content}
      </MenuList>
    )
    children = cloneElement(children, {
      'aria-controls': id,
      disabled,
    })

    return (
      <Popover
        content={disabled ? undefined : list}
        ref={ref}
        {...{
          canClose,
          cancelClickOutside,
          focusTrap,
          hoverDisclosureRef,
          isOpen,
          onClose,
          pin,
          placement,
          setOpen,
          triggerElement,
          triggerToggle,
        }}
      >
        {children}
      </Popover>
    )
  }
)
