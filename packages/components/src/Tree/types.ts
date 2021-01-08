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

import { IconNames } from '@looker/icons'
import { ReactNode } from 'react'
import { AccordionProps } from '../Accordion'

export interface TreeBackgroundStyleProps {
  /**
   * Replace the normal grey selected and selected + hovered color with brand colors
   * @default false
   */
  brand?: boolean
  /**
   * If true, the Tree/TreeItem will have a "disabled" presentation.
   * @default false
   */
  disabled?: boolean
  /**
   * If true, the Tree/TreeItem will have a light background color
   * @default false
   */
  hovered?: boolean
  /**
   * If true, the Tree/TreeItem will have a darker background color
   * @default false
   */
  selected?: boolean
}

export interface TreeProps
  extends Omit<AccordionProps, 'indicatorGap' | 'indicatorSize'>,
    Omit<TreeBackgroundStyleProps, 'hovered'> {
  /**
   * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
   * @default false
   */
  border?: boolean
  /**
   * Supplementary element that appears right of the Tree's label
   * Note: The detail container will stop propagation of events. Place your element(s) in the label
   *  prop if you'd like clicks on them to bubble.
   */
  detail?: ReactNode
  /**
   * If true, then the detail elements on Trees and TreeItems will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * If true, the detail elements of child TreeItems will appear outside of the grey background on hover
   * @default false
   */
  detailAccessory?: boolean
  /**
   * Icon element that appears between the Tree indicator and the Tree label
   */
  icon?: IconNames
  /**
   * Text label of the Tree
   * Note: This is a required prop
   */
  label: ReactNode
  /**
   * If true, the internal AccordionDisclosure will have fontWeight = 'Normal'
   * @default false
   */
  branchFontWeight?: boolean
  /**
   * Prevent text wrapping on long labels and instead render truncated text
   **/
  truncate?: boolean
  /**
   * Produce a small visual space between each `TreeItem` displayed in the list so adjacent
   * items that are in a "selected" or active state have visual separation.
   * @default false
   */
  dividers?: boolean
}
