/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeItem, Tree, TreeCollection } from '..'

export default function Default() {
  return (
    <TreeCollection>
      <Tree label="Default">
        <Tree label={<strong>Orders</strong>} defaultOpen>
          <TreeItem>ID</TreeItem>
          <TreeItem>Status</TreeItem>
          <Tree label={<strong>Created</strong>} defaultOpen>
            <TreeItem>Created Date</TreeItem>
            <TreeItem>Created Month</TreeItem>
            <TreeItem>Created Year</TreeItem>
            <TreeItem>Created Quarter</TreeItem>
          </Tree>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
