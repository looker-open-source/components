/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Chip, Space } from '../..'

export default function IconLabel() {
  const alertTrigger = () => alert('You click on the X')
  return (
    <Space gap="u1">
      <Chip iconLabel="remove chip" onDelete={alertTrigger}>
        hover the x
      </Chip>
      <Chip onDelete={alertTrigger}>hover the x</Chip>
    </Space>
  )
}
