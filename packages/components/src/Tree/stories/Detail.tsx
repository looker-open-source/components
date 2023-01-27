/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeItem, Tree, TreeCollection } from '..'
import { IconButton } from '../../Button'

export default function Detail() {
  return (
    <TreeCollection>
      <Tree
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        detail={
          <IconButton
            icon={<MaterialIcons.Info />}
            label="Get Info"
            onClick={() => alert("You've got info!")}
          />
        }
      >
        <TreeItem icon={<MaterialIcons.Tag />}>Cost</TreeItem>
      </Tree>
    </TreeCollection>
  )
}
