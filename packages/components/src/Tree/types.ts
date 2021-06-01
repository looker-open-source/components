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
import { AccordionProps } from '../Accordion'
import { ListItemProps } from '../List'

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

export type TreeProps = Omit<
  AccordionProps,
  | 'children'
  | 'color'
  | 'content'
  | 'indicatorGap'
  | 'indicatorPosition'
  | 'indicatorSize'
> &
  Pick<ListItemProps, typeof treeItemInnerPropKeys[number]> & {
    /**
     * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
     * @default false
     */
    border?: boolean
    /**
     * If true, the internal AccordionDisclosure will have fontWeight = 'Normal'
     * @default false
     */
    branchFontWeight?: boolean
    /**
     * Produce a small visual space between each `TreeItem` displayed in the list so adjacent
     * items that are in a "selected" or active state have visual separation.
     * @default false
     */
    dividers?: boolean
    /**
     * If true, child `TreeItem` elements will receive additional indent padding to align parent `Tree` (with an optional `icon` prop) and child `TreeItem` labels.
     * If "no-icon", child `TreeItem` elements will receive additional indent padding to align parent `Tree` (without an optional `icon` prop) and child `TreeItem` labels.
     * @default false
     * @todo - Remove in 2.x release
     * @deprecated Use `iconSpacing` prop instead
     */
    forceLabelPadding?: boolean
    /**
     * If true, the `Tree`'s label will align itself with a parent Tree's label
     * This should only be used when a parent `Tree` has an icon
     * @default false
     */
    iconSpacing?: boolean
    /**
     * Use itemRole to set the type of wrapper element for the label
     * Note: Unlike TreeItem, 'button' is not an allowed value since click event handlers are passed to the nested <AccordionDisclosure> div
     * @default 'none'
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
     */
    labelBackgroundOnly?: boolean
  }
