/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { NavTree, NavTreeItem } from '../..'

export default function Link() {
  return (
    <NavTree
      defaultOpen
      label="Click me to go to Google"
      icon={<MaterialIcons.Folder />}
      href="https://google.com"
      target="_blank"
      indicatorLabel="Google Link Indicator"
    >
      <NavTreeItem href="https://google.com" target="_blank" parentIcon>
        Some Item
      </NavTreeItem>{' '}
    </NavTree>
  )
}
