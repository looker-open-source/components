/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { TreeCollection, TreeItem, Tree } from '..'
import { IconButton } from '../../Button'

export default function CustomDetail() {
  return (
    <TreeCollection>
      <Tree
        label="Orders"
        icon={<MaterialIcons.TableChart />}
        defaultOpen
        detail={{
          content: (
            <IconButton
              icon={<MaterialIcons.Info />}
              label="Get Info"
              onClick={() => alert("You've got info!")}
            />
          ),
          options: {
            accessory: true,
            hoverDisclosure: true,
          },
        }}
      >
        <TreeItem
          icon={<MaterialIcons.Tag />}
          detail={{
            content: (
              <IconButton
                icon={<MaterialIcons.Star />}
                label={<MaterialIcons.Star />}
                onClick={() => alert("You've pivoted!")}
              />
            ),
            options: {
              accessory: true,
              hoverDisclosure: true,
            },
          }}
        >
          Cost
        </TreeItem>
      </Tree>
    </TreeCollection>
  )
}
