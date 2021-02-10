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

import React, {
  Children,
  forwardRef,
  isValidElement,
  ReactChild,
  Ref,
  useMemo,
} from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  reset,
  omitStyledProps,
} from '@looker/design-tokens'
import { useArrowKeyNav, useWindow } from '../utils'
import { ListItemContext } from './ListItemContext'
import { listItemDimensions } from './utils'
import { DensityRamp } from './types'

export interface ListProps
  extends Omit<CompatibleHTMLProps<HTMLUListElement>, 'label'> {
  /**
   * Determines how dense a list should be by affecting child ListItem
   * size and spacing.
   * @default 0
   */
  density?: DensityRamp

  /**
   * Replace the normal uiN(1-5) color for selected and selected + hovered color with key colors
   */
  keyColor?: boolean

  /**
   * If true, all ListItem children without an icon will reserve space for an icon
   * for alignment purposes.
   */
  iconGutter?: boolean

  /**
   * Use windowing for long lists (strongly recommended to also define a width)
   * 'none' - default with children are <= 100.
   * 'fixed' - better performance, default when first child is a ListItem
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
      density = 0,
      disabled,
      iconGutter = false,
      keyColor,
      windowing,
      onBlur,
      onFocus,
      onKeyDown,
      ...props
    }: ListProps,
    forwardedRef: Ref<HTMLUListElement>
  ) => {
    const childArray = useMemo(() => Children.toArray(children), [children])

    const { height } = listItemDimensions(density !== undefined ? density : 0)

    if (windowing === undefined) {
      if (childArray.length > 100) {
        windowing = 'fixed'
      } else {
        windowing = 'none'
      }
    }

    const { content, ref } = useWindow({
      childHeight: childArray[0]
        ? getListItemHeight(childArray[0] as ReactChild, height)
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
    }

    return (
      <ListItemContext.Provider value={context}>
        <ul tabIndex={-1} {...omitStyledProps(props)} {...navProps}>
          {content}
        </ul>
      </ListItemContext.Provider>
    )
  }
)

export const List = styled(ListInternal)`
  ${reset}

  list-style: none;
`
