/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Icon, Space } from '../..'

export default function Size() {
  return (
    <Space around>
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="xxsmall" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="xsmall" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="small" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="medium" />
      <Icon icon={<MaterialIcons.Delete />} color="inform" size="large" />
    </Space>
  )
}
