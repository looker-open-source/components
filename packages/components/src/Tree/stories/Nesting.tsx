/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeItem, Tree, TreeCollection } from '..'

export default function Nesting() {
  return (
    <TreeCollection>
      <Tree defaultOpen label="Orders" icon={<MaterialIcons.TableChart />}>
        <Tree defaultOpen label="Created">
          <TreeItem>Created Date</TreeItem>
          <TreeItem>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
