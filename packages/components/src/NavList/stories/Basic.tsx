/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { NavList, ListItem } from '../..'
import type { ListProps } from '../../List'

export default function Basic(props: ListProps) {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!selected)
  }
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
  )
}
