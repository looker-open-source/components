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
import { ListItemProps } from '../ListItem'
import { createListItemPartitions } from '../ListItem/utils'
import { undefinedCoalesce } from '../utils'
import { TreeContext } from './TreeContext'
import { TreeItem2Content } from './Tree'

export type TreeItemProps = ListItemProps

const TreeItemLayout: FC<TreeItemProps> = ({
  density: propsDensity,
  color: propsColor,
  ...restProps
}) => {
  const {
    density: contextDensity,
    depth,
    color: contextColor,
    labelBackgroundOnly,
  } = useContext(TreeContext)

  // Using labelBackgroundOnly with items with itemRole="button" or "link" leads to overly thin backgrounds
  if (labelBackgroundOnly && restProps.itemRole !== 'none')
    // eslint-disable-next-line no-console
    console.warn(
      'TreeItems should use itemRole="none" when a parent Tree has labelBackgroundOnly=true for visualize purposes.'
    )

  const density = undefinedCoalesce([propsDensity, contextDensity])
  const color = undefinedCoalesce([propsColor, contextColor])

  const [inside, outside] = createListItemPartitions({
    color,
    density,
    ...restProps,
  })

  return (
    <Wrapper>
      <TreeItem2Content depth={depth} density={density} tabIndex={-1}>
        {inside}
      </TreeItem2Content>
      {outside}
    </Wrapper>
  )
}

export const TreeItem = styled(TreeItemLayout)``

const Wrapper = styled.li`
  display: flex;
`
