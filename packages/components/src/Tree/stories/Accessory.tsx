/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeItem, Tree, TreeCollection } from '..'
import { Button } from '../../Button'

export default function Accessory() {
  return (
    <TreeCollection>
      <Tree
        label={<strong>Orders</strong>}
        detail={{
          content: (
            <Button ml="large" onClick={() => alert('Accessory Button')}>
              Accessory Button
            </Button>
          ),
          options: {
            accessory: true,
          },
        }}
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
