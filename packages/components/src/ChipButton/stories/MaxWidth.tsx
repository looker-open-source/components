/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ChipButton, Space } from '../..'

export default function MaxWidth() {
  return (
    <Space gap="u1">
      <ChipButton maxWidth={150}>short</ChipButton>
      <ChipButton maxWidth={150}>
        Very long text inside the chip will be truncated
      </ChipButton>
    </Space>
  )
}
