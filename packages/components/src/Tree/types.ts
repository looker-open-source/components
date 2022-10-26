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

import type { ReactNode } from 'react'
import type { ControlledLoosely } from '../Accordion2/controlTypes'
import type { ListItemProps } from '../ListItem'
import type { GenericClickProps } from '../utils/useClickable'

// We need this array to pass link related props from Tree to the nested TreeItem (rather than the AccordionDisclosure)
const linkPropKeys = ['download', 'href', 'rel', 'target'] as const

export const treeItemInnerPropKeys = [
  'color',
  'density',
  'description',
  'detail',
  'disabled',
  'hovered',
  'icon',
  'selected',
  'truncate',
  ...linkPropKeys,
] as const

export type TreeItemInnerPropKey = typeof treeItemInnerPropKeys[number]

export const isTreeItemInnerPropKey = (
  propKey: string
): propKey is TreeItemInnerPropKey => {
  return treeItemInnerPropKeys.includes(propKey as TreeItemInnerPropKey)
}

export type TreeProps = ControlledLoosely &
  GenericClickProps<HTMLElement> &
  Pick<ListItemProps, TreeItemInnerPropKey> & {
    /**
     * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
     */
    border?: boolean
    /**
     * Produce a small visual space between each `TreeItem` displayed in the list so adjacent
     * items that are in a "selected" or active state have visual separation.
     * @default false
     */
    dividers?: boolean
    /**
     * Use itemRole to set the type of wrapper element for the label. By default the label's wrapper element is a <button>.
     * Note: Unlike TreeItem, 'button' is not an allowed value since click event handlers are passed to the nested <AccordionDisclosure> div
     */
    itemRole?: 'link' | 'none'
    /**
     * Label text or element displayed within Tree's internal AccordionDisclosure
     */
    label: ReactNode
  }

export type WindowedTreeNodeProps = {
  /**
   * The JSX to render for the current node.
   * If this node is a tree, use `items` instead of children.
   */
  content: JSX.Element
  /**
   * Use to control the opened / closed state of the tree instead of
   * props on the Tree component itself (necessary for windowing)
   */
  isOpen?: boolean
  /**
   * An array of objects representing the tree items and nested trees
   * to be rendered as children of the element in `content`
   */
  items?: WindowedTreeNodeProps[]
}

export type WindowedTreeNodeIDProps = Omit<WindowedTreeNodeProps, 'items'> & {
  content: JSX.Element
  id: number
  items?: WindowedTreeNodeIDProps[]
}

export type ToggleStateMap = {
  [id: number]: { isOpen: boolean; length: number }
}
