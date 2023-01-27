/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TextSnippet } from '@styled-icons/material'
import {
  Explore,
  TableChart,
  Visibility,
} from '@styled-icons/material-outlined'

import { Tree } from '../Tree'
import { TreeCollection } from '../TreeCollection'
import { TreeItem } from '../TreeItem'

export default function FileTree() {
  return (
    <TreeCollection>
      <Tree defaultOpen label={<strong>thelook</strong>} icon={<Explore />}>
        <Tree label="Users" icon={<Visibility />} defaultOpen>
          <Tree label="Orders" icon={<TableChart />} defaultOpen>
            <TreeItem icon={<TextSnippet />}>ID</TreeItem>
            <TreeItem icon={<TextSnippet />}>Status</TreeItem>
            <TreeItem icon={<TextSnippet />}>Created</TreeItem>
          </Tree>
          <Tree label="Users" icon={<TableChart />} defaultOpen>
            <TreeItem icon={<TextSnippet />}>ID</TreeItem>
            <TreeItem icon={<TextSnippet />}>Name</TreeItem>
            <TreeItem icon={<TextSnippet />}>Created</TreeItem>
          </Tree>
        </Tree>
      </Tree>
    </TreeCollection>
  )
}
