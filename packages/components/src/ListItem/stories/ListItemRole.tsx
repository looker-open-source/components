/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { List } from '../../'
import { ListItem } from '..'

export default function Role() {
  return (
    <List>
      <ListItem itemRole="button" description="Definitely a button">
        List Item
      </ListItem>
      <ListItem itemRole="link" description="Definitely a link">
        List Item
      </ListItem>
      <ListItem itemRole="none" description="Definitely a none">
        List Item
      </ListItem>
    </List>
  )
}
