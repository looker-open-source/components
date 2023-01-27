/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../../Button'
import { Space } from '../../Layout'

export default function ExamplePlacement() {
  return (
    <Space around>
      <Tooltip content="I'm on top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="I'm on bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="I'm on the left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="I'm on the right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </Space>
  )
}
