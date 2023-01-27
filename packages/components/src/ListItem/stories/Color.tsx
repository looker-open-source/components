/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { List } from '../..'
import { ListItem } from '..'

export default function Icon() {
  return (
    <List>
      <ListItem icon={<MaterialIcons.PersonOutline />}>List Item</ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="calculation">
        List Item
      </ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="key">
        List Item
      </ListItem>
      <ListItem icon={<MaterialIcons.PersonOutline />} color="#cc00cc">
        List Item
      </ListItem>
    </List>
  )
}
