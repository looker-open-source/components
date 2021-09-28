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
import { Info, Home } from 'styled-icons/material-outlined'
import { IconButton } from '../../Button'
import { Aside } from '../../Layout'
import { ListItem } from '../../ListItem'
import { ProgressCircular } from '../../ProgressCircular'
import { NavTree, NavTreeItem } from '../../NavTree'
import { defaultArgTypes as argTypes } from '../../../../../apps/storybook/src/defaultArgTypes'
import { NavList } from '../NavList'

export default {
  argTypes,
  component: NavList,
  title: 'NavList',
}

export * from './LeftNav.stories'

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
        <NavTree defaultOpen label="Blah" icon={<Info />}>
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
        label="NavTree w icon-free NavTreeItems and long title"
        defaultOpen
      >
        <NavTree label="Folders" defaultOpen>
          <NavTreeItem description="description" detail="detail" selected>
            My Awesome Item
          </NavTreeItem>
          <NavTreeItem>
            Truncate example with long text running off screen
          </NavTreeItem>
          <NavTreeItem description="description" detail="detail">
            Truncate example with long text running off screen
          </NavTreeItem>
        </NavTree>
      </NavTree>
    </NavList>
  </Aside>
)

export const KeyboardNavigation = () => {
  const getDetail = (label: string) => ({
    content: (
      <IconButton label={`${label}-button`} icon={<Info />} tooltipDisabled />
    ),
    options: { hoverDisclosure: true },
  })

  return (
    <NavList>
      <ListItem
        icon={<Info />}
        detail={getDetail('list-item-detail')}
        itemRole="none"
      >
        List Item
      </ListItem>
      <NavTree
        icon={<Info />}
        label="Nav Tree Default"
        detail={getDetail('nav-tree-detail')}
        defaultOpen
      >
        <NavTreeItem
          parentIcon
          detail={getDetail('nav-tree-item-detail')}
          itemRole="none"
        >
          Nav Tree Item
        </NavTreeItem>
      </NavTree>
      <NavTree
        icon={<Info />}
        indicatorLabel="Nav Tree Link Indicator"
        label="Nav Tree Link"
        detail={getDetail('nav-tree-link-detail')}
        defaultOpen
        href="https://google.com"
        target="_blank"
      >
        <NavTreeItem parentIcon itemRole="none">
          Now You See Me
        </NavTreeItem>
      </NavTree>
    </NavList>
  )
}
KeyboardNavigation.parameters = {
  storyshots: { disable: true },
}
