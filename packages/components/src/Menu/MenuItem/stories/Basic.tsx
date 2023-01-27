/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { MenuItem } from '../../..'
import type { MenuItemProps } from '../MenuItem'

export default function Basic(props: MenuItemProps) {
  return <MenuItem {...props}>Menu Item</MenuItem>
}
