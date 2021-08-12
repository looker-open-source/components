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

import { ReactNode } from 'react'
import { ControlledLoosely } from '../Accordion2/controlTypes'
import { ListItemProps } from '../ListItem'
import { GenericClickProps } from '../utils/useClickable'

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

/**
 * @deprecated
 */
type AssumeIconAlignment = {
  /**
   * If true, alignment will change in two ways:
   * 1) The `Tree`'s label will align itself with a parent `Tree`'s label (Note: the parent should have an icon and the child should not)
   * 2) The `Tree`'s child items will align their labels with the `Tree`'s label
   * @default false
   * @deprecated Use NavTree and NavTreeItem instead
   */
  assumeIconAlignment?: boolean
  forceLabelPadding?: never
}

/**
 * @deprecated
 */
type ForceLabelPadding = {
  /**
   * If true, alignment will change in two ways:
   * 1) The `Tree`'s label will align itself with a parent `Tree`'s label (Note: the parent should have an icon and the child should not)
   * 2) The `Tree`'s child items will align their labels with the `Tree`'s label
   * @default false
   * @todo - Remove in 3.x release
   * @deprecated Use NavTree and NavTreeItem instead
   */
  forceLabelPadding?: boolean
  assumeIconAlignment?: never
}

export type TreeProps = ControlledLoosely &
  GenericClickProps<HTMLElement> &
  Pick<ListItemProps, typeof treeItemInnerPropKeys[number]> &
  (AssumeIconAlignment | ForceLabelPadding) & {
    /**
     * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
     */
    border?: boolean
    /**
     * If true, the internal AccordionDisclosure will have fontWeight = 'Normal'
     * @default false
     * @deprecated Tree `label` prop text will be normal font weight by default. Use a <strong> tag in the `label` prop to bold text for better accessibility.
     */
    branchFontWeight?: boolean
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
    /**
     * If true, the following visual changes occur:
     * - TreeItem: Indent padding is not included in background color
     * - Tree: Indicator and indent padding is not included in background color
     * @deprecated Use LkFieldTree and LkFieldItem for label background only behavior
     */
    labelBackgroundOnly?: boolean
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
