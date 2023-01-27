/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeCollection, TreeItem, Tree } from '..'
import { Text } from '../../Text'

export default function Handlers() {
  return (
    <TreeCollection>
      <Tree label="Cheeses" defaultOpen>
        <TreeItem
          icon={<MaterialIcons.TableChart />}
          detail={<Text color="text2">is great</Text>}
          onClick={() => alert('Clicked Swiss')}
          selected
        >
          Swiss
        </TreeItem>
      </Tree>
    </TreeCollection>
  )
}
