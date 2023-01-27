/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { List } from '../'
import { ListItem } from '../../'

export default function Basic() {
  return (
    <List>
      <ListItem
        icon={<MaterialIcons.SportsSoccer />}
        description="Orange-y"
        detail="England"
      >
        Cheddar
      </ListItem>
      <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
        Gouda
      </ListItem>
      <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
        Mozzarella
      </ListItem>
      <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
        Swiss
      </ListItem>
    </List>
  )
}
