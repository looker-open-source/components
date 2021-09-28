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

import React from 'react'
import { Add, Code, MoreVert } from 'styled-icons/material'
import {
  Assignment,
  Explore,
  Extension,
  FavoriteBorder,
  Folder,
  Home,
  Schedule,
  Widgets,
} from 'styled-icons/material-outlined'
import { IconButton } from '../../Button'
import { Divider } from '../../Divider'
import { Aside } from '../../Layout'
import { ListItem } from '../../ListItem'
import { NavTree, NavTreeItem } from '../../NavTree'
import { NavList } from '../NavList'

export const LeftNav = () => (
  <Aside width="navigation">
    <NavList>
      <ListItem icon={<Explore />}>Explore</ListItem>
      <ListItem icon={<Code />}>Develop</ListItem>
      <Divider my="medium" />
      <ListItem icon={<Home />}>Home</ListItem>
      <NavTree defaultOpen icon={<Schedule />} label="Recently Viewed">
        <NavTreeItem parentIcon>I just saw you.</NavTreeItem>
        <NavTreeItem parentIcon>Yeah, you!</NavTreeItem>
      </NavTree>
      <NavTree icon={<FavoriteBorder />} label="Favorites">
        <NavTreeItem parentIcon>My Favorite Dashboard</NavTreeItem>
      </NavTree>
      <NavTree
        defaultOpen
        icon={<Assignment />}
        label="Boards"
        detail={
          <IconButton
            icon={<Add />}
            label="Add Board"
            onClick={() => alert('Board added!')}
            size="medium"
          />
        }
      >
        <NavTree
          defaultOpen
          label="Elliot's Sick Board"
          href="https://google.com"
          indicatorLabel="Sick Board Indicator"
          target="_blank"
          detail={{
            content: (
              <IconButton
                icon={<MoreVert />}
                label="Edit Board"
                onClick={() => alert('Edited board!')}
                size="medium"
              />
            ),
            options: {
              hoverDisclosure: true,
            },
          }}
        >
          <NavTree defaultOpen label="Section 1">
            <NavTreeItem>Dashboard 1</NavTreeItem>
          </NavTree>
          <NavTree label="Section 2">
            <NavTreeItem>Dashboard 2</NavTreeItem>
          </NavTree>
        </NavTree>
        <NavTree label="The Illest Board"></NavTree>
      </NavTree>
      <Divider my="medium" />
      <NavTree icon={<Folder />} label="Folders"></NavTree>
      <NavTree icon={<Widgets />} label="Blocks"></NavTree>
      <NavTree icon={<Extension />} label="Applications"></NavTree>
    </NavList>
  </Aside>
)
