/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { NavTree, NavTreeItem } from '../..'
import type { NavTreeProps } from '../types'

export default function Basic(props: NavTreeProps) {
  return (
    <NavTree
      {...props}
      defaultOpen
      icon={<MaterialIcons.Folder />}
      label="Cheeses"
    >
      <NavTreeItem>Cheddar</NavTreeItem>
    </NavTree>
  )
}
