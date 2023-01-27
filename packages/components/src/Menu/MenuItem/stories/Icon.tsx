/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { MenuItem } from '../../..'

export default function Icon() {
  return <MenuItem icon={<MaterialIcons.Person />}>Menu Item</MenuItem>
}
