/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Tree, TreeCollection, TreeItem } from '..'

export default function Example1() {
  return (
    <TreeCollection>
      <Tree
        selected
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
      >
        <Tree disabled label="Created" defaultOpen>
          <TreeItem selected>Created Date</TreeItem>
          <TreeItem disabled>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
      <Tree
        color="key"
        selected
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
      >
        <Tree disabled label="Created" defaultOpen>
          <TreeItem selected>Created Date</TreeItem>
          <TreeItem disabled>Created Month</TreeItem>
          <TreeItem>Created Year</TreeItem>
          <TreeItem>Created Quarter</TreeItem>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
