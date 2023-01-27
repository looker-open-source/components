/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Chip, Space } from '../..'

export default function ClickAndDelete() {
  const handleClick = () => alert('Clicked!')
  const handleDelete = () => alert('Deleted!')

  return (
    <Space>
      <Chip onClick={handleClick}>Click Me</Chip>
      <Chip disabled onClick={handleClick}>
        Click Me (nothing happens)
      </Chip>
      <Chip onClick={handleClick} onDelete={handleDelete}>
        Delete Me
      </Chip>
      <Chip disabled onClick={handleClick} onDelete={handleDelete}>
        Delete Me (nothing happens)
      </Chip>
    </Space>
  )
}
