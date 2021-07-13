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
import { Home } from '@styled-icons/material-outlined/Home'
import { Info } from '@styled-icons/material-outlined/Info'
import { Aside } from '../Layout'
import { ListItem } from '../ListItem'
import { ProgressCircular } from '../ProgressCircular'
import { NavTree, NavTreeItem } from '../NavTree'
import { NavList } from './NavList'

export default {
  component: NavList,
  title: 'NavList',
}

export const Basic = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!selected)
  }
  return (
    <NavList>
      <ListItem
        description="Description"
        detail="Interesting details"
        icon={<Home />}
        selected
      >
        Explore
      </ListItem>
      <ListItem
        icon={<Info />}
        onClick={handleClick}
        selected={selected}
        truncate={{ description: "It's an item" }}
      >
        Develop
      </ListItem>
      <ListItem
        icon={<Info />}
        truncate={{ description: 'Word Document - Last update 3 days ago' }}
      >
        This is a really long navigation list item that should get truncated at
        some point waaaayyyy out in the nether regions of a long line of text
      </ListItem>
    </NavList>
  )
}

export const MixedNavigation = () => (
  <Aside width="navigation">
    <NavList>
      <ListItem icon={<Home />} selected>
        Home
      </ListItem>
      <NavTree icon={<Info />} label="NavTree" selected defaultOpen>
        <NavTreeItem icon={<Info />}>Meh</NavTreeItem>
        <NavTreeItem
          description="description"
          detail="detail"
          icon={<Info />}
          selected
        >
          My Awesome Item
        </NavTreeItem>
        <NavTree
          forceLabelPadding
          branchFontWeight
          defaultOpen
          label="Blah"
          icon={<Info />}
        >
          <NavTreeItem parentIcon color="text2">
            <em>Not yet available</em>
          </NavTreeItem>
          <NavTreeItem
            parentIcon
            icon={<ProgressCircular size="xsmall" progress={0.75} />}
          >
            Loading...
          </NavTreeItem>
        </NavTree>
      </NavTree>
      <NavTree
        icon={<Info />}
        truncate
        label="NavTree w icon-free NavTreeItems and long title"
        defaultOpen
      >
        <NavTree label="Folders" defaultOpen assumeIconAlignment>
          <NavTreeItem truncate>
            Truncate example with long text running off screen
          </NavTreeItem>
          <NavTreeItem truncate description="description" detail="detail">
            Truncate example with long text running off screen
          </NavTreeItem>
        </NavTree>
      </NavTree>
    </NavList>
  </Aside>
)
