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

import React, { useState } from 'react'
import styled from 'styled-components'
import { Home } from '@styled-icons/material-outlined/Home'
import { Info } from '@styled-icons/material-outlined/Info'
import { ProgressCircular } from '../ProgressCircular'
import { Tree, TreeItem } from '../Tree'
import { ListItem } from '../List/ListItem'
import { ListItemLabel } from '../List/ListItemLabel'
import { NavList } from '../NavList'
import { NavTree } from './NavTree'

export default {
  component: NavTree,
  title: 'NavTree',
}

export const Basic = () => {
  const [selected, setSelected] = useState(true)
  const handleClick = () => setSelected(!selected)

  return (
    <NavTree icon={<Info />} label="Tree" selected isOpen>
      <TreeItem icon={<Info />}>Meh</TreeItem>
      <TreeItem
        description="description"
        detail="detail"
        icon={<Info />}
        onClick={handleClick}
        selected={selected}
      >
        My Awesome Item
      </TreeItem>
      <Tree forceLabelPadding isOpen label="Blah" icon={<Info />}>
        <TreeItem color="text2">
          <em>Not yet available</em>
        </TreeItem>
        <TreeItem icon={<ProgressCircular size="xsmall" progress={0.75} />}>
          Loading...
        </TreeItem>
      </Tree>
    </NavTree>
  )
}

export const MixedNavigation = () => (
  <NavList>
    <ListItemNestedInTree icon={<Home />} selected>
      Home
    </ListItemNestedInTree>
    <ListItemNestedInTree icon={<Home />}>Not really home</ListItemNestedInTree>
    <NavTree icon={<Info />} label="Tree" selected isOpen>
      <TreeItem icon={<Info />}>Meh</TreeItem>
      <TreeItem
        description="description"
        detail="detail"
        icon={<Info />}
        selected
      >
        My Awesome Item
      </TreeItem>
      <Tree
        forceLabelPadding
        branchFontWeight
        isOpen
        label="Blah"
        icon={<Info />}
      >
        <TreeItem color="text2">
          <em>Not yet available</em>
        </TreeItem>
        <TreeItem icon={<ProgressCircular size="xsmall" progress={0.75} />}>
          Loading...
        </TreeItem>
      </Tree>
    </NavTree>
  </NavList>
)

const ListItemNestedInTree = styled(ListItem)`
  ${ListItemLabel} {
    padding-left: calc(
      ${({ theme }) => `${theme.space.medium} + ${theme.space.xsmall}`}
    );
  }
`

MixedNavigation.parameters = {
  storyshots: { disable: true },
}
