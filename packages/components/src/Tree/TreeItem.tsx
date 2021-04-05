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

import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { undefinedCoalesce } from '../utils'
import { ListItem, ListItemProps } from '../List'
import { TreeContext } from './TreeContext'

export interface TreeItemProps extends ListItemProps {
  /**
   * Callback triggered only when clicking on the TreeItem's outermost container (i.e. not a child element)
   * Used by `TreeItem`s to allow indent padding clicks to register when `labelBackgroundOnly` is true on a parent `Tree`
   * Note: onClickWhitespace should only be used if `labelBackgroundOnly` is enabled on a parent `Tree`
   */
  onClickWhitespace?: (event: React.MouseEvent<HTMLElement>) => void
}

const TreeItemLayout: FC<TreeItemProps> = ({
  children,
  density: propsDensity,
  color: propsColor,
  keyColor,
  onClickWhitespace,
  ...restProps
}) => {
  if (propsColor && keyColor) {
    // eslint-disable-next-line no-console
    console.warn(
      'color and keyColor cannot be combined, specify only one. keyColor is deprecated'
    )
  } else if (keyColor) {
    propsColor = 'key'
  }

  const {
    density: contextDensity,
    color: contextColor,
    labelBackgroundOnly,
  } = useContext(TreeContext)

  if (onClickWhitespace && !labelBackgroundOnly)
    // eslint-disable-next-line no-console
    console.warn(
      'onClickWhitespace is only necessary on <TreeItem> when labelBackgroundOnly is enabled; use onClick on <TreeItem> or to its children instead'
    )

  const color = undefinedCoalesce([propsColor, contextColor])
  const density = undefinedCoalesce([propsDensity, contextDensity])

  return (
    <ListItem
      density={density}
      color={color}
      onClickWhitespace={onClickWhitespace}
      {...restProps}
    >
      {children}
    </ListItem>
  )
}

export const TreeItem = styled(TreeItemLayout)``
