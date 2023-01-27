/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Icon, Space } from '../..'

export default function Color() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} color="inform" />
      <Space align="center" color="critical" bg="criticalSubtle" p="u5">
        <Icon icon={<MaterialIcons.Delete />} display="inline-flex" />
        Text color is red so the Icon is as well
      </Space>
    </Space>
  )
}
