/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useRef } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Menu, MenuItem, Card, Flex, Paragraph, IconButton } from '../..'

export default function Hover() {
  const hoverRef = useRef<HTMLDivElement>(null)
  return (
    <Card ref={hoverRef} p="u5">
      <Flex justifyContent="space-between">
        <Paragraph>Hovering in this card will show the menu button.</Paragraph>
        <Menu
          hoverDisclosureRef={hoverRef}
          content={
            <>
              <MenuItem>Edit item</MenuItem>
              <MenuItem>Create new sub-item</MenuItem>
            </>
          }
        >
          <IconButton icon={<MaterialIcons.MoreVert />} label="More Options" />
        </Menu>
      </Flex>
    </Card>
  )
}
