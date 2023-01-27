/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Badge, Space } from '../..'
import type { BadgeProps } from '../Badge'

export default function Intent(props: BadgeProps) {
  return (
    <Space around>
      <Badge intent="key" {...props}>
        Key
      </Badge>
      <Badge intent="positive" {...props}>
        Positive
      </Badge>
      <Badge intent="inform" {...props}>
        Inform
      </Badge>
      <Badge intent="neutral" {...props}>
        Neutral
      </Badge>
      <Badge intent="warn" {...props}>
        Warn
      </Badge>
      <Badge intent="critical" {...props}>
        Critical
      </Badge>
    </Space>
  )
}
