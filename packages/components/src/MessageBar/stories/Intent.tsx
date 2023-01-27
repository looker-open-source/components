/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { MessageBar, Space } from '../..'

export default function Intent() {
  return (
    <Space around>
      <MessageBar intent="critical">Key</MessageBar>
      <MessageBar intent="inform">Positive</MessageBar>
      <MessageBar intent="positive">Inform</MessageBar>
      <MessageBar intent="warn">Neutral</MessageBar>
    </Space>
  )
}
