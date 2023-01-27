/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeItem, Tree, TreeCollection } from '..'

export default function Link() {
  return (
    <TreeCollection>
      <Tree
        href={'https://google.com'}
        itemRole={'link'}
        label={<strong>Click my label to go to Google</strong>}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
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
