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

import {
  CompatibleHTMLProps,
  FontSizes,
  LineHeights,
  SpacingSizes,
} from '@looker/design-tokens'
import { ReactNode } from 'react'
import { IconSize, IconType } from '../Icon'
import { TruncateConfigProp } from '../Truncate'
import { HoverDisclosureProps } from '../utils/HoverDisclosure'

export type DensityRamp = -3 | -2 | -1 | 0 | 1

export type DensityProps = {
  /**
   * Determines how dense a list should be by affecting child item size and spacing.
   * @default 0
   */
  density?: DensityRamp
}

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

export type LimitedListColor = 'key' | 'calculation' | 'dimension' | 'measure'
export type StringColor = LimitedListColor | string
export type ListColor = StringColor

export const listItemColorAppliesToLabel = ['calculation', 'measure']
export const listItemColorOptions = [
  'key',
  'calculation',
  'dimension',
  'measure',
]

export type FlexibleColor = {
  /**
   * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
   *
   * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
   *
   *  - key
   *  - calculation
   *  - dimension
   *  - measure
   *
   * The color is used a background color (using the `subtle` variant) when the item
   * is `selected` or `current`. Items with `calculation` & `measure` will have a text
   * color applied at all times unless they are `disabled`
   */
  color?: StringColor
}

export type LimitedColor = {
  /**
   * Replace the normal uiN(1-5) color, when ListItem is selected, with color label passed.
   *
   * List, ListItem, Tree & TreeItem now theme-based color assignments. Supported colors are:
   *
   *  - key
   *  - calculation
   *  - dimension
   *  - measure
   *
   * The color is used a background color (using the `subtle` variant) when the item
   * is `selected` or `current`. Items with `calculation` & `measure` will have a text
   * color applied at all times unless they are `disabled`
   */
  color?: LimitedListColor
}

export type ListItemColorProps = FlexibleColor
export type ListColorProps = LimitedColor

export type ListItemStatefulProps = {
  /**
   * If true, the ListItem will have a "disabled" presentation.
   * @default false
   */
  disabled?: boolean
  /**
   * Present ListItem in it's hovered state. Only for use in testing / image-snapshots.
   *
   * NOTE: This will only change the _initial_ hover state. If a hover event triggers a change
   * of hover state the ListItem will return to it's default state.
   *
   * @private Test use only. May be deprecated and removed without notice.
   * @default false
   */
  hovered?: boolean
  /**
   * If true, the ListItem will have a darker background color
   * @default false
   */
  selected?: boolean
}

export interface DetailOptions extends Pick<HoverDisclosureProps, 'width'> {
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
  /**
   * Padding is added to the left and and right of the detail container by default. You can
   * optionally disable that behavior if you want to have fine-grained control.
   * @default true
   */
  padding?: boolean
}

export type Detail = ReactNode | { content: ReactNode; options: DetailOptions }

export type ListItemRole = 'button' | 'link' | 'none'

export type ListItemProps = CompatibleHTMLProps<HTMLElement> &
  ListItemStatefulProps &
  ListItemColorProps & {
    /**
     * Determines the sizing and spacing of the item
     * Notes:
     * - This prop is intended for internal components usage (density should be set on a parent List component for external use cases).
     * - If you choose to use this prop on a ListItem directly, it must be consistent across all items for windowing purposes.
     * @private
     */
    density?: DensityRamp
    /**
     * optional extra description
     * I18n recommended: content that is user visible should be treated for i18n
     */
    description?: ReactNode
    /**
     * Detail element placed right of the item children. Prop value can take one of two forms:
     * 1. ReactNode
     * 2. Object with content and options properties
     *
     * I18n recommended: content that is user visible should be treated for i18n
     */
    detail?: Detail
    /**
     * Optional icon placed left of the item children
     */
    icon?: IconType
    /**
     * Sets the correct accessible role for the ListItem:
     * - Use **'link'** for items that navigation to another page
     * - Use **'button'** for items that trigger in page interactions, like displaying a dialog
     * - Use **'none'** when including buttons as children in the label container (i.e. the label container will be a `<div>`).
     *     - Height when using an item with a description and role='none' does not auto abide the @looker/components
     *     density scale. Use 'button' or 'link' whenever possible to avoid space inconsistencies.
     *     - If supporting keyboard navigation, make sure to add key handlers to items
     * @default button
     */
    itemRole?: ListItemRole
    /**
     * If true, text children and description will be truncated if text overflows
     * Specifying `description` will cause the truncation tooltip for label to _always_ be presented
     *
     * Text specified in `description` property will be displayed below `label` in the tooltip
     */
    truncate?: TruncateConfigProp

    /**
     * Callback to specify onClick handler on item's whitespace.
     * @private May only be passed via TreeItem. This feature may be removed without a breaking change. We STRONGLY discourage the direct use of this property.
     */
    onClickWhitespace?: (event: React.MouseEvent<HTMLElement>) => void
    /**
     * Determines the type of the rendered ListItemWrapper
     * @default false
     * @private Should only be passed when ListItem is wrapped by another component like Tree. This feature may be removed without a breaking change. We STRONGLY discourage the direct use of this property.
     */
    renderAsDiv?: boolean
  }
