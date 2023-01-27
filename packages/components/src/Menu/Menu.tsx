/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Ref, ReactElement } from 'react'
import React, { cloneElement, forwardRef } from 'react'
import type { ListProps } from '../List'
import type { PopoverProps, UsePopoverResponseDom } from '../Popover'
import { Popover, popoverPropKeys } from '../Popover'
import { useID } from '../utils'
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
}
type PartitionProps = Omit<MenuProps, 'children' | 'content' | 'id' | 'listRef'>
type KeyOfPartitionProps = keyof PartitionProps

// Returns two object, the first being Popover props and the second being List props
const partitionMenuProps = (
  props: PartitionProps,
  popoverPropKeys: Array<keyof PopoverProps>
) => {
  const allProps = { ...props }
  const popoverProps: Record<string, unknown> = {}

  popoverPropKeys.forEach(key => {
    if (props[key as KeyOfPartitionProps] !== undefined) {
      popoverProps[key] = props[key as KeyOfPartitionProps]
    }
    delete allProps[key as KeyOfPartitionProps]
  })

  const listProps = allProps

  return [popoverProps, listProps]
}

export const Menu = forwardRef(
  (
    { children, content, id: propsID, listRef, ...restProps }: MenuProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
