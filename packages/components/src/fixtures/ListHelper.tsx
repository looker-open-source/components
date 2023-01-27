/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { List } from '../List'
import { ListItem } from '../ListItem'
import type { ListItemProps } from '../ListItem'

const Item = (props: ListItemProps) => <ListItem {...props}>blah</ListItem>

export const ItemsFiller = ({ count = 10 }: { count?: number }) => (
  <List>
    {[...Array(count).keys()].map(key => (
      <Item key={key} />
    ))}
  </List>
)
