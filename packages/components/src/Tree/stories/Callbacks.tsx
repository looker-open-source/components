/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeItem, Tree } from '..'

export default function Callbacks() {
  return (
    <Tree
      onOpen={() => alert('Open!')}
      onClose={() => alert('Close!')}
      label="Cheese"
      icon={<MaterialIcons.TableChart />}
    >
      <TreeItem>Gouda</TreeItem>
    </Tree>
  )
}
