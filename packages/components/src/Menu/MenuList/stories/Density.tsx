/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { MenuItem, MenuList, Space, MenuHeading } from '../../..'

export default function Density() {
  return (
    <Space>
      <MenuList density={1}>
        <MenuHeading>Biggest MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={0}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-1}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-2}>
        <MenuHeading>Smaller MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
      <MenuList density={-3}>
        <MenuHeading>Smallest MenuList</MenuHeading>
        <MenuItem icon={<MaterialIcons.Favorite />}>Gouda</MenuItem>
        <MenuItem icon={<MaterialIcons.Favorite />}>Swiss</MenuItem>
      </MenuList>
    </Space>
  )
}
