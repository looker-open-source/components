/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Chip, Space } from '../..'

export default function MaxWidth() {
  return (
    <Space gap="u1">
      <Chip maxWidth={150}>short</Chip>
      <Chip maxWidth={150} onDelete={() => alert('deleted')}>
        Very long text inside the chip will be truncated
      </Chip>
    </Space>
  )
}
