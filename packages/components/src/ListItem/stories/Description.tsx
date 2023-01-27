/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ListItem } from '..'

export default function Description() {
  return (
    <ListItem
      description="Description text, which is different than detail text"
      detail="detail text"
    >
      List Item
    </ListItem>
  )
}
