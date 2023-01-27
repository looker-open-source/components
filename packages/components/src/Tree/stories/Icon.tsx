/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Tree, TreeCollection, TreeItem } from '..'
import { Space } from '../../Layout'

export default function Icon() {
  return (
    <TreeCollection>
      <Tree
        defaultOpen
        icon={<MaterialIcons.Alarm />}
        label={
          <strong>
            <Space between>
              "Alarm" icon has margin-right, but "Download" icon does not
              <MaterialIcons.Download size={20} />
            </Space>
          </strong>
        }
      >
        <TreeItem>Don't mind me</TreeItem>
      </Tree>
    </TreeCollection>
  )
}
