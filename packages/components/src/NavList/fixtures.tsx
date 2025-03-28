/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react';
// eslint-disable-next-line no-restricted-imports
import * as MaterialIcons from '@styled-icons/material';
import { IconButton, NavList, NavTree, NavTreeItem, ListItem } from '..';
import type { ListProps } from '../List';

export function Basic(props: ListProps) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <NavList {...props}>
      <ListItem
        description="Description"
        detail="Interesting details"
        icon={<MaterialIcons.Home />}
        selected
      >
        Explore
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Info />}
        onClick={handleClick}
        selected={selected}
        truncate={{ description: "It's an item" }}
      >
        Develop
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Info />}
        truncate={{ description: 'Word Document - Last update 3 days ago' }}
      >
        This is a really long navigation list item that should get truncated at
        some point waaaayyyy out in the nether regions of a long line of text
      </ListItem>
    </NavList>
  );
}

export function KeyboardNavigation() {
  const getDetail = (label: string) => ({
    content: (
      <IconButton
        label={`${label}-button`}
        icon={<MaterialIcons.Info />}
        tooltipDisabled
      />
    ),
    options: { hoverDisclosure: true },
  });

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
  );
}
