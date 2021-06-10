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
import {
  CompatibleHTMLProps,
  FontFamilies,
  shouldForwardProp,
  height,
  width,
  WidthProps,
} from '@looker/design-tokens'
import { HeightProps, fontFamily } from 'styled-system'
import styled from 'styled-components'
import { useArrowKeyNav, useWindow } from '../utils'
import { ListItemContext } from './ListItemContext'
import { DensityRamp, ListColorProps } from './types'
import { listItemDimensions } from './utils'

export type ListProps = ListColorProps &
  HeightProps &
  WidthProps &
  Omit<CompatibleHTMLProps<HTMLUListElement>, 'label'> & {
    /**
     * Determines how dense a list should be by affecting child ListItem
     * size and spacing.
     * @default 0
     */
    density?: DensityRamp

    /**
     * Disables the nested List's keyboard nav capabilities
     * @private
     */
    disableKeyboardNav?: boolean

    /**
     * If true, all ListItem children without an icon will reserve space for an icon
     * for alignment purposes.
     */
    iconGutter?: boolean

    /**
     * Specify font-family. Can be specified as `brand`, `code` or `body` to explicitly
     * specify theme-controlled font-family.
     * @default inherit
     */
    fontFamily?: FontFamilies

    /**
     * Use windowing for long lists (strongly recommended to also define a width on List or its container)
     * Defaults to false with children <= 100 and true for > 100
     */
    windowing?: boolean
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
      color,
      density = 0,
      disabled,
      disableKeyboardNav,
      height,
      iconGutter = false,
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
      windowing = childArray.length > 100
    }

    if (height === undefined && windowing) {
      // Need a height for windowing to work
      height = '100%'
    }

    const { after, before, end, start, ref } = useWindow({
      enabled: windowing,
      itemCount: childArray.length,
      itemHeight: childArray[0]
        ? getListItemHeight(childArray[0] as ReactChild, itemDimensions.height)
        : 0,
      ref: forwardedRef,
      spacerTag: 'li',
    })
    const content = windowing ? (
      <>
        {before}
        {childArray.slice(start, end + 1)}
        {after}
      </>
    ) : (
      childArray
    )

    const navProps = useArrowKeyNav({
      disabled: disableKeyboardNav,
      onBlur,
      onFocus,
      onKeyDown,
      ref,
    })

    const context = {
      color,
      density,
      iconGutter,
    }

    return (
      <ListItemContext.Provider value={context}>
        <ListStyle
          role={role || 'list'}
          height={height}
          windowing={windowing}
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
  ${({ windowing }) => windowing && 'overflow: auto;'}
  padding: 0;
`

export const List = styled(ListInternal)<ListProps>``
