/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Icon, Space } from '../..'

export default function Basic() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Done />} />
      <Icon icon={<MaterialIcons.Favorite />} size="large" />
      <Icon icon={<MaterialIcons.Settings />} size="small" />
    </Space>
  )
}
