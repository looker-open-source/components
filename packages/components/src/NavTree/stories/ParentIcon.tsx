/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { NavTree, NavTreeItem } from '../..'

export default function ParentIcon() {
  return (
    <>
      <NavTree
        defaultOpen
        label="Parent Tree with Icon"
        icon={<MaterialIcons.Folder />}
      >
        <NavTreeItem parentIcon>Cheddar</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 2</NavTreeItem>
        <NavTreeItem parentIcon>Cheddar 3</NavTreeItem>
      </NavTree>
      <NavTree
        defaultOpen
        label="Grandparent Tree with Icon"
        icon={<MaterialIcons.Folder />}
      >
        <NavTree defaultOpen label="Parent Tree with No Icon">
          <NavTreeItem>Swiss</NavTreeItem>
          <NavTreeItem>Swiss 2</NavTreeItem>
          <NavTreeItem>Swiss 3</NavTreeItem>
        </NavTree>
      </NavTree>
    </>
  )
}
