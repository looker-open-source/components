/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { NavList, ListItem, NavTree, NavTreeItem, IconButton } from '../..'

export default function KeyboardNavigation() {
  const getDetail = (label: string) => ({
    content: (
      <IconButton
        label={`${label}-button`}
        icon={<MaterialIcons.Info />}
        tooltipDisabled
      />
    ),
    options: { hoverDisclosure: true },
  })

  return (
    <NavList>
      <ListItem
        icon={<MaterialIcons.Info />}
        detail={getDetail('list-item-detail')}
        itemRole="none"
      >
        List Item
      </ListItem>
      <NavTree
        icon={<MaterialIcons.Info />}
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
        icon={<MaterialIcons.Info />}
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
