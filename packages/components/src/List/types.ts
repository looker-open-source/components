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

import { FontSizes, LineHeights, SpacingSizes } from '@looker/design-tokens'
import { ReactNode } from 'react'
import { IconSize } from '..'

export type DensityRamp = -3 | -2 | -1 | 0 | 1

export interface ListItemDimensions {
  descriptionFontSize: FontSizes
  descriptionLineHeight: LineHeights
  height: number
  px: SpacingSizes
  py: SpacingSizes | '0.375rem'
  iconGap: SpacingSizes
  iconSize: IconSize
  labelFontSize: FontSizes
  labelLineHeight: LineHeights
}

export const listItemDimensionKeys = [
  'descriptionFontSize',
  'descriptionLineHeight',
  'height',
  'px',
  'py',
  'iconGap',
  'iconSize',
  'labelFontSize',
  'labelLineHeight',
  'detailFontSize',
]

export interface ListItemStatefulProps {
  /**
   * Replace the normal uiN(1-5) color for selected and selected + hovered color with key colors
   * @default false
   */
  keyColor?: boolean
  /**
   * If true, the ListItem will have a "disabled" presentation.
   * @default false
   */
  disabled?: boolean
  /**
   * If true, the ListItem will have a darker background color (same as selected)
   * Note: Using current and selected at the same time is not recommended
   * @default false
   */
  current?: boolean
  /**
   * If true, the ListItem will have a darker background color
   * @default false
   */
  selected?: boolean
}

export interface ListItemStatefulWithHoveredProps
  extends ListItemStatefulProps {
  /**
   * If true, the ListItem will have a light background color
   * @default false
   */
  hovered?: boolean
}

interface DetailOptions {
  /**
   * If true, the detail will appear outside of the item's grey background on hover
   * In addition, if true, events originating from the detail will not bubble to the item's handlers
   * @default false
   */
  accessory?: boolean
  /**
   * If true, the detail will only appear on hover
   * @default false
   */
  hoverDisclosure?: boolean
}

export type Detail = ReactNode | { content: ReactNode; options: DetailOptions }
