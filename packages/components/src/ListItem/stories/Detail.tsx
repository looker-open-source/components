/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { ListItem } from '..'
import { List, IconButton } from '../../'

export default function Detail() {
  return (
    <List>
      <ListItem icon={<MaterialIcons.Tag />} detail="Standard Detail text">
        ListItem (Standard)
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Tag />}
        detail={
          <IconButton
            icon={<MaterialIcons.PivotTableChart />}
            label={<MaterialIcons.PivotTableChart />}
            onClick={() => alert("You've pivoted!")}
          />
        }
        itemRole="none"
      >
        ListItem (Standard)
      </ListItem>
      <ListItem
        icon={<MaterialIcons.Tag />}
        detail={{
          content: (
            <IconButton
              icon={<MaterialIcons.PivotTableChart />}
              label={<MaterialIcons.PivotTableChart />}
              onClick={() => alert("You've pivoted!")}
            />
          ),
          options: {
            accessory: true,
            hoverDisclosure: true,
          },
        }}
      >
        ListItem (Options Enabled)
      </ListItem>
    </List>
  )
}
