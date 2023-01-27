/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { List } from '../'
import { ListItem } from '../../'

export default function FontFamily() {
  return (
    <List iconGutter>
      <ListItem icon={<MaterialIcons.DateRange />}>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  )
}
