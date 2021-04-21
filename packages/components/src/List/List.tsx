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

import React, {
  Children,
  forwardRef,
  isValidElement,
  ReactChild,
  Ref,
  useMemo,
} from 'react'
import styled from 'styled-components'
import { fontFamily, height, HeightProps } from 'styled-system'
import {
  CompatibleHTMLProps,
  FontFamilies,
  shouldForwardProp,
  width,
  WidthProps,
} from '@looker/design-tokens'
import { useArrowKeyNav, useWindow } from '../utils'
import { ListItemContext } from './ListItemContext'
import { listItemDimensions } from './utils'
import { DensityRamp } from './types'

export type ListColor =
  | 'key'
  | 'calculation'
  | 'dimension'
  | 'measure'
  | 'critical'

export interface ListProps
  extends HeightProps,
    WidthProps,
    Omit<CompatibleHTMLProps<HTMLUListElement>, 'label'> {
  /**
   * Determines how dense a list should be by affecting child ListItem
   * size and spacing.
   * @default 0
   */
  density?: DensityRamp

  /**
   * Specify font-family. Generally will end up inheriting `theme.fonts.body` but can be specified as `brand`, `code` or `body` to explicitly specify theme-controlled font-family
   * @default inherit
   */
  fontFamily?: FontFamilies

  /**
   * If true, all ListItem children without an icon will reserve space for an icon
   * for alignment purposes.
   */
  iconGutter?: boolean

  /**
   * Replace the normal uiN(1-5) color for selected and selected + hovered color with key colors
   * @todo - Remove in 2.x release
   * @deprecated Use `statefulColor="key"` instead
   */
  keyColor?: boolean

  /**
   * Replace the default uiN(1-5) background-color, when ListItem is selected, with color label passed.
   * not specifying statefulColor component will default to text-based theme.colors
   */
  statefulColor?: ListColor

  /**
   * Use windowing for long lists (strongly recommended to also define a width on List or its container)
   * 'none' - default with children are <= 100.
   * 'fixed' - better performance, default when first child is a ListItem (height will default to 100%)
   */
  windowing?: 'fixed' | 'none'
}

const getListItemHeight = (child: ReactChild, height: number) => {
  if (isValidElement(child) && child.props.description) {
    return height + 16
  }
  return height
}

export const ListInternal = forwardRef(
  (
    {
      children,
      statefulColor,
      density = 0,
      disabled,
      height,
      iconGutter = false,
      keyColor,
      onBlur,
      onFocus,
      onKeyDown,
      role,
      windowing,
      ...props
    }: ListProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    const childArray = useMemo(() => Children.toArray(children), [children])

    const itemDimensions = listItemDimensions(
      density !== undefined ? density : 0
    )

    if (windowing === undefined) {
      if (childArray.length > 100) {
        windowing = 'fixed'
      } else {
        windowing = 'none'
      }
    }

    if (height === undefined && windowing !== 'none') {
      // Need a height for windowing to work
      height = '100%'
    }

    const { content, ref } = useWindow({
      childHeight: childArray[0]
        ? getListItemHeight(childArray[0] as ReactChild, itemDimensions.height)
        : 0,
      children: children as JSX.Element | JSX.Element[],
      enabled: windowing !== 'none',
      ref: forwardedRef,
      spacerTag: 'li',
    })

    const navProps = useArrowKeyNav({
      onBlur,
      onFocus,
      onKeyDown,
      ref,
    })

    const context = {
      density,
      iconGutter,
      keyColor,
      statefulColor,
    }

    if (statefulColor && keyColor) {
      // eslint-disable-next-line no-console
      console.warn('keyColor is deprecated use statefulColor instead.')
    }

    return (
      <ListItemContext.Provider value={context}>
        <ListStyle
          tabIndex={-1}
          role={role || 'list'}
          height={height}
          {...props}
          {...navProps}
        >
          {content}
        </ListStyle>
      </ListItemContext.Provider>
    )
  }
)

const ListStyle = styled.ul
  .withConfig({ shouldForwardProp })
  .attrs<ListProps>(({ fontFamily = 'inherit' }) => ({
    fontFamily,
  }))<ListProps>`
  ${fontFamily}
  ${height}
  ${width}

  list-style: none;
  margin: 0;
  overflow: auto;
  padding: 0;
`

export const List = styled(ListInternal)``
