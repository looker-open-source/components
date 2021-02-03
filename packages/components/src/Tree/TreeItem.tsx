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

import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { TextColorProps } from '@looker/design-tokens'
import omit from 'lodash/omit'
import { undefinedCoalesce } from '../utils'
import { ListItem, ListItemProps } from '../List'
import { TreeContext } from './TreeContext'

export interface TreeItemProps
  extends Omit<ListItemProps, 'color'>,
    TextColorProps {}

const TreeItemLayout: FC<TreeItemProps> = ({
  children,
  className,
  detail,
  disabled,
  keyColor: propsKeyColor,
  onBlur,
  onClick,
  onKeyDown,
  onKeyUp,
  selected,
  truncate,
  ...props
}) => {
  const { density: contextDensity, keyColor: contextKeyColor } = useContext(
    TreeContext
  )

  const keyColor = undefinedCoalesce([propsKeyColor, contextKeyColor])

  return (
    <ListItem
      className={className}
      density={contextDensity}
      detail={detail}
      disabled={disabled}
      keyColor={keyColor}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      selected={selected}
      {...omit(props, ['color', 'detail', 'icon'])}
    >
      {children}
    </ListItem>
  )
}

export const TreeItem = styled(TreeItemLayout)``
