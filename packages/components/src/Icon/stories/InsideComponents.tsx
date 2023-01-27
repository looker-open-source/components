/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Space, SpaceVertical, Button, IconButton } from '../..'

export default function InsideComponents() {
  return (
    <SpaceVertical>
      <Space gap="u2">
        <Button size="large" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="large"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button iconAfter={<MaterialIcons.Refresh />}>Add</Button>
        <IconButton
          size="medium"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="small" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="small"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="xsmall" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="xsmall"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>

      <Space gap="u2">
        <Button size="xxsmall" iconAfter={<MaterialIcons.Refresh />}>
          Add
        </Button>
        <IconButton
          size="xxsmall"
          icon={<MaterialIcons.FilterList />}
          label="Filter"
        />
      </Space>
    </SpaceVertical>
  )
}
