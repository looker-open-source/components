/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { IconButton, ListItem } from '../../'
import { List } from '../'

export default function KeyboardNavigation() {
  return (
    <List>
      <ListItem
        itemRole="none"
        detail={{
          content: (
            <IconButton
              label="cheddar-button"
              icon={<MaterialIcons.DateRange />}
              tooltipDisabled
            />
          ),
          options: { hoverDisclosure: true },
        }}
      >
        Cheddar
      </ListItem>
      <ListItem
        itemRole="none"
        detail={
          <IconButton
            label="gouda-button"
            icon={<MaterialIcons.DateRange />}
            tooltipDisabled
          />
        }
      >
        Gouda
      </ListItem>
    </List>
  )
}
