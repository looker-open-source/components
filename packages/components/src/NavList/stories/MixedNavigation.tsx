/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import {
  NavList,
  ListItem,
  Aside,
  NavTree,
  NavTreeItem,
  ProgressCircular,
} from '../..'

export default function MixedNavigation() {
  return (
    <Aside width="navigation">
      <NavList>
        <ListItem icon={<MaterialIcons.Home />} selected>
          Home
        </ListItem>
        <NavTree
          icon={<MaterialIcons.Info />}
          label="NavTree"
          selected
          defaultOpen
        >
          <NavTree defaultOpen label="Blah" icon={<MaterialIcons.Info />}>
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
          icon={<MaterialIcons.Info />}
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
}
