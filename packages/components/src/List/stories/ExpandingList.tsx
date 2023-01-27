/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { List } from '../'
import { ListItem, Space } from '../../'

export default function ExpandingList() {
  const [showMore, setShowMore] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  return (
    <Space align="start">
      <List>
        <ListItem>Cheddar</ListItem>
        <ListItem>Gouda</ListItem>
        {showMore ? (
          <>
            <ListItem>Swiss</ListItem>
            <ListItem>American</ListItem>
            <ListItem
              onClick={() => setShowMore(false)}
              description="Keyboard nav should still work"
            >
              Show Less
            </ListItem>
          </>
        ) : (
          <ListItem
            onClick={() => setShowMore(true)}
            description="To test keyboard nav"
          >
            Show More
          </ListItem>
        )}
      </List>

      <List>
        {showMore2 ? (
          <>
            <ListItem key="0">Cheddar</ListItem>
            <ListItem key="1">Swiss</ListItem>
            <ListItem key="2">Gouda</ListItem>
            <ListItem key="3">American</ListItem>
            <ListItem
              key="4"
              onClick={() => setShowMore2(false)}
              description="Replaces all items"
            >
              Show less
            </ListItem>
          </>
        ) : (
          <>
            <ListItem key="5">Cheddar</ListItem>
            <ListItem key="6">Gouda</ListItem>
            <ListItem
              key="7"
              onClick={() => setShowMore2(true)}
              description="Replaces all items"
            >
              Show more
            </ListItem>
          </>
        )}
      </List>
    </Space>
  )
}
