/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Icon, Space } from '../..'

export default function Accessibility() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} title="It's a trash can" />
      <Icon icon={<MaterialIcons.DeleteOutline />} />
    </Space>
  )
}
