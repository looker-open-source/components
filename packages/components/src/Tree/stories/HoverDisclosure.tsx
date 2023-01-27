/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TreeCollection, Tree, TreeItem } from '..'
import { Button } from '../../Button'

export default function HoverDisclosure() {
  return (
    <TreeCollection>
      <Tree
        label="Cheeses"
        detail={{
          content: <Button>Button</Button>,
          options: { accessory: true, hoverDisclosure: true },
        }}
      >
        <TreeItem>Cheddar</TreeItem>
      </Tree>
    </TreeCollection>
  )
}
